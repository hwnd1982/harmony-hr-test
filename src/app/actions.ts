"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "@/shared/lib";
import { Session } from "./types";

export type AxiosSession = {
  data: {
    login: Session;
  };
};

export type AxiosError = {
  message: "Unauthorized" | string;
  extensions: {
    originalError: {
      statusCode: 401;
    };
  };
};
export type AxiosLoginUnauthorized = {
  errors: AxiosError[];
  data: null;
};

export async function login() {
  return decrypt(cookies().get("sessionId")?.value || "");
}

export async function logout() {
  cookies().set({
    name: "sessionId",
    value: "deleted",
    httpOnly: true,
    path: "/",
    expires: new Date(-1),
  });

  redirect("/");
}

export async function signIn(_prevState: undefined | AxiosError, formData: FormData) {
  //john@mail.com
  const email = formData.get("email");
  //changeme
  const password = formData.get("password");
  const expires = new Date(Date.now() + 600 * 1000);

  if (process.env.AUTH_SERVER_URL && email && password) {
    try {
      const { data }: { data: AxiosSession | AxiosLoginUnauthorized } = await axios(process.env.AUTH_SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          query: `mutation { login(email: "${email}", password: "${password}") { access_token refresh_token } }`,
        }),
      });

      if (!data.data) {
        const [error] = data.errors;

        return error;
      }

      cookies().set({
        name: "sessionId",
        value: await encrypt({
          sessionId: JSON.stringify(data.data.login),
          expires,
        }),
        httpOnly: true,
        path: "/",
        expires,
      });
    } catch (error) {
      console.error(error);

      redirect("/error");
    }
  }

  redirect("/");
}
