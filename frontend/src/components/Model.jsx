import {Dialog, DialogTitle, DialogContent, Typography, IconButton} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { useTheme } from '@mui/material/styles';
//import Controls from './controls/Controls';
import {Close} from '@mui/icons-material';

const useStyles = makeStyles(() =>({
	dialogWrapper:{	
		borderRadius: useTheme().spacing(0),	
		padding: useTheme().spacing(1),
		position: 'absolute',
		top: useTheme().spacing(1)
	},
	dialogTitle:{
		paddingRight: '0px'
	}
}))
export default function Model(props){

	// eslint-disable-next-line react/prop-types
	const {title, children, openModel, setOpenModel} = props;
	const classes = useStyles();
	return(
		<Dialog 
			//sx={{}}
			open={openModel}
			maxWidth="md"
			classes={{ paper: classes.dialogWrapper}}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle className={classes.dialogTitle}>
				<div style={{display: 'flex', justifyContent: 'space-between' }}>
					<Typography						
						component="div"
						sx={{
							flexGrow: 1,
							p: 0,
							fontWeight: 500,
							fontSize: '22px',							
							fontFamily: 'Afacad Flux, sans-serif',
							'@media (max-width: 600px)': { fontSize: '20px' },
						}}
					>
						{title}
					</Typography>
					<IconButton
						onClick={()=>{setOpenModel(false)}}						
						//size="small"
						sx={{  
                        	mt: 1.2,
                        	ml: 1,
	                        borderRadius: 0, 
	                        height: 30, 
	                        width: 40,                  
	                        color: `${'#0F9BF2'}`,
	                        //border: `1px solid ${'#F9CC19'}`,                       
	                        fontSize: '20px',
	                        fontFamily: 'Afacad Flux, sans-serif',
			                '&:hover': {
			                    color: 'white',		                   
			                    cursor: 'pointer',
			                    transition: '0.3s ease-in',
			                },
	                    }}						
					>
						<Close sx={{color: "#0F9BF2", fontSize: '20px'}}/>
					</IconButton>
				</div>
			</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
		</Dialog>
	)
}
