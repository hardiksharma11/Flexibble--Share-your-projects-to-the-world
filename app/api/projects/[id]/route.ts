import Project from "@/models/project";
import { connectToDb } from "@/lib/database";

export const GET = async (req:Request,{params}: {params:{id:string}}) => {
    try {
        const id = params.id;
        await connectToDb();
        const project = await Project.findOne({_id:id}).populate("createdBy");
        return new Response(JSON.stringify({project}), { status: 200 });

    } catch (error) {
        return new Response("Failed to fetch project details", { status: 500 });
    }
}