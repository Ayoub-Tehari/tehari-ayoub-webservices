import rolesService from '#src/services/rolesService'


const exposeController = {

    allRoles:async (req,res)=>{
        const allRoles = await rolesService.findAllRoles()
        return res.json(allRoles)
    },
    createRole:async (req,res)=>{
        const {body}  = req
        try {
                const registeredRole = await rolesService.addNewRoles(body)     
                return res.json(registeredRole)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    updateRole:async (req,res)=>{
        const {body}  = req
        try {
                const updatedRole = await rolesService.updateRole(body)     
                return res.json(updatedRole)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    patchRole:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await rolesService.patchRole({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    deleteRole:async (req,res)=>{
        const {body}  = req
        try {
                const deletedRole = await rolesService.deleteRole(body)     
                return res.json(deletedRole)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController