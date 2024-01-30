import { connectToDb } from '@/lib/database';
import Project from '@/models/project';

export const POST = async (req:Request) => {
    const {category} = await req.json();

    try {
        await connectToDb();
        if(category===""){
            const projects = await Project.find({}).populate("createdBy");
            return new Response(JSON.stringify(projects),{status:200});
        }
        const projects = await Project.find({category}).populate("createdBy");
        // const result = await user.save();

        return new Response(JSON.stringify(projects),{status:200});
    } catch (error) {
        return new Response(JSON.stringify({message:"Failed to create user"}),{status:500})

    }
}