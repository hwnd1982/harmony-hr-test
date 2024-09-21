import { SignJWT, jwtVerify, JWTPayload } from "jose";

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + 600 * 1000))
    .sign(new TextEncoder().encode(process.env.AUTH_SECRET));
}

export async function decrypt(input: string): Promise<JWTPayload | null> {
  try {
    const verify = await jwtVerify(input, new TextEncoder().encode(process.env.AUTH_SECRET), {
      algorithms: ["HS256"],
    });
    const { payload } = verify;

    return payload;
  } catch (err) {
    return null;
  }
}
