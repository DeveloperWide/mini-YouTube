import { model, Schema } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Video = model("video", videoSchema);
export default Video;
