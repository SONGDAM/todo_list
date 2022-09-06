import { FormErrorMessage, FormControl, Input, Heading, Button } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginProps } from '../@types/ILoginProps';
import styled from 'styled-components';

const ErrorMessage = styled.div`
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
        {errors?.Id?.type === 'pattern' && <ErrorMessage>숫자와 문자만 가능합니다</ErrorMessage>}
        {errors?.Id?.type === 'minLength' && <ErrorMessage>4글자 이상 입력해주세요</ErrorMessage>}

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
        {errors?.password?.type === 'pattern' && <ErrorMessage>숫자와 문자만 가능합니다</ErrorMessage>}
        {errors?.password?.type === 'minLength' && <ErrorMessage>4글자 이상 입력해주세요</ErrorMessage>}

        <Button colorScheme='teal' width='14rem' ml={2} mt={4} type='submit'>
          Login!
        </Button>
      </form>
    </>
  );
}

export default Login;
