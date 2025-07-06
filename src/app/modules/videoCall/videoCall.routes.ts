import express from 'express';
import { generateAgoraToken } from './agoraToken.controller';

const router = express.Router();

router.get('/agora-token', generateAgoraToken);

export default router;
