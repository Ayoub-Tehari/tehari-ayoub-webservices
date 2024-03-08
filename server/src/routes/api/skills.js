import express from 'express';
import skillsController from '#src/controllers/skillsController'
import rbacMiddleware  from '#src/middleware/rbac'  
import authGardMiddleware from '#src/middleware/authGard'
const router = express.Router();


router.get('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, skillsController.allSkills);

router.post('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, skillsController.createSkill);

router.patch('/:id',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, skillsController.patchSkill);

router.delete('/:id',authGardMiddleware.protect,rbacMiddleware.authorizationChecker, skillsController.deleteSkill);

export default router;