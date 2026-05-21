import { Router } from "express";
import {
  uploadVideo,
  deleteVideo,
  getVideos,
  updateVideo,
} from "../controllers/video.controller";
import { upload } from "../middlewares/upload.middleware";

const router = Router({});

router.get("/", getVideos);
router.post("/upload", upload.single("video"), uploadVideo);
router.patch("/:id", updateVideo);
router.delete("/:id", deleteVideo);

export default router;
