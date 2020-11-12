import styled from "styled-components";

export const MovieCard = styled.div<{ backgroundSrc: string }>`
  height: 274px;
  background-image: url(${({ backgroundSrc }) => backgroundSrc});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;
