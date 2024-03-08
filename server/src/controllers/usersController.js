import usersService from '#src/services/usersService'


const exposeController = {

    allUsers:async (req,res)=>{
        const allUsers = await usersService.findAllUsers()
        return res.json(allUsers)
    },
    createUser:async (req,res)=>{
        const {body}  = req
        try {
                const registeredUser = await usersService.createUser(body)     
                return res.json(registeredUser)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    updateUser:async (req,res)=>{
        const {body}  = req
        try {
                const updatedUser = await usersService.updateUser(body)     
                return res.json(updatedUser)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    patchUser:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        try {
               
                const toPatch = await usersService.patchUser({id,body})     
                return res.json(toPatch)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },
    deleteUser:async (req,res)=>{
        const {body}  = req
        try {
                const deletedUser = await usersService.deleteUser(body)     
                return res.json(deletedUser)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    }


}

export default exposeController