import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsightsIcon from '@mui/icons-material/Insights';
import SecurityIcon from '@mui/icons-material/Security';
import './features.css'

const features = [
  {
    title: 'Loan Origination',
    description: 'Streamline the process of loan origination with automated workflows and document management.',
    icon: <AccountBalanceIcon fontSize="large" />,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Gain insights into your loan portfolio with advanced analytics and custom reporting tools.',
    icon: <InsightsIcon fontSize="large" />,
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure data security and compliance with industry standards and regulations.',
    icon: <SecurityIcon fontSize="large" />,
  },
];
const bgImageUrl = 'https://www.deutschebank.co.in/dam/india/bannerimages/loan_against_property_pb_deskbanner_bg.jpg';
export default function Features() {
  return (
    <Container sx={{
      py: 6,
     borderBlockStartColor:"CaptionText",
     borderBottomRightRadius:500,
     borderTop:5,
      maxWidth: 'md',
      backgroundImage: `url(${bgImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // Add a background overlay if needed (optional)
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust color and opacity for your needs
        zIndex: -1,

      },
    }} maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Core Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item key={feature.title} xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
