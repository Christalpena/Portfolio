import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { python, react } from './data';
import { useState } from 'react';
import React from 'react';
import Card from '../Card';

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
        value={value} 
        onChange={handleChange}
        centered
        indicatorColor='secondary'
        textColor='inherit'        
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Python" {...a11yProps(1)} />
          <Tab label="React" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
          <section className='projects-section'>
            {
              python.map((project) => (
                <Card
                  key={project.name}
                  name = {project.name} 
                  description = {project.description}
                  github = {project.github}
                  webSite = {project.webSite}
                  img = {project.image}
                  lenguage1 = {project.lenguage.one}
                  lenguage2 = {project.lenguage.two}
                  lenguage3 = {project.lenguage.three}
                />
              ))
            }
            {
              react.map((project) => (
                <Card
                  key={project.name}
                  name = {project.name} 
                  description = {project.description}
                  github = {project.github}
                  webSite = {project.webSite}
                  img = {project.image}
                  lenguage1 = {project.lenguage.one}
                  lenguage2 = {project.lenguage.two}
                  lenguage3 = {project.lenguage.three}
                />
              ))
            }
          </section>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <section className='projects-section'>
          {
            python.map((project) => (
              <Card
                key={project.name}
                name = {project.name} 
                description = {project.description}
                github = {project.github}
                webSite = {project.webSite}
                img = {project.image}
                lenguage1 = {project.lenguage.one}
                lenguage2 = {project.lenguage.two}
                lenguage3 = {project.lenguage.three}
              />
            ))
          }
        </section>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={2}>
          <section className='projects-section'>
            {
              react.map((project) => (
                <Card
                  key={project.name}
                  name = {project.name} 
                  description = {project.description}
                  github = {project.github}
                  webSite = {project.webSite}
                  img = {project.image}
                  lenguage1 = {project.lenguage.one}
                  lenguage2 = {project.lenguage.two}
                  lenguage3 = {project.lenguage.three}
                />
              ))
            }
          </section>

      </CustomTabPanel>
    </Box>
  );
}