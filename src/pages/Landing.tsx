import { Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 200;
`;

function Landing() {
  return (
    <>
      <Box bg='white' w='100%' p={1} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Title>Write Todo-list with calendar</Title>
        <Link to='/login'>
          <Button colorScheme='teal' size='lg'>
            Get Started
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Landing;
