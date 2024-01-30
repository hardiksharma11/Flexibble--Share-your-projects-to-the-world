import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 20 },
    email: { type: String, required: true, unique: true },
    avatarUrl: { type: String },
    description: { type: String },
    githubUrl: { type: String },
    linkedINUrl: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

const User = models.User || model("User", UserSchema);
export default User;