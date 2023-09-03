import React from "react";
import { Card, Skeleton, Box } from "@mantine/core";

const TodoSkeletonItem: React.FC = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
      <Skeleton height={50} circle mb="md" />
    </Card>
  );
};

const TodoLoadingSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "320px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {Array.from({ length: 5 }).map((_item, index) => (
        <TodoSkeletonItem key={index}></TodoSkeletonItem>
      ))}
    </Box>
  );
};

export default TodoLoadingSkeleton;
