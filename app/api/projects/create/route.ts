import { NextResponse, } from 'next/server'
import User from '@/models/user';
import Project from '@/models/project';
import { connectToDb } from '@/lib/database';

export const POST = async (req:Request) => {
    const {newProject} = await req.json();

    if(!newProject){
        return NextResponse.json({message:"Enter Valid Details"},{status:400})
    }

    try {
        await connectToDb();
        const project = await Project.create(newProject);
        // const result = await user.save();

        return new Response(JSON.stringify(project),{status:200});
    } catch (error) {
        return new Response(JSON.stringify({message:"Failed to create project"}),{status:500})

    }
}