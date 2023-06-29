"use client"

import { deleteProject, fetchToken } from "@/lib/actions"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Props = {
    projectId: string
}
const ProjectActions = ({ projectId }: Props) => {

    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsDeleting(true);

        const {token} = await fetchToken();

        try {
            await deleteProject(projectId,token);
            router.push("/");
        } catch (error) {
            console.log(error);
        } finally{
            setIsDeleting(false);
        }
    }

    return (
        <>
            <Link href={`/edit-project/${projectId}`} className="edit-action_btn flexCenter">
                <Image
                    src='/pencile.svg'
                    width={15}
                    height={15}
                    alt="edit"
                />
            </Link>

            <button
                type="button"
                className={`flecCenter delete-action_btn ${isDeleting ? "bg-gray" : "bg-primary-purple"}`}
                onClick={handleDelete}
                disabled={isDeleting}
            >
                <Image
                    src='/trash.svg'
                    width={15}
                    height={15}
                    alt="delete"
                />
            </button>
        </>
    )
}

export default ProjectActions
