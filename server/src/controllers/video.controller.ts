import { Request, Response } from "express";
import Video from "../models/Video";
import { VideoInterface } from "../types/Video";

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find({});

    res.status(200).json({
      message: "All Videos Retrived",
      videos,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log("Get Videos Controller Error : ", err);
  }
};

export const createVideo = async (req: Request, res: Response) => {
  try {
    const { title, description, file }: VideoInterface = req.body;

    if (!title || !description || !file) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const video = await Video.create({
      title,
      description,
      file,
    });

    res.status(200).json({
      message: "Video Uploaded Successfully",
      video,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log("Create Video Controller Error : ", err);
  }
};

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const { title, description, file }: VideoInterface = req.body;
    const videoToBeUpdated = await Video.findById(req.params.id);

    if (!title || !description || !file) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const updatedVideo = await Video.findByIdAndUpdate(videoToBeUpdated?._id, {
      ...req.body,
    });

    res.status(200).json({
      message: "Video Updated Successfully",
      updatedVideo,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log("Edit Video Controller Error : ", err);
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    await Video.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Video Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log("Delete Video Controller Error : ", err);
  }
};
