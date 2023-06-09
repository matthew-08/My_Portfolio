import React from 'react';
import { Text, useColorMode } from '@chakra-ui/react';

type Props = {
  text: string;
  link: string;
};

function TextLink({ text, link }: Props) {
  const { colorMode } = useColorMode();
  return (
    <Text fontSize="1.2rem" as="a" href={link} color="blue.400">
      <Text
        as="span"
        color={colorMode === 'light' ? 'blackAlpha.700' : 'white'}
      >
        ⃝
      </Text>
      {text}
    </Text>
  );
}

export default TextLink;
