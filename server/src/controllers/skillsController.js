import skillsService from '#src/services/skillsService'


const exposeController = {

    allSkills:async (req,res)=>{
        const allSkills = await skillsService.findAllSkills()
        return res.json(allSkills)
    },
    createSkill:async (req,res)=>{
        const {body}  = req
        try {
                const registeredSkill = await skillsService.addNewSkills(body)     
                return res.json(registeredSkill)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    updateSkill:async (req,res)=>{
        const {body}  = req
        try {
                const updatedSkill = await skillsService.updateSkill(body)     
                return res.json(updatedSkill)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    patchSkill:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await skillsService.patchSkill({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    deleteSkill:async (req,res)=>{
        const {body}  = req
        try {
                const deletedSkill = await skillsService.deleteSkill(body)     
                return res.json(deletedSkill)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController