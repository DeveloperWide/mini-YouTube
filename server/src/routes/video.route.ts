import { Router } from "express";
import {
  createVideo,
  deleteVideo,
  getVideos,
  updateVideo,
} from "../controllers/video.controller";

const router = Router({});

router.get("/", getVideos);
router.post("/", createVideo);
router.patch("/:id", updateVideo);
router.delete("/:id", deleteVideo);

export default router;
