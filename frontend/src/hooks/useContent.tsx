// hooks/useContent.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

type Content = {
  title: string;
  link: string;
  type: string;
};

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);

  async function fetchContent() {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
      setContents(response.data);
    } catch (err) {
      console.error("Failed to fetch contents", err);
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    contents,
    refresh: fetchContent, // <- call this after adding content
  };
}
