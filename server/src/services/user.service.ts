import { Repository } from "../core/base.repository";
import { User, IUser } from "../models/user.model";

export const UserRepository = new Repository<IUser>(User);
