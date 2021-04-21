import { useState, useEffect } from "react"
import youtube from "../apis/youtube"
const KEY = "AIzaSyBwpRqAWNE-lONdsBW8sxSPGy2cssR766o";

const useVideos = (defaulTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaulTerm)
      }, [defaulTerm]);

      const search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: "video",
            key: KEY,
          },
        });
        
        setVideos(response.data.items);
      };

      return [videos, search];
     
}

export default useVideos;