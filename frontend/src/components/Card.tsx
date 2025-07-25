import axios from "axios";
import { DeleteIcon } from "../icons/DeleteIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useEffect } from "react";
import { BACKEND_URL } from "../config";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    _id: string;
    onDelete?: () => void;
}

function deleteCard(contentId: string, onDelete?: () => void) {
    console.log("Delete card function called with ID:", contentId);
    axios.post(`${BACKEND_URL}/api/v1/content/delete`, {
        contentId: contentId
    }, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    .then(response => {
        console.log("Content deleted:", response.data);
        if (onDelete) {
            onDelete(); // Trigger refresh
        }
    })
    .catch(error => {
        console.error("Error deleting content:", error);
    });
}

// Helper function to convert YouTube URLs to embed format
function getYouTubeEmbedUrl(url: string): string {
    // Handle different YouTube URL formats
    const videoIdRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(videoIdRegex);
    
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }
    
    // Fallback to the original method
    return url.replace("watch", "embed").replace("?v=", "/");
}

// Helper function to detect content type from URL if not provided
function detectTypeFromUrl(url: string): "youtube" | "twitter" {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        return "youtube";
    }
    if (url.includes("twitter.com") || url.includes("x.com")) {
        return "twitter";
    }
    return "youtube"; // default fallback
}

export function Card({title, link, type, _id, onDelete}: CardProps) {
    // Debug: Log the props to see what's being passed
    console.log("Card props:", { title, link, type });

    // Fallback type detection if type is not provided or is undefined
    const actualType = type || detectTypeFromUrl(link);

    useEffect(() => {
        // Reinitialize Twitter widgets after component renders
        if (actualType === "twitter" && (window as any).twttr?.widgets) {
            (window as any).twttr.widgets.load();
        }
    }, [actualType, link]);

    return <div className="text-white w-96 p-2 max-h-max bg-neutral-900 rounded-md shadow-lg pt-4">
        <div className="flex justify-between text-lg h-10 pb-4">
            <div className="flex items-center justify-center gap-2">
                <div className="text-primaryPink">
                    <PlusIcon size='lg'/>
                </div>
               {title}
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="text-[#747474] cursor-pointer hover:text-neutral-400 transition-colors">
                    <a href={link.startsWith('http') ? link : `https://${link}`} target="_blank" rel="noopener noreferrer">
                        <ShareIcon size='lg'/>
                    </a>
                </div>
                <div 
                onClick={() => deleteCard(_id, onDelete)} 
                className="text-[#747474] cursor-pointer hover:text-primaryPink transition-colors">
                    <DeleteIcon size='lg'/>
                </div>
            </div>
        </div>
        <div className="">
            {actualType === "youtube" && (
                <iframe 
                    className="w-full h-56 rounded" 
                    src={getYouTubeEmbedUrl(link)} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            )}

            {actualType === "twitter" && (
                <div className="twitter-embed-container">
                    <blockquote className="twitter-tweet" data-theme="dark">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                </div>
            )}
        </div>

    </div>
}