import { Schema, model, Types, connect  } from "mongoose";


// 1. Utwórz interfejs reprezentujący dokument w MongoDB.
interface IUser {
    email: string;
    password: string;
    name: string;
    role: "parent" | "child";
    familyId?: Types.ObjectId;
    parentId?: Types.ObjectId;
}

// 2. Utwórz schemat odpowiadający interfejsowi dokumentu.
const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["parent", "child"], required: true },
    // Oraz `Schema.Types.ObjectId` w definicji schematu.
    familyId: {type: Schema.Types.ObjectId},
    parentId: {type: Schema.Types.ObjectId}
});

// 3. Utwórz model.
const User = model<IUser>('User', userSchema);

export default User;
