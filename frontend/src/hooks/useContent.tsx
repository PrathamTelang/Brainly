// hooks/useContent.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export type Content = {
  title: string;
  link: string;
  type: "twitter" | "youtube"; // Add typing here for better DX
};

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchContent() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
      setContents(response.data);
    } catch (err) {
      console.error("Failed to fetch contents", err);
      setError("Failed to fetch contents");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    contents,
    loading,
    error,
    refresh: fetchContent, // can be used after adding/deleting content
  };
}
