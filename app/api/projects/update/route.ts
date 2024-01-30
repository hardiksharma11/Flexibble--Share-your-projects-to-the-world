import Project from "@/models/project";
import { connectToDb } from "@/lib/database";

export const PUT = async (req:Request) => {
    const {variables} = await req.json();
    try {
        await connectToDb();
        const project = await Project.findByIdAndUpdate(variables.id,variables.input);
        return new Response(JSON.stringify({project}), { status: 200 });

    } catch (error) {
        return new Response("Failed to update project details", { status: 500 });
    }
}