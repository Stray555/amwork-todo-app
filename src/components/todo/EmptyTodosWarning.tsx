import React from "react";
import { Box, Text } from "@mantine/core";

const EmptyTodosWarning: React.FC = () => {
  return (
    <Box sx={{ marginTop: "5rem" }}>
      <Text>No todo items yet</Text>
    </Box>
  );
};

export default EmptyTodosWarning;
