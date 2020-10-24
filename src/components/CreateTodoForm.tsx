import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Todo } from "../state/Todo";
import { createTodo } from "../state/createTodo";

export type CreateTodoFormProps = {
  onCreate: (todo: Todo) => void;
};

export const CreateTodoForm: React.FC<CreateTodoFormProps> = ({ onCreate }) => {
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
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
