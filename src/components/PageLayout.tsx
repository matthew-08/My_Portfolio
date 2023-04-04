import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Flex as="main" width="100%" justifyContent="center">
      {children}
    </Flex>
  );
}

export default PageLayout;
