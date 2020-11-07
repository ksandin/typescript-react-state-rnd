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
  delete: async (id: Id) => {
    const response = await fetch(baseUrl, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
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
