import {
  extendTheme,
  StyleFunctionProps,
  useColorMode,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: {
      body: (props: StyleFunctionProps) => ({
        margin: 0,
        'font-family':
          'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-text-size-adjust': '100%',
        color: mode('#404040', 'white'),
      }),
    },
    main: {
      black: '#404040',
    },
  },
});

export default theme;
