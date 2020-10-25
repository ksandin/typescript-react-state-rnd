import React from "react";
import { TodoExampleSharedState } from "./TodoExampleSharedState";
import { TodoExampleIsolatedState } from "./TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "./TodoExampleAsyncState";
import { TodoExamplePersistedRemoteState } from "./TodoExamplePersistedRemoteState";
import { TodoExamplePersistedLocalState } from "./TodoExamplePersistedLocalState";
import { TodoExampleContextState } from "./TodoExampleContextState";

export const Examples = () => {
  return (
    <>
      <TodoExampleAsyncState />
      <TodoExamplePersistedRemoteState />
      <TodoExamplePersistedLocalState />
      <TodoExampleContextState />
      <TodoExampleSharedState />
      <TodoExampleIsolatedState />
    </>
  );
};
