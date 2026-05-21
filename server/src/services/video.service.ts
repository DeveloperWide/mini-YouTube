import { Repository } from "../core/base.repository";
import { IVideo, Video } from "../models/video.model";

export const VideoRepository = new Repository<IVideo>(Video);
