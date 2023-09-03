import TodoList from "@/components/todo/TodoList";
import { AppShell, Box, Flex } from "@mantine/core";
import AppHeader from "@/components/Header";
import TodoHeader from "@/components/todo/Header";

const App: React.FC = () => {
  return (
    <AppShell header={<AppHeader />} padding="sm">
      <Box sx={{ margin: "auto", width: "100vw" }}>
        <Flex
          align="center"
          direction="column"
          sx={{ margin: "auto", width: "400px", padding: "1rem" }}
        >
          <TodoHeader />
          <TodoList />
        </Flex>
      </Box>
    </AppShell>
  );
};

export default App;
