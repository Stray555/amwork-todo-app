export interface Todo {
    userId: number;
    id: number;
    title: string;
    description: string;
    completed: boolean;
    tags: string[];
    startDate: number | Date;
    endDate: number | Date;
  }
