import { ProjectInterface } from "@/common.types"
import Categories from "@/components/Categories"
import LoadMore from "@/components/LoadMore"
import ProjectCard from "@/components/ProjectCard"
import { fetchAllProjects } from "@/lib/actions"

type SearchParams = {
  category?:string | null,
}

type Props = {
  searchParams:SearchParams
}


const Home = async ({searchParams:{category}}:Props) => {
  if(!category) category=""
  const data = await fetchAllProjects(category)
  const projectsToDisplay = data;
  

  if(projectsToDisplay.length === 0){
    return (
      <section className="flexStart flex-col paddings">
        <Categories />
        <p className="no-result-text text-center">No projects found, go create some first!</p>
      </section>
    )
  }

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories/>

      <section className="projects-grid">
        {projectsToDisplay.map((node:ProjectInterface)=>(
          
          <ProjectCard 
            key={`${node?._id}`}
            id={node?._id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy.name}
            avatarUrl={node?.createdBy.avatarUrl}
            userId = {node?.createdBy._id}
          />
        ))}
      </section>
      
      {/* <LoadMore 
        startCursor={data?.projectSearch?.pageInfo?.startCursor} 
        endCursor={data?.projectSearch?.pageInfo?.endCursor} 
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
        hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      /> */}
    </section>
  )
}

export default Home
