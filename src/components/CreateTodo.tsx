import { MouseEventHandler } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ITodoProps } from '../@types/ITodoProps';
import { Input, Button, Box, Textarea } from '@chakra-ui/react';
import { ErrorMessage } from './Login';
import { selectDayState } from '../atom/selectDayState';
import dayjs from 'dayjs';
import { useRecoilValue, useRecoilState } from 'recoil';
import { todoState } from '../atom/todoState';

type onCloseProps = {
  onClose: MouseEventHandler<HTMLButtonElement>;
};

function CreateTodo({ onClose }: onCloseProps) {
  const selectDay = useRecoilValue(selectDayState);

  const [todo, setTodo] = useRecoilState(todoState);

  console.log('todo>>>>', todo);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ITodoProps>();

  const onSubmit: SubmitHandler<ITodoProps> = (data: ITodoProps) => {
    setTodo({
      day: dayjs(selectDay).format('YYYY-MM-DD'),
      title: data.title,
      content: data.title,
    });
    console.log(JSON.stringify(data));
  };

  return (
    <>
      <Box w='18rem' mt='16rem' border='1px' borderRadius='lg' pt='1rem' pl='2.8rem' pb='1rem'>
        <Box ml='4rem' mb='2rem'>
          Add Todo
        </Box>
        <Box>Now : {dayjs(selectDay).format('MM-DD')}</Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            w='12rem'
            mb='0.4rem'
            htmlSize={1}
            placeholder='title'
            {...register('title', {
              required: '필수 입력 항목입니다',
            })}
          />
          {errors?.title?.type === 'required' && <ErrorMessage>제목을 입력해주세요</ErrorMessage>}
          <Textarea
            w='12rem'
            mb='0.4rem'
            size='md'
            placeholder='content'
            {...register('content', {
              required: '필수 입력 항목입니다',
            })}
          />

          {errors?.title?.type === 'required' && <ErrorMessage>내용을 입력해주세요</ErrorMessage>}
          <Button size='sm' colorScheme='teal' width='8rem' mt='0.8rem' ml='1.8rem' type='submit'>
            add
          </Button>
          <Button size='sm' colorScheme='teal' width='8rem' mt='0.8rem' ml='1.8rem' onClick={onClose}>
            close
          </Button>
        </form>
      </Box>
    </>
  );
}

export default CreateTodo;
