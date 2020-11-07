import { SharedStateExample } from "../todo/client/examples/SharedStateExample";
import { IsolatedStateExample } from "../todo/client/examples/IsolatedStateExample";
import { AsyncStateExample } from "../todo/client/examples/AsyncStateExample";
import { RestMemoryExample } from "../todo/client/examples/RestMemoryExample";
import { LocalStorageObserverExample } from "../todo/client/examples/LocalStorageObserverExample";
import { ContextStateExample } from "../todo/client/examples/ContextStateExample";
import { LocalStorageAdapterExample } from "../todo/client/examples/LocalStorageAdapterExample";
import { RestMongooseExample } from "../todo/client/examples/RestMongooseExample";
import { MenuCategory } from "./MenuCategory";
import {
  AccountTree,
  Autorenew,
  CloudQueue,
  Memory,
  Save,
  Share,
} from "@material-ui/icons";

export const createAppMenu = (): MenuCategory[] => [
  {
    name: "Todo App",
    options: [
      {
        name: "Isolated state",
        component: IsolatedStateExample,
        icon: Memory,
      },
      { name: "Shared state", component: SharedStateExample, icon: Share },
      {
        name: "Context state",
        component: ContextStateExample,
        icon: AccountTree,
      },
      {
        name: "Async state",
        component: AsyncStateExample,
        icon: Autorenew,
      },
      {
        name: "REST (Memory)",
        component: RestMemoryExample,
        icon: CloudQueue,
      },
      {
        name: "REST (MongoDB)",
        component: RestMongooseExample,
        icon: CloudQueue,
      },
      {
        name: "LocalStorage (Observer)",
        component: LocalStorageObserverExample,
        icon: Save,
      },
      {
        name: "LocalStorage (Adapter)",
        component: LocalStorageAdapterExample,
        icon: Save,
      },
    ],
  },
];
