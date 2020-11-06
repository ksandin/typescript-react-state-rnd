import { TodoExampleSharedState } from "../components/TodoExampleSharedState";
import { TodoExampleIsolatedState } from "../components/TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "../components/TodoExampleAsyncState";
import { TodoExamplePersistedRemoteMemoryState } from "../components/TodoExamplePersistedRemoteMemoryState";
import { TodoExamplePersistedLocalStateObserver } from "../components/TodoExamplePersistedLocalStateObserver";
import { TodoExampleContextState } from "../components/TodoExampleContextState";
import { TodoExamplePersistedLocalStateAdapter } from "../components/TodoExamplePersistedLocalStateAdapter";
import { TodoExamplePersistedRemoteMongoDBState } from "../components/TodoExamplePersistedRemoteMongoDBState";
import { MenuCategory } from "../state/MenuCategory";
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
