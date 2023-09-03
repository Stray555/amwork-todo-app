import TodoList from "@/components/todo/TodoList";
import { AppShell,Flex } from "@mantine/core";
import AppHeader from "@/components/Header";
import TodoHeader from "@/components/todo/Header";

const App: React.FC = () => {
  return (
    <AppShell header={<AppHeader />} padding="sm">
      <Flex
        align="center"
        justify="center"
        direction="column"
        sx={{ margin: "0", width: "100%" }}
      >
        <TodoHeader />
        <TodoList />
      </Flex>
    </AppShell>
  );
};

export default App;
