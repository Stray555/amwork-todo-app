import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useIntersection } from "@mantine/hooks";
import TodoStore from "@stores/TodoStore";
import { Box, Loader, Flex } from "@mantine/core";
import TodoLoadingSkeleton from "@components/todo/TodoLoadingSkeleton";
import EmptyTodosWarning from "@components/todo/EmptyTodosWarning";
import TodoCard from "./TodoCard";

const TodoList: React.FC = observer(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { ref, entry } = useIntersection({
    root: containerRef.current,
  });

  useEffect(() => {
    if (!TodoStore.todos.length) TodoStore.fetchTodos();
  }, []);

  useEffect(() => {
    if (entry?.isIntersecting && TodoStore.page <= TodoStore.totalPages) {
      TodoStore.incrementPage();
    }
  }, [entry?.isIntersecting]);

  if (TodoStore.isLoading && !TodoStore.todos.length)
    return <TodoLoadingSkeleton />;

  if (!TodoStore.todos.length) return <EmptyTodosWarning />;

  return (
    <Box
      aria-label="Todo list"
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {TodoStore.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      {TodoStore.isLoading ? (
        <Flex justify="center">
          <Loader color="primary-blue.0" variant="dots" />
        </Flex>
      ) : null}
      <div ref={ref} />
    </Box>
  );
});

export default TodoList;
