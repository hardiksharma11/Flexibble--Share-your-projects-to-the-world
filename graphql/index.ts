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