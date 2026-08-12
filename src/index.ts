import crypto from 'crypto';
export class JWTHandler {
  constructor(private secret: string) {}
  
  sign(payload: Record<string, any>, expiresIn = 3600): string {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + expiresIn * 1000 })).toString('base64url');
    const signature = crypto.createHmac('sha256', this.secret).update(`${header}.${body}`).digest('base64url');
    return `${header}.${body}.${signature}`;
  }
  
  verify(token: string): Record<string, any> {
    const [header, body, signature] = token.split('.');
    const expected = crypto.createHmac('sha256', this.secret).update(`${header}.${body}`).digest('base64url');
    if (signature !== expected) throw new Error('Invalid signature');
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
    if (payload.exp < Date.now()) throw new Error('Token expired');
    return payload;
  }
}
