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

    }
   

}



export default exposeServices