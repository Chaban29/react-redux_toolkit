import { FC, useEffect, useState } from 'react';
import { InputField } from '../InputField/InputField';
import { TypeText } from '../../types/todo';
import { useAppSelector } from '../../hooks/useAppSelector';

export const TodoItem: FC = () => {
  const [text, setText] = useState<TypeText>('');
  const todos = useAppSelector((state) => state.todos.todos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='container'>
      <InputField setText={setText} text={text} />
    </div>
  );
};
