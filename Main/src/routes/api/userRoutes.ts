import { Router } from 'express';
const router = Router();
import { getUsers, 
    getSingleUser, 
    createUser, 
    updateUserById, 
    deleteUserById, 
    addNewFriend, 
    deleteFriend, } 
    from '../../controllers/userController.js';

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUserById)
  .delete(deleteUserById);



// /api/users:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(deleteFriend);

export default router;