import { Flex, useMediaQuery } from '@chakra-ui/react';
import { ReactNode } from 'react';

function PageLayout({ children }: { children: ReactNode }) {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  return (
    <Flex
      as="main"
      width="100%"
      justifyContent="center"
      pt="3rem"
      px={isSmallerThan800 ? '1rem' : '0'}
    >
      {children}
    </Flex>
  );
}

export default PageLayout;
