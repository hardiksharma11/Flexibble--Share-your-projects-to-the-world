import User from "@/models/user";
import { connectToDb } from "@/lib/database";

export const GET = async (req:Request,{params}: {params:{email:string}}) => {
    try {
        const email = params.email;
        await connectToDb();
        const user = await User.findOne({email}).populate("projects");
        return new Response(JSON.stringify({user}), { status: 200 });

    } catch (error) {
        return new Response("Failed to fetch user", { status: 500 });
    }
}