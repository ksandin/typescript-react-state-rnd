import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { CircularProgress, TextField } from "@material-ui/core";
import { Todo } from "../state/Todo";
import { createTodo } from "../state/createTodo";

export type CreateTodoFormProps = {
  onCreate: (todo: Todo) => void;
  loading?: boolean;
};

export const CreateTodoForm: React.FC<CreateTodoFormProps> = ({
  onCreate,
  loading,
}) => {
  const [label, setLabel] = useState("");
  const setLabelFromEvent = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  );
  const emitOnEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        onCreate(createTodo(label));
        setLabel(""); // Clear label
      }
    },
    [label, onCreate]
  );
  return (
    <Row>
      <TextField
        placeholder="New todo"
        value={label}
        onChange={setLabelFromEvent}
        onKeyPress={emitOnEnter}
      />
      {loading && <LoadingIndicator />}
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoadingIndicator = styled(CircularProgress).attrs({ size: 32 })`
  margin-left: 12px;
`;
