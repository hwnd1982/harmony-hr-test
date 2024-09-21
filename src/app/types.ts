export type Session = {
  access_token: string;
  refresh_token: string;
};

export function isSession(value: unknown): value is Session {
  return (
    !!value &&
    typeof value === "object" &&
    Object.hasOwn(value, "access_token") &&
    Object.hasOwn(value, "refresh_token")
  );
}
