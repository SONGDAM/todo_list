import { Input, Heading, Button, Box } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginProps } from '../@types/ILoginProps';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import google from '../asset/google-login.png';

export const ErrorMessage = styled.div`
  width: 8rem;
  height: 1rem;
  font-size: 12px;
  color: red;
`;

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginProps>();

  const onSubmit: SubmitHandler<ILoginProps> = (data: ILoginProps) => console.log(JSON.stringify(data));

  return (
    <>
      <Heading as='h1' size='xl' noOfLines={1} mb={8}>
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          variant='flushed'
          htmlSize={1}
          mb={4}
          placeholder='ID'
          {...register('Id', {
            pattern: /^[a-zA-Z0-9]*$/,
            required: '필수 입력 항목입니다',
            minLength: { value: 4, message: '아이디를 입력해주세요' },
          })}
        />

        {errors?.Id?.type === 'required' && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}

        <Input
          variant='flushed'
          htmlSize={1}
          mb={4}
          placeholder='password'
          type='password'
          {...register('password', {
            pattern: /^[a-zA-Z0-9]*$/,
            required: '필수 입력 항목입니다',
            minLength: { value: 4, message: '4글자 이상 입력해주세요' },
          })}
        />

        {errors?.password?.type === 'required' && <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>}

        <Button colorScheme='teal' width='14rem' ml={4} mt={8} type='submit'>
          Login!
        </Button>
      </form>

      <Link to='/join'>
        <Button
          colorScheme='blue'
          width='14rem'
          ml={4}
          mt={4}
          type='submit'
          variant='outline'
          rightIcon={<ArrowForwardIcon />}
        >
          join us
        </Button>
      </Link>

      <Link to='/'>
        <Box w='14rem' mt='2rem' ml='1rem' textAlign='center' borderRadius='1rem'>
          <img src={google} alt='' />
        </Box>
      </Link>
    </>
  );
}

export default Login;
