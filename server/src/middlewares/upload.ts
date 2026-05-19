import cloudinary from "../config/cloudinaryConfig";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "videos",
    resource_type: "video",
  } as any,
});

export const upload = multer({ storage });
