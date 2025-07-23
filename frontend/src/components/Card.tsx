import { useEffect } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  const fixedLink = link.replace("x.com", "twitter.com");

useEffect(() => {
  if (type === "twitter") {
    const existingScript = document.getElementById("twitter-wjs");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any)?.twttr?.widgets?.load();
    }
  }
}, [link, type]);



  return (
    <div className="text-white w-96 p-2 max-h-max">
      {/* Header */}
      <div className="flex justify-between text-lg h-10 pb-4">
        <div className="flex items-center justify-center gap-2">
          <div className="text-primaryPink">
            <PlusIcon size="lg" />
          </div>
          {title}
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-[#747474] cursor-pointer">
            <a href={fixedLink} target="_blank" rel="noreferrer">
              <ShareIcon size="lg" />
            </a>
          </div>
          <div className="text-[#747474] cursor-pointer">
            <DeleteIcon size="lg" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {type === "youtube" && (
          <iframe
            src={fixedLink.replace("watch?v=", "embed/")}
            className="w-full"
            width="560"
            height="200"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
  <blockquote className="twitter-tweet">
    <a
      href={link.replace("x.com", "twitter.com")}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </blockquote>
)}


        
      </div>
    </div>
  );
}
