import styled from "styled-components";

export const ControlRow = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin: 8px 0;
`;
