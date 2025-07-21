import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type Content = {
  type: "youtube" | "twitter";
  link: string;
  title: string;
};

export function useContent(): Content[] {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        if (response.data?.content) {
          setContents(response.data.content);
        } else {
          setContents([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch content:", err);
        setContents([]); // Fallback to empty array on error
      });
  }, []);

  return contents;
}
