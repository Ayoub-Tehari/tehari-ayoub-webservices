import User  from "#src/models/Users";
import bcrypt from "bcryptjs"

const exposeServices = {

    findOneUserByEmail:async ({email})=>{
        try {
            const   findUser = await User.findOne({email})
            return  findUser
        } catch (error) {
            throw error
        }

    },
    findOneUserById:async ({id})=>{
        try {
            const   findUser = await User.findOne({_id:id})
            return  findUser
        } catch (error) {
            throw error
        }
    },
    findOneUserByIdWithRoles:async ({id})=>{
        const q     ={_id:id}
        const filter={roles:1}
        const embed ={
            populate:{ path: 'roles', select: 'authorizations' }
        }
        try {
            const   findUser = await User.findOne(q,filter,embed)
             return findUser
        } catch (error) {
            throw error
        }
    },
    findUserByRefreshToken:async ({refreshToken})=>{
        try {
            const   findUser = await User.findOne({refreshToken})
            return  findUser
        } catch (error) {
            throw error
        }
    },
    findAllUsers: async ()=>{
        try {
            const   allUsers = await User.find()
            return  allUsers
        } catch (error) {
            throw error
        }
    },
    createUser: async (rawData)=>{
        const {password} = rawData
        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);
        
        const newUserData = {
            ...rawData,
            password:hash
        }

        try {
            const   toSave  = new User(newUserData)
            const   newUser = toSave.save()   
            return  newUser
        } catch (error) {
            throw error
        }
    },
    updateUserToken: async ({userId,refreshToken})=>{
               
        const query = {
            _id:userId
        }
        const updateQ = {
            $set:{
                refreshToken
            }
        }
        try {
            const   toUpdate = await User.findOneAndUpdate(query,updateQ,{new:true})
            return  toUpdate
        } catch (error) {
            throw error
        }
    },
    patchUser: async ({id,body})=>{
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
            const   patchUser  = await User.findOneAndUpdate(
                {_id:id},
                updateQ,
                {new:true}
            ) 
            return  patchUser
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteUser: async ({id,body})=>{

        try {
            const   deletedUser  = await User.findOneAndDelete(
                id
            ) 
            return  deletedUser
        } catch (error) {
            throw new Error(error)
        }
    },

}



export default exposeServices