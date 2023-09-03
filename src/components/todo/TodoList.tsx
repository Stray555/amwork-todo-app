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
    threshold: 0,
    rootMargin: '0px',
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
        overflowX: "hidden",
        // Inside scroll
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        // Fixed height
        height: "1200px"
      }}
    >
      {TodoStore.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      {/* div for intersection */}
      <Box sx={{minHeight: "20px", width: '100%'}} ref={ref} ></Box>
      {TodoStore.isLoading ? (
        <Flex justify="center">
          <Loader color="primary-blue.0" variant="dots" />
        </Flex>
      ) : null}
    </Box>
  );
});

export default TodoList;
