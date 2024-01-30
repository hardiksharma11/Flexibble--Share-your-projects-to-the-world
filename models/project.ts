import { Schema, models, model } from 'mongoose';

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    liveSiteUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    category: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Project = models.Project || model("Project", ProjectSchema);
export default Project;