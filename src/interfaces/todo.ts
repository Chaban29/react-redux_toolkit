export interface ITodo {
  id: number;
  firstName: string;
  completed: boolean;
}

export interface ITodos {
  todos: ITodo[];
}
