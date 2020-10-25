import React from "react";
import { TodoExampleSharedState } from "./TodoExampleSharedState";
import { TodoExampleIsolatedState } from "./TodoExampleIsolatedState";

export const Examples = () => {
  return (
    <>
      <TodoExampleSharedState />
      <TodoExampleIsolatedState />
    </>
  );
};
