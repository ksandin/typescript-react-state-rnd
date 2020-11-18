import React, { ComponentType } from "react";

export const createTemplateComponent = <
  P,
  E extends Record<any, JSX.Element>,
  T extends ComponentType<E>
>(
  renderElements: (props: P) => E,
  defaultTemplate: T
) => ({
  children: Template = defaultTemplate,
  ...props
}: P & { children?: ComponentType<E> }) => (
  <Template {...renderElements(props as P)} />
);
