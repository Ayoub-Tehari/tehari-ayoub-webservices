import UsersS from '#src/services/usersService' 


const rbacMiddleware = {

    authorizationChecker:async (req,res,next)=>{
        const {userId,method,baseUrl} = req
        const thisU = await UsersS.findOneUserByIdWithRoles({id:userId})
        let isAllowed = false;
        
          const ressourcePath = baseUrl.split('/')[3]
        thisU.roles.map(function ({authorizations}){
        
        
          // on tente de trouver la method
          isAllowed |= authorizations.includes("*") ? true : authorizations.includes(method);
          return isAllowed;  
        })
        console.log(`controle de ${ressourcePath} en ${method}`)
        if(isAllowed){
          return next()
        }
        return res.sendStatus(403)
       
    }
}

export default rbacMiddleware