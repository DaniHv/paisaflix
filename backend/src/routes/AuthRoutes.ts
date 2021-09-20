import Router from 'koa-router';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

import {
  refreshSecretKey,
  accessSecretKey,
  sendEmptyRefreshToken,
  createRefreshToken,
  sendRefreshToken,
  createAccessToken,
} from '../utils/auth';
import { User } from '../entities';

const router = new Router();

router.prefix('/auth');

router.post('/login', async (ctx) => {
  const { email, password } = ctx.request.body;

  const user: any = await User.findOne({
    where: { email: email.toLowerCase() },
    select: ['id', 'name', 'email', 'avatar', 'password'],
  });

  if (!user) {
    ctx.status = 400;
    ctx.body = {
      error: 'invalid_credentials',
    };
    return;
  }

  const valid = await argon2.verify(user.password, password);

  if (!valid) {
    ctx.status = 400;
    ctx.body = {
      error: 'invalid_credentials',
    };
    return;
  }

  delete user.password;

  const refreshToken = createRefreshToken(user.id);
  sendRefreshToken(ctx, refreshToken);

  const accessToken = createAccessToken(user.id);

  ctx.body = {
    user,
    accessToken,
  };
});

router.post('/register', async (ctx) => {
  const { name, email, password } = ctx.request.body;

  if (await User.findOne({ where: { email: email.toLowerCase() } })) {
    ctx.status = 400;
    ctx.body = {
      error: 'email_in_use',
    };
    return;
  }

  const hashedPassword = await argon2.hash(password);

  const user = new User();
  user.name = name;
  user.email = email.toLowerCase();
  user.password = hashedPassword;
  await user.save();

  const refreshToken = createRefreshToken(user.id);
  sendRefreshToken(ctx, refreshToken);

  const accessToken = createAccessToken(user.id);

  ctx.body = {
    accessToken,
    user,
  };
});

router.post('/refresh_token', async (ctx) => {
  const refreshToken = ctx.cookies.get('rftk');
  if (!refreshToken) {
    ctx.body = { ok: false, message: 'No token provided.' };

    return;
  }

  let payload: any = null;
  try {
    payload = jwt.verify(refreshToken, refreshSecretKey);
  } catch (err) {
    sendEmptyRefreshToken(ctx);

    ctx.body = { ok: false, message: 'Invalid token' };

    return;
  }

  const { id } = payload;
  const user: any = await User.findOne({ id });

  if (!user) {
    ctx.body = { ok: false, message: 'User does not exist.' };

    return;
  }

  const accessToken = jwt.sign({ id }, accessSecretKey, { expiresIn: '30m' });
  ctx.body = { ok: true, accessToken, user };
});

router.post('/logout', async (ctx) => {
  sendEmptyRefreshToken(ctx);

  ctx.body = { ok: true };
});

export default router;
