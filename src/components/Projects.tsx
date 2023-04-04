import { Divider, Flex, Heading, Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { Project } from '../types';
import PageLayout from './PageLayout';
import ProjectCard from './ProjectCard';

const projects: Project[] = [
  {
    projectTitle: 'Langooo 💬',
    projectDescription: `Langooo is a real-time chat application aimed at language learners. The app app utilizes Socket.io, a Redis cache, Redux, a session-based authentication system, and a PostgreSQL database.  Some notable featuresinclude the ability to track other user's online status, edit and delete messages in real time, and upload profile images`,
    projectLinks: {
      live: 'https://langoo-frontend-nf5u.vercel.app/',
      github: 'https://github.com/matthew-08/langoo-frontend',
    },
    projectTechnology: [
      'PostgreSQL',
      'React',
      'TypeScript',
      'Node.JS / Express',
      'Redis',
      'Redux',
      'AWS',
      'ChakraUI',
      'Socket.io',
    ],
  },
];

function Projects() {
  return (
    <PageLayout>
      <Flex flexDir="column" maxWidth="800px" minWidth="800px">
        <Box borderBottom="2px solid" pb="1rem" borderColor="gray.400">
          <Heading fontSize="3rem">My Projects</Heading>
        </Box>
        <VStack minW="100%">
          {projects.map((project) => {
            return <ProjectCard key={uuid()} project={project} />;
          })}
        </VStack>
      </Flex>
    </PageLayout>
  );
}

export default Projects;
