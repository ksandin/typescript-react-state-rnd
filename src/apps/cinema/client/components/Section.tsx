import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  header?: React.ReactElement;
};

export const Section: React.FC<SectionProps> = ({
  label,
  children,
  header,
  ...props
}) => (
  <Container {...props}>
    <Header>
      <Typography variant="h5" paragraph={false}>
        {label}
      </Typography>
      {header}
    </Header>
    {children}
  </Container>
);

const Container = styled.div`
  & + & {
    margin-top: 32px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
