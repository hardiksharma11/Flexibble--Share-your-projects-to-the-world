import Project from "@/models/project";
import { connectToDb } from "@/lib/database";

export const DELETE = async (req:Request,{params}: {params:{id:string}}) => {
    try {
        const id = params.id;
        await connectToDb();
        const project = await Project.findByIdAndDelete(id);
        return new Response(JSON.stringify({project}), { status: 200 });

    } catch (error) {
        return new Response("Failed to detele project", { status: 500 });
    }
}