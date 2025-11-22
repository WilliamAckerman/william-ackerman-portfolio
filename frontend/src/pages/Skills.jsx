import { useState } from 'react'
import './../App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

import { FetchSkills } from '../components/FetchSkills.jsx';

const CustomTabs = styled(Tabs)({
  margin: '0 auto',
  '& .MuiTabs-indicator': {
    backgroundColor: '#9ad1ffff',
    margin: '0 auto',
  },
  // Styling for arrow buttons
  '& .MuiSvgIcon-root': {
    color: 'white',
  }
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  //textTransform: 'none',
  textAlign: 'center',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#9ad1ffff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#9ad1ffff',
  },
}));

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
  //const queryClient = new QueryClient()
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <>
      <Navbar />
          <div className="p-6 bg-blue-900 min-h-screen">
            <h1 className="mb-4 md:mb-8 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              Skills
            </h1>
            <Box
              sx={{
                width: '100%'
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                <CustomTabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  aria-label="skill category tabs"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <CustomTab label="All Skills" {...a11yProps(0)} />
                  <CustomTab label="Frontend" {...a11yProps(1)} />
                  <CustomTab label="Backend" {...a11yProps(2)} />
                  <CustomTab label="Database" {...a11yProps(3)} />
                  <CustomTab label="Tools" {...a11yProps(4)} />
                  <CustomTab label="Soft Skills" {...a11yProps(5)} />
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