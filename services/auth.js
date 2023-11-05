import api from "../utils/api";

// const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function signIn(username, password) {

  try {
    const res = await api.post("/api/auth/local", {
      identifier: username,
      password: password,
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}
