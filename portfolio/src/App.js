import React, { useState, useMemo } from 'react';
import { 
  Button, Container, Typography, AppBar, Toolbar, Switch, Box, 
  Grid, Card, CardContent, CardActions, Chip, IconButton,
  useMediaQuery, Dialog, DialogContent, MobileStepper, useTheme,
  Paper, Divider, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TaskIcon from '@mui/icons-material/Task';
import QueueIcon from '@mui/icons-material/Queue';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion, AnimatePresence } from 'framer-motion';
import { keyframes } from '@mui/system';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 192, 203, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 192, 203, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 192, 203, 0.5); }
`;

// Theme creation
const getTheme = (darkMode) => createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC0CB', // Baby pink
      light: '#FFE4E1', // Misty rose
      dark: '#FFB6C1', // Light pink
      contrastText: '#000',
    },
    secondary: {
      main: '#98FB98', // Pale green
      light: '#E0FFF0',
      dark: '#90EE90',
      contrastText: '#000',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFE4E1', // Misty rose for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.4rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.2rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 25,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 4px 14px 0 rgba(255, 192, 203, 0.39)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px 0 rgba(255, 192, 203, 0.43)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #FFC0CB 30%, #FFB6C1 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 192, 203, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px 0 rgba(255, 192, 203, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'rgba(255, 192, 203, 0.1)',
          border: '1px solid rgba(255, 192, 203, 0.2)',
          color: '#FFC0CB',
          '&:hover': {
            background: 'rgba(255, 192, 203, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 192, 203, 0.1)',
        },
      },
    },
  },
});

// Project Carousel Component
function ProjectCarousel({ images, open, onClose }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 192, 203, 0.2)',
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 1,
            color: '#FFC0CB',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <Box sx={{ position: 'relative' }}>
          <motion.img
            key={activeStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={images[activeStep].url}
            alt={images[activeStep].title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              p: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: '#FFC0CB' }}>
              {images[activeStep].title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#FFE4E1' }}>
              {images[activeStep].description}
            </Typography>
          </Box>
        </Box>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            background: 'rgba(0, 0, 0, 0.8)',
            '& .MuiMobileStepper-dot': {
              backgroundColor: 'rgba(255, 192, 203, 0.3)',
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#FFC0CB',
            },
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: '#FFC0CB' }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: '#FFC0CB' }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </DialogContent>
    </Dialog>
  );
}

// Project Detail Dialog Component
function ProjectDetailDialog({ project, open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 192, 203, 0.2)',
        }
      }}
    >
      <DialogContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          {project.icon}
          <Typography variant="h4" sx={{ ml: 2, color: '#FFC0CB' }}>
            {project.title}
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
          {project.longDescription}
        </Typography>

        <Typography variant="h6" sx={{ color: '#FFC0CB', mt: 3, mb: 2 }}>
          Key Features
        </Typography>
        <List>
          {project.features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#FFC0CB' }} />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ color: '#FFC0CB', mt: 3, mb: 2 }}>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.tech.map((tech, index) => (
            <Chip
              key={index}
              icon={tech.icon}
              label={tech.name}
              sx={{
                backgroundColor: 'rgba(255, 192, 203, 0.1)',
                border: '1px solid rgba(255, 192, 203, 0.2)',
                color: '#FFC0CB',
              }}
            />
          ))}
        </Box>

        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            sx={{ color: '#FFC0CB', borderColor: '#FFC0CB' }}
          >
            View Code
          </Button>
          {project.demo !== "Coming soon" && (
            <Button
              variant="contained"
              startIcon={<LaunchIcon />}
              href={project.demo}
              target="_blank"
              sx={{
                background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFB6C1 30%, #90EE90 90%)',
                }
              }}
            >
              Live Demo
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => getTheme(darkMode), [darkMode]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState(null);

  const projects = [
    {
      title: "EasyPass",
      description: "A comprehensive examination management system designed to streamline student check-ins and seat allocation. Features include real-time queue management, QR code-based verification, and an intuitive admin dashboard.",
      longDescription: `EasyPass revolutionizes the examination process by implementing smart queue management to reduce wait times, using QR codes for quick student verification, providing real-time seat tracking and allocation, offering an admin dashboard for session monitoring, and ensuring secure and efficient check-in processes.`,
      tech: [
        { name: "React", icon: <CodeIcon /> },
        { name: "Material UI", icon: <BrushIcon /> },
        { name: "Django", icon: <StorageIcon /> },
        { name: "PostgreSQL", icon: <StorageIcon /> },
        { name: "Express", icon: <CodeIcon /> },
        { name: "QR Code", icon: <SecurityIcon /> }
      ],
      features: [
        "Real-time queue management",
        "QR code verification",
        "Admin dashboard",
        "Seat allocation system",
        "Session monitoring",
        "Secure check-in process"
      ],
      github: "https://github.com/cole-naomi/EasyPass",
      demo: "Coming soon",
      role: "Solo Developer",
      images: [
        {
          url: "/images/easypass-dashboard.png",
          title: "Admin Dashboard",
          description: "Comprehensive overview of examination sessions"
        },
        {
          url: "/images/easypass-qr.png",
          title: "QR Code Verification",
          description: "Quick and secure student check-in"
        },
        {
          url: "/images/easypass-queue.png",
          title: "Queue Management",
          description: "Real-time queue status and updates"
        }
      ],
      icon: <QueueIcon sx={{ fontSize: 40, color: '#FFC0CB' }} />
    },
    {
      title: "TaskMate",
      description: "A modern task management application designed to help users organize their daily activities, set priorities, and track progress. Features include task categorization, deadline reminders, and progress analytics.",
      longDescription: `TaskMate helps users stay organized with intuitive task creation and management, smart categorization and priority setting, deadline reminders and notifications, progress tracking and analytics, cross-device synchronization, and collaborative task sharing capabilities.`,
      tech: [
        { name: "React", icon: <CodeIcon /> },
        { name: "Tailwind CSS", icon: <BrushIcon /> },
        { name: "Firebase", icon: <StorageIcon /> },
        { name: "Redux", icon: <CodeIcon /> },
        { name: "PWA", icon: <SpeedIcon /> }
      ],
      features: [
        "Task categorization",
        "Priority management",
        "Deadline reminders",
        "Progress analytics",
        "Cross-device sync",
        "Collaborative sharing"
      ],
      github: "https://github.com/cole-naomi/taskmate",
      demo: "https://taskmate.vercel.app",
      role: "Full Stack Developer",
      images: [
        {
          url: "/images/taskmate-dashboard.png",
          title: "Task Dashboard",
          description: "Overview of all tasks and priorities"
        },
        {
          url: "/images/taskmate-tasks.png",
          title: "Task Management",
          description: "Detailed task view and editing"
        },
        {
          url: "/images/taskmate-mobile.png",
          title: "Mobile View",
          description: "Responsive design for on-the-go access"
        }
      ],
      icon: <TaskIcon sx={{ fontSize: 40, color: '#FFC0CB' }} />
    },
    {
      title: "FoodieFinder",
      description: "A comprehensive restaurant discovery platform that helps users explore local eateries, read reviews, and discover trending dishes. Features include personalized recommendations, user reviews, and restaurant analytics.",
      longDescription: `FoodieFinder enhances the dining experience with advanced restaurant search and filtering, user-generated reviews and ratings, trending dishes and popular spots, personalized recommendations, restaurant analytics and insights, and social sharing and bookmarking features.`,
      tech: [
        { name: "Next.js", icon: <CodeIcon /> },
        { name: "MongoDB", icon: <StorageIcon /> },
        { name: "Express", icon: <CodeIcon /> },
        { name: "Node.js", icon: <CodeIcon /> },
        { name: "Material UI", icon: <BrushIcon /> }
      ],
      features: [
        "Restaurant search",
        "User reviews",
        "Trending dishes",
        "Personalized recommendations",
        "Restaurant analytics",
        "Social features"
      ],
      github: "https://github.com/cole-naomi/foodiefinder",
      demo: "https://foodiefinderapp.vercel.app",
      role: "Backend Developer",
      images: [
        {
          url: "/images/foodiefinder-home.png",
          title: "Home Page",
          description: "Discover trending restaurants and dishes"
        },
        {
          url: "/images/foodiefinder-restaurant.png",
          title: "Restaurant Details",
          description: "Comprehensive restaurant information and reviews"
        },
        {
          url: "/images/foodiefinder-reviews.png",
          title: "User Reviews",
          description: "Authentic user experiences and ratings"
        }
      ],
      icon: <RestaurantIcon sx={{ fontSize: 40, color: '#FFC0CB' }} />
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
    frameworks: ["React", "Next.js", "Express.js", "Node.js", "Django", "Material UI", "Tailwind CSS"],
    tools: ["Git & GitHub", "Firebase", "PostgreSQL", "MongoDB", "Vercel", "Postman", "VS Code", "Figma"]
  };

  return (
    <Box sx={{ 
      backgroundColor: 'background.default',
      minHeight: '100vh',
      background: 'radial-gradient(circle at top right, rgba(255, 192, 203, 0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(152, 251, 152, 0.1), transparent 40%)',
    }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Cole Naomi Oritsemeyiwa
          </Typography>
          <Switch 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#98FB98',
                '& + .MuiSwitch-track': {
                  backgroundColor: '#98FB98',
                },
              },
            }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #FFC0CB, #98FB98)',
              borderRadius: '2px',
            }
          }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2,
                animation: `${float} 6s ease-in-out infinite`,
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Hello, Naomi here.
              A fullstack developer passionate about building user-centric web applications 
              that make a difference.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center',
              '& .MuiIconButton-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#98FB98',
                }
              }
            }}>
              <IconButton 
                href="mailto:runocole@gmail.com"
                sx={{ color: 'primary.main' }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton 
                href="https://github.com/runocole"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                href="https://linkedin.com/in/coleoritse"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(project)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={project.images[0].url}
                          alt={`${project.title} screenshot`}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            borderBottom: '1px solid rgba(255, 192, 203, 0.2)',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '50%',
                            p: 1,
                          }}
                        >
                          {project.icon}
                        </Box>
                      </motion.div>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                          p: 2,
                        }}
                      >
                        <Typography variant="h5" sx={{ color: '#FFC0CB', fontWeight: 'bold' }}>
                          {project.title}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        Role: {project.role}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tech.map((tech, i) => (
                          <Chip 
                            key={i} 
                            icon={tech.icon}
                            label={tech.name} 
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 192, 203, 0.1)',
                              border: '1px solid rgba(255, 192, 203, 0.2)',
                              color: '#FFC0CB',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 192, 203, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{ 
                          color: '#FFC0CB',
                          '&:hover': {
                            color: '#FFE4E1',
                          }
                        }}
                      >
                        Code
                      </Button>
                      {project.demo !== "Coming soon" && (
                        <Button 
                          size="small" 
                          startIcon={<LaunchIcon />}
                          href={project.demo}
                          target="_blank"
                          sx={{ 
                            color: '#98FB98',
                            '&:hover': {
                              color: '#E0FFF0',
                            }
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                      <Button
                        size="small"
                        onClick={() => setSelectedProjectDetail(project)}
                        sx={{
                          color: '#FFC0CB',
                          '&:hover': {
                            color: '#FFE4E1',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {Object.entries(skills).map(([category, items], index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          color: '#FFC0CB',
                          textTransform: 'capitalize',
                          fontWeight: 'bold',
                        }}
                      >
                        {category}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {items.map((skill, i) => (
                          <Chip 
                            key={i} 
                            label={skill} 
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 192, 203, 0.1)',
                              border: '1px solid rgba(255, 192, 203, 0.2)',
                              color: '#FFC0CB',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 192, 203, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Box 
            sx={{ 
              textAlign: 'center',
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(255, 192, 203, 0.1), rgba(152, 251, 152, 0.1))',
              border: '1px solid rgba(255, 192, 203, 0.2)',
              animation: `${glow} 3s infinite`,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Let's Work Together
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              Whether you're building a startup or need help bringing your next big idea to life, 
              I'm excited to collaborate. Let's turn ideas into impactful products.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              href="mailto:runocole@gmail.com"
              sx={{ 
                background: 'linear-gradient(45deg, #FFC0CB 30%, #98FB98 90%)',
                '&:hover': { 
                  background: 'linear-gradient(45deg, #FFB6C1 30%, #90EE90 90%)',
                }
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Project Carousel Dialog */}
      {selectedProject && (
        <ProjectCarousel
          images={selectedProject.images}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Project Detail Dialog */}
      {selectedProjectDetail && (
        <ProjectDetailDialog
          project={selectedProjectDetail}
          open={!!selectedProjectDetail}
          onClose={() => setSelectedProjectDetail(null)}
        />
      )}

      <Box 
        component="footer" 
        sx={{ 
          textAlign: 'center', 
          p: 4, 
          background: 'linear-gradient(90deg, rgba(255, 192, 203, 0.1), rgba(152, 251, 152, 0.1))',
          borderTop: '1px solid rgba(255, 192, 203, 0.1)',
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © 2024 Cole Naomi Oritsemeyiwa. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={getTheme(false)}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
}