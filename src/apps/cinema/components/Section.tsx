import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  link?: React.ReactElement;
};

export const Section: React.FC<SectionProps> = ({
  label,
  children,
  link,
  ...props
}) => (
  <Container {...props}>
    <Header>
      <Typography variant="h5" paragraph={false}>
        {label}
      </Typography>
      {link}
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
