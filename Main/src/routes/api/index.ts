import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes';
import thoughtRoutes from './thoughtRoutes';

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;
