 import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Boxproduct(props) {

    const { product } = props
    const [prod, setProduct] = React.useState({
        TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
    })

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
