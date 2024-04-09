import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './AppAppBar'; // Placeholder for your AppAppBar component
import Hero from './Hero'; // Placeholder for your Hero component
import Highlights from './Highlights'; // Placeholder for your Highlights component
import Features from './Features'; // Placeholder for your Features component
import Footer from './Footer'; // Placeholder for your Footer component
import getLPTheme from '../getLPTheme'; // Placeholder for your getLPTheme function
import AnimatedBackground from './AnimatedBackground';

export default function LandingPage({ mode, toggleColorMode }) {
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Divider />
      <br /><br />
      <Hero />
      <Box>
        <Features />
      </Box>
      {/* If you have more components to include, add them here */}
    
    </ThemeProvider>
  );
}
