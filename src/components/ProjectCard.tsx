import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Project } from '../types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Flex flexDir="column" justifyContent="flex-start" mt="1rem" width="100%">
      <Heading>{project.projectTitle}</Heading>
    </Flex>
  );
}

export default ProjectCard;
