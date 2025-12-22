import './../App.css'
import { useState, useContext } from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import { FetchSkills } from '../components/FetchSkills.jsx';

import { DisplayModeContext } from '../DisplayModeContext.js';
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomTabs = styled(Tabs)({
  margin: '0 auto'
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }, { darkMode } = useContext(DisplayModeContext)) => ({
  //textTransform: 'none',
  textAlign: 'center',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: darkMode ? "#FFFFFF" : '#000000', // Formerly #FFFFFF
  /*transition: 'ease-in-out',
  transitionDuration: '0.2s',*/
  '&:hover': {
    backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : 'rgba(0, 0, 0, 0.1)', // Formerly rgba(255, 255, 255, 0.1)
    color: darkMode ? "#9ad1ffff" : '#4169e1', // Formerly #9ad1ffff
    opacity: 1
  },
  '&.Mui-selected': {
    color: darkMode ? "#9ad1ffff" : '#4169e1', // Formerly #9ad1ffff
  },
}));

// Provides a custom transition
const customTransition = {
  transition: 'ease-in-out',
  transitionDuration: '0.2s'
}

// Provides styling for the tab indicator
const customTabStyles = {
  '& .MuiTabs-indicator': {
    margin: '0 auto',
  }
}

// Removes the sliding effect of the tab indicator
// (Used if the user prefers reduced motion)
const reducedMotionIndicator = {
  '& .MuiTabs-indicator': {
    transition: 'none'
  }
}

// Provides transition effects if the user does not prefer 
// reduced motion
const customTabTransitions = {
  '& .MuiSvgIcon-root': {
    customTransition
  },
  '& .MuiTabScrollButton-root:hover': {
    customTransition
  }
}

const lightCustomTabs = {
  '& .MuiTabs-indicator': {
    backgroundColor: "#4169e1"
  },

  // Styling for arrow buttons (light mode)
  '& .MuiSvgIcon-root': {
    color: '#000000'
  },

  '& .MuiTabScrollButton-root:hover': {
    backgroundColor: "rgba(0,0,0,0.1)"
  }
}

const darkCustomTabs = {
  '& .MuiTabs-indicator': {
    backgroundColor: "#9ad1ffff"
  },

  // Styling for arrow buttons (dark mode)
  '& .MuiSvgIcon-root': {
    color: '#FFFFFF'
  },

  '& .MuiTabScrollButton-root:hover': {
    backgroundColor: "rgba(255,255,255,0.1)"
  }
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value == index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Skills() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  //const queryClient = new QueryClient()
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  const { darkMode } = useContext(DisplayModeContext)
  const { bg, text, boxBg, border } = DisplayModeHook()

  return (
    <>
      <Navbar activeLink="Skills" />
          <div className={`page-main ${bg}`}>
            <h1 className={`${text} main-header`}>
              Skills
            </h1>

            <div className={`displayModeTransition main-caption ${boxBg} ${border}`}>
              <p className={`${text}`}>
                As a developer, I know that it is necessary to be well-versed in various 
                technologies and skills. Whether it be a framework, database, or soft skill, 
                I ensure that my skillset keeps developing as technological trends evolve.
              </p>
            </div>
            <Box
              sx={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto'
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: darkMode ? "#FFFFFF" : 'divider'
                }}
              >
                <CustomTabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  aria-label="skill category tabs"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  sx={
                    [
                      darkMode ? darkCustomTabs : lightCustomTabs,
                      !prefersReducedMotion ? customTabTransitions : reducedMotionIndicator,
                      customTabStyles
                    ]
                  }
                  /*sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: darkMode ? "#9ad1ffff" : '#4169e1', // Formerly #9ad1ffff
                      margin: '0 auto',
                    },
                    // Styling for arrow buttons
                    '& .MuiSvgIcon-root': {
                      color: darkMode ? "#FFFFFF" : '#000000', // Formerly white
                      transition: 'ease-in-out',
                      transitionDuration: '0.2s',
                    },
                    '& .MuiTabScrollButton-root:hover': {
                      backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                      transition: 'ease-in-out',
                      transitionDuration: '0.2s'
                    }
                  }}*/
                >
                  <CustomTab 
                    label="All Skills" 
                    {...a11yProps(0)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />

                  <CustomTab 
                    label="Frontend" 
                    {...a11yProps(1)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />

                  <CustomTab 
                    label="Backend" 
                    {...a11yProps(2)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />

                  <CustomTab 
                    label="Database" 
                    {...a11yProps(3)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />

                  <CustomTab 
                    label="Tools" 
                    {...a11yProps(4)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />

                  <CustomTab 
                    label="Soft Skills" 
                    {...a11yProps(5)} 
                    sx={
                      [!prefersReducedMotion ? customTransition : ""]
                    }
                  />
                </CustomTabs>
              </Box>
              <CustomTabPanel value={tabValue} index={0}>
                <FetchSkills type={"Frontend"} />
                <FetchSkills type={"Backend"} />
                <FetchSkills type={"Database"} />
                <FetchSkills type={"Tools"} />
                <FetchSkills type={"Soft Skills"} />
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={1}>
                <FetchSkills type={"Frontend"} />
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={2}>
                <FetchSkills type={"Backend"} />
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={3}>
                <FetchSkills type={"Database"} />
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={4}>
                <FetchSkills type={"Tools"} />
              </CustomTabPanel>
              <CustomTabPanel value={tabValue} index={5}>
                <FetchSkills type={"Soft Skills"} />
              </CustomTabPanel>
            </Box>
          </div>
      <Footer />
    </>
  )
}

export default Skills