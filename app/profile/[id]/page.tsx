import { ProjectInterface, UserProfile } from '@/common.types'
import ProfilePage from '@/components/ProfilePage'
import { getUserProjects } from '@/lib/actions'
import React from 'react'

type Props={
    params :{
        id:string
    }
}

const UserProfilee = async ({params}:Props) => {

    const result = await getUserProjects(params.id,100)

    if(!result?.project) return (
        <p className='no-result-text'>Failed to fetch user info</p>
    )

  return (
    <ProfilePage user = {result?.project[0].createdBy} projects={result?.project} />
  )
}

export default UserProfilee
