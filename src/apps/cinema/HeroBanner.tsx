import styled from "styled-components";

export const HeroBanner = styled.div<{ src: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 400px;
  background-image: url(${({ src }) => src});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;
