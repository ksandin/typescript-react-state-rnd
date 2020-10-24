import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import { TodoList } from "./TodoList";
import { CenteredBox } from "./CenteredBox";
import { Todo } from "../state/Todo";
import { useListState } from "../hooks/useListState";
import { CreateTodoForm } from "./CreateTodoForm";

export type AppProps = {
  theme: Theme;
};

export const App: React.FC<AppProps> = ({ theme }) => {
  const [todos, addTodo] = useListState<Todo>();
  return (
    <MuiThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        <CenteredBox>
          <Typography variant="h6">Typescript & React state R&D</Typography>
          <TodoList items={todos} />
          <CreateTodoForm onCreate={addTodo} />
        </CenteredBox>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
};
