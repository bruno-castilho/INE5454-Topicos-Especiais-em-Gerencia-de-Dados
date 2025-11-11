import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export function Boxproduct(props) {

    const { product } = props
    return (
        <Paper 
            sx={{ 
                p: 1, 
                borderRadius: 0, 
                maxWidth: 250,                
            }}>
        <Box>
            <Typography 
                component={"div"} 
                sx={{ 
                   display: "flex",
                   //flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   textAlign: "center",
                
                }}
            >
                <img
                    src={product.FIGURA}
                    width={100}
                    height={95}
                />
            </Typography>
        </Box>
        <Box>
            <Typography
                sx={{
                    fontSize: ".8rem",
                    fontWeight: 600,
                    fontFamily: "Afacad Flux, sans-serif",
                    //textAlign: "justify",
                    //width: 225,
                }}
            >
                {product.TITULO}
            </Typography>
        </Box>
        <Box>
            <p>Preço:</p>
            <Typography
                 sx={{
                    fontSize: ".8rem",
                    fontFamily: "Afacad Flux, serif",
                    fontWeight: 600,
                    //textAlign: "center",                        
                    //"@media (max-width: 800px)": { color: `white`, },
                    //"@media (max-width: 600px)": { color: `${secudary}`, },
                }}
            >
                {product.PRECO_PRINCIPAL}
            </Typography>
        </Box>
        <Box>
            <p>Outras formas de pagamentos:</p>
            <Typography
                 sx={{
                    fontSize: ".8rem",
                    fontFamily: "Afacad Flux, serif",
                    fontWeight: 600,
                    //textAlign: "center",                        
                    //"@media (max-width: 800px)": { color: `white`, },
                    //"@media (max-width: 600px)": { color: `${secudary}`, },
                }}
            >
                {product.PARCELAMENTO}
            </Typography>
            <Typography
                 sx={{
                    fontSize: ".8rem",
                    fontFamily: "Afacad Flux, serif",
                    fontWeight: 600,
                    //textAlign: "center",                        
                    //"@media (max-width: 800px)": { color: `white`, },
                    //"@media (max-width: 600px)": { color: `${secudary}`, },
                }}
            >
              NO PIX:   {product.PRECO_PIX}
            </Typography>
        </Box>
        </Paper>
    );
}
