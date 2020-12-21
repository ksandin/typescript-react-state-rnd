import React, { ComponentType } from "react";

export const createTemplateComponent = <P, E extends Record<any, JSX.Element>>(
  renderElements: (props: P) => E,
  defaultTemplate: ComponentType<E>
) => ({
  children: Template = defaultTemplate,
  ...props
}: P & { children?: ComponentType<E> }) => (
  <Template {...renderElements(props as P)} />
);
