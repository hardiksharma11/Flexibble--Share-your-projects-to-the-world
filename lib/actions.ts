import { ProjectForm } from "@/common.types";

const isProduction = process.env.NODE_ENV === "production";
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';


export const fetchToken = async () => {
    try {
        const response = await fetch(`${serverUrl}/api/auth/token`);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const uploadImage = async (imagePath: string)=>{
    try {
        const response = await fetch(`${serverUrl}/api/upload`,{
            method:"POST",
            body:JSON.stringify({
                path:imagePath,
            })
        });
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getUser = async (email: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/users/${email}`,{
            method:"GET",
        });
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const createUser = async (name: string, email: string, avatarUrl: string) => {

    try {
        const response = await fetch(`${serverUrl}/api/users/create`,{
            method:"POST",
            body:JSON.stringify({
                name,email,avatarUrl
            })
        });
        return response.json();
    } catch (error) {
        throw error;
    }

}


export const fetchAllProjects = async (category?:string | null)=>{
    try {
        const response = await fetch(`${serverUrl}/api/projects`,{
            method:"POST",
            body:JSON.stringify({
                category
            })
        });
        return response.json();
    } catch (error) {
        throw error;
    }

    
}

export const createNewProject = async (form:ProjectForm,creatorId:string,token:string) => {
    const imageUrl = await uploadImage(form.image);

    if(imageUrl.url){
        
        try {
            const newProject = {
                ...form,
                image:imageUrl.url,
                createdBy:creatorId
            }
            const response = await fetch(`${serverUrl}/api/projects/create`,{
                method:"POST",
                body:JSON.stringify({newProject}),
            })

            return response.json();
        } catch (error) {
            throw error;
        }
        
    }

}


export const updateProject = async (form:ProjectForm,projectId:string,token:string) => {
    const isBase64DataURL = (value:string)=>{
        const base64Regex = /^data:image\/[a-z]+;base64,/;
        return base64Regex.test(value);
    }

    let updateForm = {...form};

    const isUploadinNewImage = isBase64DataURL(form.image);

    if(isUploadinNewImage){
        const imageUrl = await uploadImage(form.image);
        if(imageUrl.url){
            updateForm= {...updateForm,image:imageUrl.url};
        }
    }


    const variables = {
        id:projectId,
        input:updateForm
    };

    try {
        const response = await fetch(`${serverUrl}/api/projects/update`,{
            method:"PUT",
            body:JSON.stringify({variables}),
        })

        return response.json();
    } catch (error) {
        throw error;
    }

}

export const deleteProject = async (id:string , token:string)=>{
    try {
        const response = await fetch(`${serverUrl}/api/projects/delete/${id}`,{
            method:"DELETE",
        });

        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getProjectDetails = async (id:string)=>{
    try {
        const response = await fetch(`${serverUrl}/api/projects/${id}`,{
            method:"GET",
        });

        return response.json();
    } catch (error) {
        throw error;
    }
}

export const getUserProjects = async (id:string, last?:number)=>{
    try {
        const response = await fetch(`${serverUrl}/api/projects/user/${id}`,{
            method:"GET",
        });

        return response.json();
    } catch (error) {
        throw error;
    }
}