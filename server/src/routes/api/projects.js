import express from 'express';
import projectsController from '#src/controllers/projectsController'
import rbacMiddleware  from '#src/middleware/rbac'  
import authGardMiddleware from '#src/middleware/authGard'
const router = express.Router();


router.get('/', projectsController.allProjects);

router.post('/',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, projectsController.createProject);

router.patch('/:id',authGardMiddleware.protect, rbacMiddleware.authorizationChecker, projectsController.patchProject);

router.delete('/:id',authGardMiddleware.protect,rbacMiddleware.authorizationChecker, projectsController.deleteProject);

export default router;