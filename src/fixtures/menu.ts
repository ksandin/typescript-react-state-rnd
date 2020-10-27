import { TodoExampleSharedState } from "../components/TodoExampleSharedState";
import { TodoExampleIsolatedState } from "../components/TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "../components/TodoExampleAsyncState";
import { TodoExamplePersistedRemoteState } from "../components/TodoExamplePersistedRemoteState";
import { TodoExamplePersistedLocalState } from "../components/TodoExamplePersistedLocalState";
import { TodoExampleContextState } from "../components/TodoExampleContextState";
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
        name: "Remote state",
        component: TodoExamplePersistedRemoteState,
        icon: CloudQueue,
      },
      {
        name: "Local state",
        component: TodoExamplePersistedLocalState,
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
