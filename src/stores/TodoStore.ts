import { makeAutoObservable } from "mobx";
import { notifications } from "@mantine/notifications";
import { faker } from "@faker-js/faker";
import { fetchTodos } from "@services/todo/TodoService";
import { Todo } from "@interfaces/todo/TodoTypes";
import { AxiosResponse } from "axios";

class TodoStore {
  todos: Todo[] = [];
  loadedTasks: number = 0;
  page: number = 1;
  limit: number = 10;
  totalPages: number = 1;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTodos() {
    this.setLoading(true);

    try {
      const response = await fetchTodos({ page: this.page, limit: this.limit });
      this.processResponse(response);
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoading(false);
    }
  }

  processResponse(response: AxiosResponse<Todo[]>) {
    const newTodos = response.data.map((todo: Todo) => ({
      ...todo,
      tags: [faker.lorem.word(), faker.lorem.word()],
      description: faker.lorem.paragraph(),
      startDate: faker.date.recent(),
      endDate: faker.date.future(),
    }));

    this.addTodos(newTodos);
    this.calculateTotalPages(response.headers["x-total-count"]);
    this.updateLoadedTasks();
  }

  addTodos(newTodos: Todo[]) {
    this.todos = [...this.todos, ...newTodos];
  }

  calculateTotalPages(totalCount: number) {
    this.totalPages = Math.ceil(totalCount / this.limit);
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  updateLoadedTasks() {
    this.loadedTasks = this.todos.length;
  }

  handleError(error: unknown) {
    notifications.show({
      title: "Oops",
      message: "Error fetching todos",
      color: "red",
    });
    throw error;
  }

  toggleTodoCompleted(id: number) {
    const todoToToggle = this.todos.find((todo) => todo.id === id);

    if (todoToToggle) {
      todoToToggle.completed = !todoToToggle.completed;
    }
  }

  incrementPage() {
    if (this.page < this.totalPages && !this.isLoading) {
      this.page++;
      this.fetchTodos();
    }
  }
}

export default new TodoStore();
