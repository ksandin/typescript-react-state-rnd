import React from "react";
import { TodoExampleSharedState } from "./TodoExampleSharedState";
import { TodoExampleIsolatedState } from "./TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "./TodoExampleAsyncState";
import { TodoExamplePersistedAsyncState } from "./TodoExamplePersistedAsyncState";
import { TodoExampleContextState } from "./TodoExampleContextState";

export const Examples = () => {
  return (
    <>
      <TodoExampleAsyncState />
      <TodoExamplePersistedAsyncState />
      <TodoExampleContextState />
      <TodoExampleSharedState />
      <TodoExampleIsolatedState />
    </>
  );
};
