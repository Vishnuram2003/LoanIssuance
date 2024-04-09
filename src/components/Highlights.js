import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PaymentIcon from '@mui/icons-material/Payment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';

const highlights = [
  {
    title: 'Automated Payments',
    description: 'Automate your loan payment processes to ensure timely payments and improve operational efficiency.',
    icon: <PaymentIcon fontSize="large" />,
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor and analyze the performance of your loan portfolio with real-time data and insights.',
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: 'Customer Management',
    description: 'Enhance customer relationships with integrated management tools that streamline communication and support.',
    icon: <GroupIcon fontSize="large" />,
  },
];

export default function Highlights() {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" color="text.primary" gutterBottom>
          LMS Highlights
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Discover the key benefits that set our Loan Management System apart.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {highlights.map((highlight) => (
            <Grid item key={highlight.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 1 }}>{highlight.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {highlight.title}
                  </Typography>
                  <Typography>
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
