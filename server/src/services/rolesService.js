import Roles  from "#src/models/Roles";


const exposeServices = {

    findAllRoles: async ()=>{
        try {
            const   allRoles = await Roles.find()
            return  allRoles
        } catch (error) {
            throw error
        }
    },
    addNewRoles:async (rawData)=>{
        try {
            const newRoles = new Roles(rawData)
            const   addRole = await newRoles.save()
            return  addRole
        } catch (error) {
            throw error
        }

    }
   

}



export default exposeServices