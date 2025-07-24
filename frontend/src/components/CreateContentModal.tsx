import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

type CreateContentModalProps = {
  open: boolean;
  onClose: () => void;
  refresh: () => void; // ✅ added refresh
};

export function CreateContentModal({ open, onClose, refresh }: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

async function addContent() {
  const title = titleRef.current?.value;
  const link = linkRef.current?.value;

  if (!title || !link) {
    alert("Title and link are required.");
    return;
  }
  
  console.log("Title:", title);
  console.log("Link:", link); 
  try {
    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link, 
      title,
      type,
    }, {
      headers: {
        Authorization: localStorage.getItem("token") || "",
      },
    });

    onClose();
    refresh();
  } catch (err) {
    console.error("Error adding content:", err);
    alert("Failed to add content.");
  }
}

  if (!open) return null;

  return (
    <div>
      <div onClick={onClose} className="w-screen h-screen fixed top-0 left-0"></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-950/95 fixed top-4 right-4 h-80 w-lg rounded-2xl border-[#181818] border-2 p-4"
      >
        <div className="flex justify-between text-white">
          <h1 className="text-primaryPink text-2xl">Add Content</h1>
          <div onClick={onClose} className="cursor-pointer">
            <CrossIcon />
          </div>
        </div>

        <div className="mt-2">
          <Input reference={titleRef} placeholder={"Title"} />
          <Input reference={linkRef} placeholder={"Link"} />
        </div>

        <div>
          <Dropdown
            label="Content Type"
            options={["Youtube", "Twitter"]}
            onSelect={(val) =>
              setType(val.toLowerCase() === "youtube" ? ContentType.Youtube : ContentType.Twitter)
            }
            variant="secondary"
            size="md"
            fullWidth
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button
            variant="primary"
            text="Submit"
            size="lg"
            fullWidth={true}
            onClick={addContent}
          />
        </div>
      </div>
    </div>
  );
}
