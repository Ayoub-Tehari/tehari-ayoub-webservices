import Skills  from "#src/models/Skills";


const exposeServices = {

    findAllSkills: async ()=>{
        try {
            const   allSkills = await Skills.find()
            return  allSkills
        } catch (error) {
            throw error
        }
    },
    addNewSkills:async (rawData)=>{
        try {
            const newSkills = new Skills(rawData)
            const   addSkill = await newSkills.save()
            return  addSkill
        } catch (error) {
            throw error
        }

    },
    patchSkill: async ({id,body})=>{
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
            const   patchSkill  = await Skill.findOneAndUpdate(
                {_id:id},
                updateQ,
                {new:true}
            ) 
            return  patchSkill
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteSkill: async ({id,body})=>{

        try {
            const   deletedSkill  = await Skill.findOneAndDelete(
                id
            ) 
            return  deletedSkill
        } catch (error) {
            throw new Error(error)
        }
    },
   

}



export default exposeServices