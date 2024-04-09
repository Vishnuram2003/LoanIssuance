import * as React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        pt: 8, // Padding top
        pb: 8, // Padding bottom
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // This ensures that the content is aligned to the center horizontally
        justifyContent: 'center', // This ensures that the content is aligned to the center vertically (mostly effective for the height of the container)
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:400
      }}
    >
      <Container maxWidth="sm"> {/* This container limits the width of the content, aligning it to the center */}
        <Typography 
          component="h1" 
          variant="h2" 
          align="center" // This ensures the text is centered within its container
          color="text.primary" 
          gutterBottom
        >
          Loan Management Simplified
        </Typography>
        <Typography 
          variant="h5" 
          align="center" // This ensures the text is centered within its container
          color="black" 
          paragraph
        >
          Manage, track, and optimize your loans with ease using our comprehensive Loan Management System.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Align buttons in a row
            justifyContent: 'center', // Center the buttons horizontally
            gap: 2, // Add space between the buttons
            mt: 3, // Margin top for spacing from the text above
          }}
        >
          <Button variant="contained">
            Get Started
          </Button>
          <Button variant="outline">
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
