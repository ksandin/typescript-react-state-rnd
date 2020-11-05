import { CrudAdapter } from "./CrudAdapter";

export const createCrudRestAdapter = <Id, Model>(
  baseUrl: string,
  id: (item: Model) => Id
): CrudAdapter<Id, Model> => ({
  id,
  create: async (item) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    findErrors(response);
    return (await response.json()) as Model;
  },
  readAll: async () => {
    const response = await fetch(baseUrl);
    findErrors(response);
    return (await response.json()) as Model[];
  },
  update: async (item) => {
    const response = await fetch(baseUrl, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    findErrors(response);
    return (await response.json()) as Model;
  },
  delete: async (item: Model) => {
    const response = await fetch(`${baseUrl}/${id(item)}`, {
      method: "delete",
    });
    findErrors(response);
  },
});

const findErrors = (res: Response) => {
  if (res.status !== 200) {
    throw new Error(
      `Server responded with status code ${res.status}: ${res.statusText}`
    );
  }
};
