//All the queries and mutations are defined here

export const getUserQuery = `
    query getUser($email:String!){
        user(by:{email:$email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedINUrl
        }
    }`

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!){
        userCreate(input:$input){
            user{
                name
                email
                avatarUrl
                description
                githubUrl
                linkedINUrl
                id
            }
        }
    }`

export const createProjectMutation = `
    mutation CreateProject($input:ProjectCreateInput!){
        projectCreate(input:$input){
            project{
                id
                title
                description
                createdBy{
                    email
                    name
                }
            }
        }
    }
`;

export const updateProjectMutation = `
    mutation CreateProject($id:ID!,$input:ProjectUpdateInput!){
        projectUpdate(by:{id:$id} , input:$input){
            project{
                id
                title
                description
                createdBy{
                    email
                    name
                }
            }
        }
    }
`;

export const deleteProjectMutation = `
    mutation DeleteProject($id:ID!){
        projectDelete(by:{id:$id}){
            deletedId
        }
    }
`

export const projectsQuery = `
    query getProjects($category:String, $endcursor:String){
        projectSearch(first:8,after:$endcursor,filter:{category:{eq:$category}}) {
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges {
                node {
                    title
                    githubUrl
                    description
                    liveSiteUrl
                    id
                    image
                    category
                    createdBy{
                        id
                        email
                        name
                        avatarUrl
                    }
                }
            }
        }
    }
`;

export const getProjectsOfUserQuery = `
    query getUserProjects($id:ID!, $last:Int = 4){
        user(by:{id:$id}){
            id
            name
            email
            description
            avatarUrl
            githubUrl
            linkedINUrl
            projects(last:$last){
                edges {
                    node {
                        id
                        title
                        image
                    }
                }
            }
        }
    }
`;

export const getProjectByIdQuery = `
    query GetProjectNyId($id:ID!){
        project(by:{id:$id}){
            id
            title
            description
            image
            liveSiteUrl
            githubUrl
            category
            createdBy {
                id
                name
                email
                avatarUrl
            }
        }
    }
`;