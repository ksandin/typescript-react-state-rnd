import styled from "styled-components";

export const Card = styled.div<{ backgroundSrc: string }>`
  height: 274px;
  min-width: 192px;
  background-image: url(${({ backgroundSrc }) => backgroundSrc});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;
