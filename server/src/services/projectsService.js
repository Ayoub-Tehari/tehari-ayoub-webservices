import Projects  from "#src/models/Projects";


const exposeServices = {

    findAllProjects: async ()=>{
        try {
            const   allProjects = await Projects.find()
            return  allProjects
        } catch (error) {
            throw error
        }
    },
    addNewProjects:async (rawData)=>{
        try {
            const newProjects = new Projects(rawData)
            const   addProject = await newProjects.save()
            return  addProject
        } catch (error) {
            throw error
        }

    },
    patchProject: async ({id,body})=>{
        const {
            categories=false,
            ...rest
        } = body
        const updateQ = {
            $addToSet:{
                categories:{
                    $each:categories
                }
            },
            ...rest
        }
        try {
            const   patchProject  = await Project.findOneAndUpdate(
                {_id:id},
                updateQ,
                {new:true}
            ) 
            return  patchProject
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteProject: async ({id,body})=>{

        try {
            const   deletedProject  = await Project.findOneAndDelete(
                id
            ) 
            return  deletedProject
        } catch (error) {
            throw new Error(error)
        }
    },
   

}



export default exposeServices