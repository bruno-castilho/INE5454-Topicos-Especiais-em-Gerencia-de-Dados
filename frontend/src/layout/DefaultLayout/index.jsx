import { useSearchParams } from "react-router-dom";
import { Box, Checkbox, Fab, FormControlLabel, TextField } from "@mui/material";
import Model from "../../components/Model";
import Analiseprecos from "../../components/Analiseprecos";

import { BrightnessHigh } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";



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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export function DefaultLayout(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [openModel, setOpenModel] = React.useState(false);
    const [growhProducts, setGrowhProducts] = React.useState([]);
    const [maxProducts, setMaxProducts] = React.useState([]);
    const [integraProducts, setIntegraProducts] = React.useState([]);

    const brands = searchParams.get("brands")?.split(",") ?? [];

    function handleChangeCheckbox(value) {
        const newList = brands.includes(value)
        ? brands.filter((v) => v !== value)
        : [...brands, value];
        setSearchParams({
        brands: newList.join(","),
        });
    };

  
    return <Box
          sx={{
             display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>

        <Header/>

        <Box display={'flex'} sx={{ flex: 1 }} mt={2}>
            <Box display='flex' flexDirection={'column'} p={2} gap={2} >
            <FormControlLabel
                label="Growth"
                control={
                <Checkbox
                    checked={brands.includes("GROWTH")}
                    onChange={() => handleChangeCheckbox("GROWTH")}
                />
                }
            />

            <FormControlLabel
                label="Max"
                control={
                <Checkbox
                    checked={brands.includes("MAX")}
                    onChange={() => handleChangeCheckbox("MAX")}
                />
                }
            />

            <FormControlLabel
                label="Integralmedica"
                control={
                <Checkbox
                    checked={brands.includes("INTEGRALMEDICA")}
                    onChange={() => handleChangeCheckbox("INTEGRALMEDICA")}
                />
                }
            />

            </Box>
            <Outlet />
        </Box>
        <Box
            sx={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
            }}
        >
            <Fab
                sx={{
                    p: 2,
                    width: 50,
                    height: 50,
                    bgcolor: ` #0F9BF2`,
                    color: "white",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                    "&:hover": {
                        color: "#0F9BF2",
                        //fontSize: "10px",
                        cursor: "pointer",
                        transition: "0.3s ease-in",
                    },
                }}
            >
                <BrightnessHigh
                    sx={{ 
                            fontSize: 25, 
                        }} 
                />
            
            </Fab>
        </Box>
        <Model 
            openModel={openModel} 
            setOpenModel={setOpenModel}
        > 
            <Analiseprecos  max={maxProducts} growh={growhProducts} intra={integraProducts} />
        </Model>

        <Footer 
            primery={"#121313ff"}
            secudary={"#0F9BF2"}
        />
    </Box>
}