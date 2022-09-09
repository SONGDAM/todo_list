import { useForm, SubmitHandler } from 'react-hook-form';
import { ILoginProps } from '../@types/ILoginProps';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { Title } from '../pages/Landing';
import { ErrorMessage } from './Login';

function Join() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginProps>();

  const onSubmit: SubmitHandler<ILoginProps> = (data: ILoginProps) => console.log(JSON.stringify(data));

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
              ID
              <Input
                mt='0.8rem'
                mb='1rem'
                placeholder='ID'
                {...register('Id', {
                  pattern: /^[a-zA-Z0-9]*$/,
                  required: '필수 입력 항목입니다',
                  minLength: { value: 4, message: '아이디를 입력해주세요' },
                })}
              />
            </label>

            {errors?.Id?.type === 'required' && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}
            {errors?.Id?.type === 'pattern' && <ErrorMessage>숫자와 문자만 가능합니다</ErrorMessage>}
            {errors?.Id?.type === 'minLength' && <ErrorMessage>4글자 이상 입력해주세요</ErrorMessage>}

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
