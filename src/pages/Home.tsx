import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectDayState } from '../atom/selectDayState';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { IconButton, useBoolean } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateTodo from '../components/CreateTodo';
import dayjs from 'dayjs';
import { todoState } from '../atom/todoState';
import { useRecoilValue } from 'recoil';

function Home() {
  const [selctDayValue, change] = useRecoilState(selectDayState);

  const [flag, setFlag] = useBoolean();

  const [isShow, setIsShow] = useState(false);

  const todo = useRecoilValue(todoState);



  const print = (value: Date) => {
    console.log('value >>>', dayjs(value).format('YYYY-MM-DD'));
    console.log('value >>>', todo.day);

    if (dayjs(value).format('YYYY-MM-DD') && todo.day) {
      console.log('same');
      setIsShow(true);
    }
  };

  return (
    <>
      <Calendar onChange={change} value={selctDayValue} onClickDay={print} locale={'en-US'} />

      {!flag && (
        <IconButton
          onClick={setFlag.on}
          colorScheme='teal'
          aria-label='add-todo'
          icon={<AddIcon />}
          ml='1rem'
          mt='0.6rem'
        >
          Add Todo
        </IconButton>
      )}
      {isShow ? "hello": null}
      {flag && <CreateTodo onClose={setFlag.off} />}
    </>
  );
}

export default Home;
