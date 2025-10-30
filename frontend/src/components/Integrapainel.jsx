import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AmenoaLayoult from './maxproducts/AmenoaLayoult';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
//import AmenoagrLayoult from './growthproducts/AmenoagrLayoult';
import AmenoaintLayoult from './integralproducts/AmenoaintLayout';
// color: #0F9BF2 #1b1c1dff

const useStyles = makeStyles(() => ({
  container: {
    color: "#F9CC19",
    height: "100%",
    width: "100%",
    paddingTop: useTheme().spacing(1),
    //backgroundColor: "white",
    [useTheme().breakpoints.up("sm")]: {
      //backgroundColor:'white',
      color: "#555",
      border: "1px solid #efefe",
    },
  },
  icon: {
    color: "white",
    margin: useTheme().spacing(1),
    [useTheme().breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: useTheme().spacing(2),
    [useTheme().breakpoints.up("sm")]: {
      marginBottom: useTheme().spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    //fontFamily: ', sans-serif',
    fontWeight: 600,
    color: "white",
    //fontSize: "10px",
    [useTheme().breakpoints.down("sm")]: {
      display: "none",
    },
  },
  body: {
    height: "100vh",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


export default function Integrapainel(props) {

    const { setOpcao } = props;
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.body}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                height="100vh"
            >
                <Box flex={2} className={classes.container}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{  }}
                    >
                        <Tab 
                            label={
                                <Typography
                                    //onClick={()=> handleColor("growsell")}
                                    sx={{
                                        //color: `${corgrowsell}`, 
                                        fontFamily: "Inter Tight, sans-serif",
                                        fontWeight: 600,
                                        fontSize: 12,
                                        "&:hover": {
                                            color: `#1b1c1dff`,
                                            cursor: "pointer",
                                            transition: "0.3s ease-in",
                                            //fontSize: 11
                                        },
                                    }}
                                >
                                    Amenoacidos
                                </Typography>
                            } 
                            {...a11yProps(0)} 
                        />
                        <Tab 
                        label={
                                <Typography
                                    //onClick={()=> handleColor("growsell")}
                                    sx={{
                                        //color: `${corgrowsell}`, 
                                        fontFamily: "Inter Tight, sans-serif",
                                        fontWeight: 600,
                                        fontSize: 12,
                                        "&:hover": {
                                            color: `#1b1c1dff`,
                                            cursor: "pointer",
                                            transition: "0.3s ease-in",
                                            //fontSize: 11
                                        },
                                    }}
                                >
                                    Carboidratos
                                </Typography>
                            } 
                        //label="Carboidratos" 
                        {...a11yProps(1)} 
                        
                        />
                        <Tab 
                        label={
                                <Typography
                                    //onClick={()=> handleColor("growsell")}
                                    sx={{
                                        //color: `${corgrowsell}`, 
                                        fontFamily: "Inter Tight, sans-serif",
                                        fontWeight: 600,
                                        fontSize: 12,
                                        "&:hover": {
                                            color: `#1b1c1dff`,
                                            cursor: "pointer",
                                            transition: "0.3s ease-in",
                                            //fontSize: 11
                                        },
                                    }}
                                >
                                    Pré-Treino
                                </Typography>
                            } 
                        //label="Pre-Treino" 
                        {...a11yProps(2)} 
                        />
                        <Tab
                        label={
                                <Typography
                                    //onClick={()=> handleColor("growsell")}
                                    sx={{
                                        //color: `${corgrowsell}`, 
                                        fontFamily: "Inter Tight, sans-serif",
                                        fontWeight: 600,
                                        fontSize: 12,
                                        "&:hover": {
                                            color: `#1b1c1dff`,
                                            cursor: "pointer",
                                            transition: "0.3s ease-in",
                                            //fontSize: 11
                                        },
                                    }}
                                >
                                    Proteínas
                                </Typography>
                            }  
                        //label="Proteinas" 
                        {...a11yProps(3)} 
                        />
                    </Tabs>
                </Box>
                <Box
                    flex={12}
                    //p={1}
                    component="main"
                    sx={{ position: "relative", height: "100%", overflowY: "none", mb: 1 }}
                >
                    <TabPanel value={value} index={0}>
                        <AmenoaintLayoult setOpcao={setOpcao} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Carboidratos
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Pré Treinos
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Proteinas
                    </TabPanel>
                </Box>
            </Stack>
        </div>
    )
}
