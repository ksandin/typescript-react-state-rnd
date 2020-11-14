import styled from "styled-components";

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 0;
`;
