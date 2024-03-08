import projectsService from '#src/services/projectsService'


const exposeController = {

    allProjects:async (req,res)=>{
        const allProjects = await projectsService.findAllProjects()
        return res.json(allProjects)
    },
    createProject:async (req,res)=>{
        const {body}  = req
        try {
                const registeredProject = await projectsService.addNewProjects(body)   
                console.log("project controller : PASSED")  
                return res.json(registeredProject)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    updateProject:async (req,res)=>{
        const {body}  = req
        try {
                const updatedProject = await projectsService.updateProject(body)     
                return res.json(updatedProject)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    patchProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await projectsService.patchProject({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    deleteProject:async (req,res)=>{
        const {body}  = req
        try {
                const deletedProject = await projectsService.deleteProject(body)     
                return res.json(deletedProject)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController