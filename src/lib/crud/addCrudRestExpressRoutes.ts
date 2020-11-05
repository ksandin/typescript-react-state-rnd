import { Express, Response } from "express";
import bodyParser from "body-parser";
import { CrudAdapter } from "./CrudAdapter";

export const addCrudRestExpressRoutes = <Id, Model>(
  path: string,
  app: Express,
  adapter: CrudAdapter<Id, Model>
) => {
  const jsonParser = bodyParser.json();

  // Create
  app.post(path, jsonParser, (req, res) =>
    tryIt(res, async () => res.json(await adapter.create(req.body as Model)))
  );

  // Read
  app.get(path, async (req, res) =>
    tryIt(res, async () => res.json(await adapter.readAll()))
  );

  // Update
  app.put(path, jsonParser, (req, res) =>
    tryIt(res, async () => res.json(await adapter.update(req.body as Model)))
  );

  // Delete
  app.delete(path, jsonParser, (req, res) =>
    tryIt(res, () => adapter.delete(req.body.id as Id))
  );
};

const tryIt = async (res: Response, it: () => Promise<any>) => {
  try {
    await it();
  } catch (e) {
    res.status(500).send((e && e.message) || e + "");
  }
};
