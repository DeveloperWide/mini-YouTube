import { BellIcon, Plus } from "lucide-react";
import { Profile_Img } from "../assets";
import Button from "@mui/material/Button";
import { btnStyle } from "../lib/styles";
import type { Props } from "../layouts/Header";
// import Button from "@mui/material/Button";

const UserControls = ({ handleOpen, setVideo }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Button
        style={btnStyle}
        variant="contained"
        component="label"
        onClick={handleOpen}
      >
        <Plus size={16} />
        Create
        <input
          hidden
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0] || null)}
        />
      </Button>

      <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-zinc-500 hover:text-white">
        <BellIcon size={20} />
      </button>

      <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 transition hover:border-zinc-500">
        <img
          src={Profile_Img}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </button>
    </div>
  );
};

export default UserControls;
