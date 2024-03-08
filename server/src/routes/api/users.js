import express from 'express';
import usersController from '#src/controllers/usersController'
const router = express.Router();


router.get('/',usersController.allUsers);

router.post('/',usersController.createUser);

router.patch('/:id',usersController.patchUser);

router.delete('/:id',usersController.deleteUser);

export default router;