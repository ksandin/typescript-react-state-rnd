import React from "react";
import { TodoExampleSharedState } from "./TodoExampleSharedState";
import { TodoExampleIsolatedState } from "./TodoExampleIsolatedState";
import { TodoExampleAsyncState } from "./TodoExampleAsyncState";
import { TodoExamplePersistedAsyncState } from "./TodoExamplePersistedAsyncState";

export const Examples = () => {
  return (
    <>
      <TodoExampleAsyncState />
      <TodoExamplePersistedAsyncState />
      <TodoExampleSharedState />
      <TodoExampleIsolatedState />
    </>
  );
};
