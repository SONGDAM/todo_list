import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginProps } from '../@types/ILoginProps';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { Title } from '../pages/Landing';
import { ErrorMessage } from './Login';
import { useNavigate } from 'react-router-dom';

function Join() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginProps>();

  const onSubmit: SubmitHandler<ILoginProps> = async (data: ILoginProps) => {
    fetch(`${process.env.REACT_APP_BASEURL}/users`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => console.log(res));

    navigate('/login');
  };
  return (
    <>
      <Flex align='center' justify='center' direction='column' wrap='wrap'>
        <Box border='1px' borderRadius='lg' w='18rem' h='xl' pt='2rem' pl='2rem' pr='2rem'>
          <Title>Join Us!</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              name
              <Input
                mt='0.8rem'
                mb='1rem'
                placeholder='name'
                {...register('name', {
                  required: '필수 입력 항목입니다',
                })}
              />
            </label>

            {errors?.name?.type === 'required' && <ErrorMessage>이름을 입력해주세요</ErrorMessage>}

            <label>
              email
              <Input
                mt='0.8rem'
                mb='1rem'
                placeholder='email'
                {...register('email', {
                  required: '필수 입력 항목입니다',
                })}
              />
            </label>

            {errors?.email?.type === 'required' && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}
            {/* {errors?.email?.type === 'pattern' && <ErrorMessage>숫자와 문자만 가능합니다</ErrorMessage>} */}
            {errors?.email?.type === 'minLength' && <ErrorMessage>4글자 이상 입력해주세요</ErrorMessage>}

            <label>
              password
              <Input
                mt='0.8rem'
                mb='0.8rem'
                placeholder='password'
                {...register('password', {
                  pattern: /^[a-zA-Z0-9]*$/,
                  required: '필수 입력 항목입니다',
                  minLength: { value: 4, message: '4글자 이상 입력해주세요' },
                })}
                type='password'
              />
            </label>

            {errors?.password?.type === 'required' && <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>}
            {errors?.password?.type === 'pattern' && <ErrorMessage>숫자와 문자만 가능합니다</ErrorMessage>}
            {errors?.password?.type === 'minLength' && <ErrorMessage>4글자 이상 입력해주세요</ErrorMessage>}

            <Button colorScheme='teal' width='14rem' mt={4} type='submit'>
              submit
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default Join;
