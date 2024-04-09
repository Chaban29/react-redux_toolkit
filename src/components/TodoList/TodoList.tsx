import { FC } from 'react';
import { ITodo, ITodos } from '../../interfaces/todo';
import { TodoItem } from '../TodoItem/TodoItem';
import {
  deleteTodo,
  toggleTodoCompleted,
} from '../../redux/todoSlice/todoSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const TodoList: FC = () => {
  const todos = useAppSelector(
    (state) => state.todos.todos
  ) as unknown as ITodos;
  const dispatch = useAppDispatch();

  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleTodo = (todoId: number) => {
    dispatch(toggleTodoCompleted(todoId));
  };

  return (
    <div>
      <div>
        <TodoItem />
        {todos.todos.map((todo: ITodo) => (
          <li
            key={todo.id}
            style={{
              listStyle: 'none',
              paddingTop: 20,
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.firstName}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete todo
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
