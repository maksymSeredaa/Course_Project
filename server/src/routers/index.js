import { Router } from 'express';
import user from './userRouters';
import duelGame from './doubleGameRouters';
import singleGame from './singleGameRouters';
import gameRouter from './gameRouter';
const router = Router();

router.use('/user', user);
router.use('/duelGame',duelGame);
router.use('/singleGame',singleGame);
router.use('/games',gameRouter);

export default router;