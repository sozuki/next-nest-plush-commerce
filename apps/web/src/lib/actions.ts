"use server";

import {fetcher, setAuthTokens} from "@/lib/fetcher";
import {apiUrl} from "@/lib/api-url";



export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface LoginBody {
  email: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export async function login(body: LoginBody): Promise<ApiResponse<Tokens>> {
  try {
    const data = await fetcher(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: "include",
      body: JSON.stringify(body)
    });

    if (data.accessToken && data.refreshToken) {
      await setAuthTokens(data.accessToken, data.refreshToken);
    }


    return {success: true, data: data};
  } catch (error: any) {
    return {success: false, error: error.response?.data?.message};
  }
}

