import { useState } from "react";
import VideoUpload from "../components/VideoUpload";
import Header from "../layouts/Header";
import SignupModal from "../components/SignupModal";
import type { Data } from "../types/types";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState<File | null>(null);
  const [data, setData] = useState<Data | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col gap-y-3 h-screen w-screen bg-[#0F0F0F]">
      <Header handleOpen={handleOpen} setVideo={setVideo} />

      <div className="flex flex-col w-full h-full justify-center items-center gap-y-7">
        <SignupModal
          data={data}
          setData={setData}
          open={open}
          handleClose={handleClose}
        />
        <h1 className="text-7xl font-bold text-red-600">Mini YouTube</h1>
        <VideoUpload />
      </div>
    </div>
  );
};

export default Home;
