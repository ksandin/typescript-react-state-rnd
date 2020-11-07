import { TodoExampleSharedState } from "../todo/client/TodoExampleSharedState";
import { TodoExampleIsolatedState } from "../todo/client/TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "../todo/client/TodoExampleAsyncState";
import { TodoExamplePersistedRemoteMemoryState } from "../todo/client/TodoExamplePersistedRemoteMemoryState";
import { TodoExamplePersistedLocalStateObserver } from "../todo/client/TodoExamplePersistedLocalStateObserver";
import { TodoExampleContextState } from "../todo/client/TodoExampleContextState";
import { TodoExamplePersistedLocalStateAdapter } from "../todo/client/TodoExamplePersistedLocalStateAdapter";
import { TodoExamplePersistedRemoteMongoDBState } from "../todo/client/TodoExamplePersistedRemoteMongoDBState";
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
        name: "Async state",
        component: TodoExampleAsyncState,
        icon: Autorenew,
      },
      {
        name: "Persisted remote state (Memory)",
        component: TodoExamplePersistedRemoteMemoryState,
        icon: CloudQueue,
      },
      {
        name: "Persisted remote state (MongoDB)",
        component: TodoExamplePersistedRemoteMongoDBState,
        icon: CloudQueue,
      },
      {
        name: "Persisted local state (Observer)",
        component: TodoExamplePersistedLocalStateObserver,
        icon: Save,
      },
      {
        name: "Persisted local state (Adapter)",
        component: TodoExamplePersistedLocalStateAdapter,
        icon: Save,
      },
      {
        name: "Context state",
        component: TodoExampleContextState,
        icon: AccountTree,
      },
      { name: "Shared state", component: TodoExampleSharedState, icon: Share },
      {
        name: "Isolated state",
        component: TodoExampleIsolatedState,
        icon: Memory,
      },
    ],
  },
];
