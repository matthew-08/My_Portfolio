import React from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  text: string;
  link: string;
};

function TextLink({ text, link }: Props) {
  return (
    <Text fontSize="1.2rem" as="a" href={link} color="blue.400">
      <Text as="span" color="blackAlpha.700">
        ⃝
      </Text>
      {text}
    </Text>
  );
}

export default TextLink;
