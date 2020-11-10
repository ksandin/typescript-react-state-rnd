import { IsolatedStateExample } from "../../todo/client/examples/IsolatedStateExample";
import {
  AccountTree,
  Autorenew,
  CloudQueue,
  Memory,
  Save,
  Share,
} from "@material-ui/icons";
import { SharedStateExample } from "../../todo/client/examples/SharedStateExample";
import { ContextStateExample } from "../../todo/client/examples/ContextStateExample";
import { AsyncStateExample } from "../../todo/client/examples/AsyncStateExample";
import { RestMemoryExample } from "../../todo/client/examples/RestMemoryExample";
import { RestMongooseExample } from "../../todo/client/examples/RestMongooseExample";
import { LocalStorageObserverExample } from "../../todo/client/examples/LocalStorageObserverExample";
import { LocalStorageAdapterExample } from "../../todo/client/examples/LocalStorageAdapterExample";
import { CinemaApp } from "../../cinema/CinemaApp";
import { RouteConfigMap } from "../RouteConfig";

const routeList = [
  {
    path: "/todo/isolated",
    name: "todo-isolated",
    title: "Isolated state",
    app: "Todo",
    component: IsolatedStateExample,
    icon: Memory,
  },
  {
    path: "/todo/shared",
    name: "todo-shared",
    title: "Shared state",
    app: "Todo",
    component: SharedStateExample,
    icon: Share,
  },
  {
    path: "/todo/context",
    name: "todo-context",
    title: "Context state",
    app: "Todo",
    component: ContextStateExample,
    icon: AccountTree,
  },
  {
    path: "/todo/async",
    name: "todo-async",
    title: "Async state",
    app: "Todo",
    component: AsyncStateExample,
    icon: Autorenew,
  },
  {
    path: "/todo/rest/memory",
    name: "todo-rest-memory",
    title: "REST (Memory)",
    app: "Todo",
    component: RestMemoryExample,
    icon: CloudQueue,
  },
  {
    path: "/todo/rest/mongodb",
    name: "todo-rest-mongodb",
    title: "REST (MongoDB)",
    app: "Todo",
    component: RestMongooseExample,
    icon: CloudQueue,
  },
  {
    path: "/todo/localstorage/observer",
    name: "todo-localstorage-observer",
    title: "LocalStorage (Observer)",
    app: "Todo",
    component: LocalStorageObserverExample,
    icon: Save,
  },
  {
    path: "/todo/localstorage/adapter",
    name: "todo-localstorage-adapter",
    title: "LocalStorage (Adapter)",
    app: "Todo",
    component: LocalStorageAdapterExample,
    icon: Save,
  },
  {
    path: "/cinema/demo",
    name: "cinema-demo",
    title: "Demo",
    app: "Cinema",
    component: CinemaApp,
    icon: Save,
  },
];

export const routes: RouteConfigMap = routeList.reduce(
  (map, config) => map.set(config.name, config),
  new Map()
);
