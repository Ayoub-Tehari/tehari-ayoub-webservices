import express from 'express';
import rbacMiddleware  from '#src/middleware/rbac'  
import authGardMiddleware from '#src/middleware/authGard'
import rolesController from '#src/controllers/rolesController'

const router = express.Router();

router.get('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, rolesController.allRoles);

router.post('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, rolesController.createRole);

router.patch('/:id',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, rolesController.patchRole);

router.delete('/:id',authGardMiddleware.protect,rbacMiddleware.authorizationChecker, rolesController.deleteRole);


export default router;