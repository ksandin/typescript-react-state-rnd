import { fetchJson } from "./fetchJson";

export const postJson = async <JSON>(
  url: string,
  body: any,
  init?: RequestInit
) =>
  fetchJson<JSON>(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...init,
  });
