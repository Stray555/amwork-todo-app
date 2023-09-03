import { render, screen } from "@testing-library/react";
import TodoList from "@components/todo/TodoList";

test("renders TodoList component", async () => {
  render(<TodoList />);
  // Assuming component renders an empty todos message when there are no todos
  expect(screen.queryByText("No todos found.")).not.toBeInTheDocument();
});
