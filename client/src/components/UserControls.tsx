import { BellIcon, Plus } from "lucide-react";
import { Profile_Img } from "../assets";

const UserControls = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
        <Plus size={16} />
        Create
      </button>

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
