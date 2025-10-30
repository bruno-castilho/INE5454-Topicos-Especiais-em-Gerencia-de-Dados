import { useState } from 'react';
import {Box, Typography, Divider, Grid} from '@mui/material';
import {Watch, Mail, LocationOn, LocalPhone, MailOutline} from '@mui/icons-material';
//import logo from '../assets/LogoIn13.png';
//import classes from "./Footer.module.css";



function Footer(props) {

	const { primery, secudary } = props;

	return(
		<Box
			sx={{
				bgcolor: `${secudary}`,
          		textAlign: 'center',
          		p: 5,
				color: "white",
			}}

		>
			<p>INE5454 (Topicos Especiais Em Gerencia De Dados)</p>
		</Box>
	)

}

export default Footer;