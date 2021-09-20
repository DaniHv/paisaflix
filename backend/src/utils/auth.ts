import jwt from 'jsonwebtoken';

export const refreshSecretKey: string = process.env.RFTK_SECRET_KEY ?? '';

export const accessSecretKey: string = process.env.ACTK_SECRET_KEY ?? '';

export const createRefreshToken = (id: any) =>
  jwt.sign({ id }, refreshSecretKey, { expiresIn: '30d' });

export const sendRefreshToken = (ctx: any, token: string) => {
  ctx.cookies.set('rftk', token, {
    // domain: 'api.paisaflix.danihv.com',
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // secure: true,
    // path: '/',
    // sameSite: 'lax',
  });
};

export const sendEmptyRefreshToken = (ctx: any) => {
  ctx.cookies.set('rftk', '', {
    // domain: 'api.paisaflix.danihv.com',
    httpOnly: true,
    // secure: true,
    path: '/',
    // sameSite: 'lax',
  });
};

export const createAccessToken = (id: any) =>
  jwt.sign({ id }, accessSecretKey, { expiresIn: '30m' });
