import axios from "axios";
import { useState } from "react";
import type { Data } from "../types/types";

const VideoUpload = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [data, setData] = useState<Data | null>(null);

  const uploadHandler = () => {
    console.log(video);
    if (!video) return;

    console.log(video);

    const formData = new FormData();

    formData.append("video", video);

    axios
      .post("http://localhost:8080/api/videos/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        name="video"
        onChange={(e) => setVideo(e.target.files?.[0] || null)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-2xl text-white text-xl font-semibold"
        onClick={uploadHandler}
      >
        Upload
      </button>
    </div>
  );
};

export default VideoUpload;
