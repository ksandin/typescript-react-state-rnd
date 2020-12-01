import React from "react";
import { useCinemaDispatcher } from "../hooks/useCinemaDispatcher";
import { CinemaActions } from "../state/CinemaActions";

type SuspenseProps = React.PropsWithChildren<{
  dependencies?: Array<keyof CinemaActions>;
  error?: boolean;
  loadingFallback: JSX.Element;
  errorFallback: JSX.Element;
}>;

export const Suspense = ({
  children,
  loadingFallback,
  errorFallback,
}: SuspenseProps) => {
  const [, dispatches] = useCinemaDispatcher();
  const allDispatchNames = Object.keys(dispatches) as Array<
    keyof CinemaActions
  >;
  const totalPending = allDispatchNames.reduce(
    (pending, name) => pending + dispatches[name].pending,
    0
  );
  let fallback: React.ReactNode;
  if (totalPending > 0) {
    fallback = loadingFallback;
  }
  const allStatuses = allDispatchNames.map(
    (dependency) => dispatches[dependency].status
  );
  if (allStatuses.includes("rejected")) {
    fallback = errorFallback;
  }
  return (
    <>
      {fallback}
      <div style={{ display: fallback ? "none" : undefined }}>{children}</div>
    </>
  );
};
