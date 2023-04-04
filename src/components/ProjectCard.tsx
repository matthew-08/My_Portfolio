import { Flex, Heading, Text, Link, Divider } from '@chakra-ui/react';
import React from 'react';
import { Project } from '../types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Flex
      flexDir="column"
      justifyContent="flex-start"
      mt="1rem"
      width="100%"
      borderBottom="2px solid"
      borderColor="gray.400"
      pb="1rem"
    >
      <Heading mb="1rem" fontFamily="inter" mt="1rem">
        {project.projectTitle}
      </Heading>
      <Text fontSize="1.1rem" mb="1rem">
        {project.projectDescription}
      </Text>
      <Heading
        fontFamily="inter"
        fontSize="1.5rem"
        fontWeight="600"
        mb="0.3rem"
      >
        Technologies ⚡
      </Heading>
      <Text mb="1rem">{project.projectTechnology.join(', ')}</Text>
      <Link
        fontSize="1.3rem"
        href={project.projectLinks.live}
        color="blue.600"
        as={Link}
      >
        🔗 Live
      </Link>
      <Link
        fontSize="1.3rem"
        href={project.projectLinks.github}
        color="blue.600"
        as={Link}
      >
        🔗 Github
      </Link>
    </Flex>
  );
}

export default ProjectCard;
