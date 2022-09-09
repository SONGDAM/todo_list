import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectDayState } from '../atom/selectDayState';
import Calendar from 'react-calendar';
import '../styles/calendar.css';
import { IconButton, Box, useBoolean, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateTodo from '../components/CreateTodo';
import dayjs from 'dayjs';
import { todoState } from '../atom/todoState';
import { useRecoilValue } from 'recoil';
import { ITodoProps } from '../@types/ITodoProps';

function Home() {
  const [selctDayValue, change] = useRecoilState(selectDayState);

  const [flag, setFlag] = useBoolean();

  const [isShow, setIsShow] = useState(false);

  const todo = useRecoilValue(todoState);

  const todoToArray = Array.from(todo);

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
      <Box mt='2rem'>
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
        {isShow ? console.log(todoToArray instanceof Array) : null}
        {flag && <CreateTodo onClose={setFlag.off} />}
      </Box>
    </>
  );
}

export default Home;
