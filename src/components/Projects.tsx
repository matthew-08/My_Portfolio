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
  {
    projectTitle: 'Noic 💰',
    projectDescription: `Noic is a cryptocurrency portfolio and price tracker. The app provides users with the ability to save, edit, and delete their crypto transactions and favorite coins.  Building this application taught me a ton about how to structure REST APIs and effectively exchange data between the front-end and backend.`,
    projectLinks: {
      live: 'https://noic-matthew-08.vercel.app/',
      github: 'https://github.com/matthew-08/Crypto_Tracker',
    },
    projectTechnology: [
      'TypeScript',
      'React',
      'PostgreSQL',
      'Node.JS / Express',
      'Railway',
      'Git',
      'CSS Modules',
    ],
  },
  {
    projectTitle: 'A Forum 💬',
    projectDescription: `A forum application wherein users can create posts and leave comments on posts. Authentication and storage for this application were implemented using Firebase while the front end utilizes React.`,
    projectLinks: {
      live: 'https://forum-project-two.vercel.app/',
      github: 'https://github.com/matthew-08/Forum-Project',
    },
    projectTechnology: [
      'React',
      'Firebase',
      'Firestore',
      'React-Router-Dom',
      'Vanilla CSS',
    ],
  },
  {
    projectTitle: "Where's Waldo",
    projectDescription: `A web-based click game based on the children's game "Where's Waldo".  Coordinates for each character are stored using Firebase and upon click are checked.  User's have the option to save their score in a leaderboard and compare with others.`,
    projectLinks: {
      live: 'https://wheres-waldo-theta.vercel.app/',
      github: 'https://github.com/matthew-08/waldo-photo-tagging-app',
    },
    projectTechnology: ['React', 'Firebase', 'Vanilla CSS'],
  },
  {
    projectTitle: 'Battleship',
    projectDescription:
      'A web-based battleship game built entirely in vanilla JavaScript.  The main goal here was to follow MVC principles in order to build structured and composable code.',
    projectLinks: {
      live: 'https://top-battleship-six.vercel.app/',
      github: 'https://github.com/matthew-08/top-Battleship',
    },
    projectTechnology: ['JavaScript', 'HTML', 'Vanilla CSS'],
  },
  {
    projectTitle: 'React Weather App',
    projectDescription:
      'A weather app made in react.  Utilizes OpenWeatherMap API in order to provide up to date weather forecasts for any location around the world.',
    projectLinks: {
      github: 'https://github.com/matthew-08/react-weather-app',
    },
    projectTechnology: ['JavaScript', 'HTML', 'Vanilla CSS'],
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
