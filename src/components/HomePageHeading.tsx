import React from 'react';
import { Flex, Heading, useColorMode } from '@chakra-ui/react';

type Props = {
  title: string;
};
export default function HomePageHeading({ title }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Flex width="100%" borderBottom="1px solid" borderColor="gray.400">
      <Heading
        mt="1rem"
        mb="0.5rem"
        fontFamily="Inter"
        color={colorMode === 'dark' ? 'white' : '#404040'}
      >
        {title}
      </Heading>
    </Flex>
  );
}
