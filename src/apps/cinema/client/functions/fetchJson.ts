export const fetchJson = async <JSON>(
  url: string,
  init?: RequestInit
): Promise<JSON> => {
  const res = await fetch(url, init);
  return await res.json();
};
