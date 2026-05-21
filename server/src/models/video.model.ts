import { model, Schema, Document } from "mongoose";

export interface IVideo extends Document {
  title: string;
  description: string;
  videoUrl: string;
  thumnail: string;
}

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

export const Video = model<IVideo>("Video", videoSchema);
