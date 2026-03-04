import api from "./api";

export async function registerUser(payload) {
  console.log("registerUser payload:", payload);
  console.log("request url should be:", `${api.defaults.baseURL}/users`);

  const res = await api.post("/users", payload);
  return res.data;
}
