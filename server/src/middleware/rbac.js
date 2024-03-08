import UsersS from '#src/services/usersService' 


const exposeMiddleware = {

    authorizationChecker:async (req,res,next)=>{
        const {userId,method,baseUrl} = req
        const thisU = await UsersS.findOneUserByIdWithRoles({id:userId})
        const {authorizations} = thisU.roles[0]
        
        const ressourcePath = baseUrl.split('/')[3]
       
        // on tente de trouver la ressource:
        const findRessource = authorizations.find(({ressource})=>ressource==ressourcePath)
        // on tente de trouver la method
        const isAllowed = findRessource.permissions.includes(method)
        
        console.log(`controle de ${ressourcePath} en ${method}`,findRessource)
        if(isAllowed){
          return next()
        }
        return res.sendStatus(403)
       
    }
}

export default exposeMiddleware