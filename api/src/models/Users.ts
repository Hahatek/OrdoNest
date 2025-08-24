import {types} from "mongoose";

interface IUser {
    email: string;
    password: string;
    name: string;
    role: "parent" | "child";
    familyId?: types.ObjectId;
    parentId?: types.ObjectId;
}