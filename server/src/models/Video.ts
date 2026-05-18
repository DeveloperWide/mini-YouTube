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
    file: {
      url: {
        type: String,
        required: true,
      },
      imageURL: {
        type: String,
        required: true,
      },
      required: true,
    },
  },
  { timestamps: true },
);

const Video = model("video", videoSchema);
export default Video;
