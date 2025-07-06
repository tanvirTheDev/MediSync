import { RtcRole, RtcTokenBuilder } from 'agora-access-token';
import { Request, Response } from 'express';

const APP_ID = process.env.AGORA_APP_ID as string;
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE as string;

export const generateAgoraToken = (req: Request, res: Response) => {
  const channelName = req.query.channelName as string;
  if (!channelName) {
    return res.status(400).json({ error: 'channelName is required' });
  }
  const uid = req.query.uid ? Number(req.query.uid) : 0;
  const role = RtcRole.PUBLISHER;
  const expireTime = 3600; // 1 hour
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTimestamp + expireTime;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid,
    role,
    privilegeExpireTime,
  );
  return res.json({ token });
};
