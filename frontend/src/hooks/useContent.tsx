import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

<<<<<<< HEAD
export type Content = {
  title: string;
  link: string;
  type: "twitter" | "youtube"; // Add typing here for better DX
=======
type Content = {
  type: "youtube" | "twitter";
  link: string;
  title: string;
>>>>>>> parent of 73c3a8e (Improve Twitter link handling and content refresh)
};

export function useContent(): Content[] {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  async function fetchContent() {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
=======
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
>>>>>>> parent of 73c3a8e (Improve Twitter link handling and content refresh)
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
<<<<<<< HEAD
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
=======
  }, []);

  return contents;
>>>>>>> parent of 73c3a8e (Improve Twitter link handling and content refresh)
}
