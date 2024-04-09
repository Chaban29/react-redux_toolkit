import { Dispatch, FC, SetStateAction } from 'react';
import { addTodo } from '../../redux/todoSlice/todoSlice';
import { useDispatch } from 'react-redux';

interface IInputField {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const InputField: FC<IInputField> = ({ text, setText }: IInputField) => {
  const dispatch = useDispatch();
  const handleAddNewTodo = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <label htmlFor='text'>
        <input
          type='text'
          name='text'
          id='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button onClick={handleAddNewTodo}>Add new todo</button>
    </div>
  );
};
