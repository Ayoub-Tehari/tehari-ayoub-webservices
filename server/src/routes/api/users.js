import express from 'express';
import usersController from '#src/controllers/usersController'
import rbacMiddleware  from '#src/middleware/rbac'  
import authGardMiddleware from '#src/middleware/authGard'
const router = express.Router();


router.get('/',authGardMiddleware.protect, usersController.allUsers);

router.post('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, usersController.createUser);

router.patch('/:id',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, usersController.patchUser);

router.delete('/:id',authGardMiddleware.protect,rbacMiddleware.authorizationChecker, usersController.deleteUser);

export default router;