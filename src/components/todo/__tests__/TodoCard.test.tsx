import { Todo } from "@interfaces/todo/TodoTypes";
import { render, screen } from "@testing-library/react";
import TodoCard from "@components/todo/TodoCard.tsx";

const todo: Todo = {
  id: 1,
  userId: 1,
  title: "Todo 1",
  tags: ["Tag1", "Tag2"],
  startDate: new Date(),
  endDate: new Date(),
  description: "Description",
  completed: false,
};

test('demo', () => {
  expect(true).toBe(true)
})

test("renders TodoCard component", () => {
  render(<TodoCard todo={todo} />);

  // Assuming component renders an element with aria-label="Todo card"
  const todoCard = screen.getByLabelText("Todo card");
  expect(todoCard).toBeInTheDocument();

});
