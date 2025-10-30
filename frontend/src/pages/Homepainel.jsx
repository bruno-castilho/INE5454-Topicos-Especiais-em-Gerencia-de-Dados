import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Growpainel from '../components/Growpainel';
import Maxpainel from '../components/Maxpainel';
import Integrapainel from '../components/Integrapainel';
import Footer from '../components/Footer';
import { Fab } from '@mui/material';
import { BrightnessHigh } from '@mui/icons-material';
import Model from '../components/Model';
import Analiseprecos from '../components/Analiseprecos';

const max = [

	{
		id: 1,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 2,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 3,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 4,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 5,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 6,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
    {
		id: 7,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},
	{
		id: 8,
		TITULO: "Kit Creatina 300g e Coqueteleira Incolor Brinde",
        LINK: "/kit-creatina-300g-e-coqueteleira-incolor-brinde/p?skuid=1258",
        FIGURA: "https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-600-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000",
        PRECO_ANTERIOR: "R$ 110,90",
        PRECO_PRINCIPAL: "R$  73,50",
        PARCELAMENTO: "2x de R$ 36,75",
        PRECO_PIX: "R$ 71,30"
	},

]

const growh = [
	{
        id: 1,
        TITULO: "Creatina Monohidratada 250g - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//creatina-monohidratada-250gr-growth-supplements-p985931",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-monohidratada-250g-growth-supplements.webp",
        PRECO_PRINCIPAL: "R$ 72,11",
        PARCELAMENTO: "Até 6x de R$ 12,02",
        PRECO_PIX: "R$ 64,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Estimula a hipertrofia",
            "Auxilia a recuperação muscular",
            "Aumento de força"
        ]
    },
    {
        id: 2,
        TITULO: "Creatina (250g) (Creapure®) - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//creatina-250g-creapure-growth-supplements-p985824",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-250g-creapure-growth-supplements.webp",
        PRECO_PRINCIPAL: "R$ 122,11",
        PARCELAMENTO: "Até 6x de R$ 20,35",
        PRECO_PIX: "R$ 109,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Estimula a hipertrofia",
            "Auxilia a recuperação muscular",
            "Aumento de força"
        ]
    },
    {
        id: 3,
        TITULO: "Creatina (100g) (Creapure®) - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//creatina-100g-creapure-growth-supplements-p985927",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-100g-creapure-growth-supplements.webp",
        PRECO_PRINCIPAL: "R$ 61,00",
        PARCELAMENTO: "Até 6x de R$ 10,17",
        PRECO_PIX: "R$54,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Estimula a hipertrofia",
            "Auxilia a recuperação muscular",
            "Aumento de força"
        ]
    },
    {
        id: 4,
        TITULO: "Creatina Monohidratada 100g - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//creatina-monohidratada-100gr-growth-supplements-p985930",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_creatina-monohidratada-100g-growth-supplements.webp",
        PRECO_PRINCIPAL: "R$ 38,77",
        PARCELAMENTO: "Até 6x de R$ 6,46",
        PRECO_PIX: "R$34,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Estimula a hipertrofia",
            "Auxilia a recuperação muscular",
            "Aumento de força"
        ]
    },
    {
        id: 5,
        TITULO: "L-Glutamina (250g) - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//l-glutamina-250g-growth-supplements-p985843",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_l-glutamina-250g-growth-supplements-1.webp",
        PRECO_PRINCIPAL: "R$ 55,44",
        PARCELAMENTO: "Até 6x de R$ 9,24",
        PRECO_PIX: "R$49,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Recuperação Muscular",
            "Auxilia o sistema imunológico",
            "Estimula saúde intestinal"
        ]
    },
    {
        id: 6,
        TITULO: "Beta-Alanina Em Pó - Growth Supplements",
        LINK: "https://www.gsuplementos.com.br//beta-alanina-em-po-growth-supplements",
        FIGURA: "https://www.gsuplementos.com.br/upload/produto/imagem/m_beta-alanina-em-p-growth-supplements.webp",
        PRECO_PRINCIPAL: "R$ 76,55",
        PARCELAMENTO: "Até 6x de R$ 12,76",
        PRECO_PIX: "R$68,90",
        OFF: "10% OFF",
        BENEFICIOS: [
            "Ação Antioxidante",
            "Auxilia na desempenho atlético",
            "Efeito tamponante"
        ]
    },
]
const intra = [
	{
        ID: 1,
        TITULO: "Creatina 100% Pura 300g Hardcore ",
        LINK: "https://www.integralmedica.com.br/creatina-100-pura-300g-integralmedica/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166741-500-auto?v=638563018421900000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$99,90",
        PRECO_PRINCIPAL: "R$70,93",
        PARCELAMENTO: "",
        OFF: "29%",
        BENEFICIOS: [
            "Aumento no Volume Muscular",
            "Acelera o Processo de Recuperação",
            "Aumento de Força",
            "Melhor performance nos treinos"
        ],
        DESCRICAO: "Creatina Monoidratada.,  e NÃO CONTÉM GLÚTEN.",
        TAMANHOS: [
            "300g "
        ],
        SABORES: [
            "Neutro "
        ]
    },
    {
        ID: 2,
        TITULO: "Creatina 100% Pura Pouch 1kg ",
        LINK: "https://www.integralmedica.com.br/creatina-100-pura-1kg/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166732-500-auto?v=638556403216330000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$209,00",
        PRECO_PRINCIPAL: "R$146,30",
        PARCELAMENTO: "em até2x deR$73,15",
        OFF: "30%",
        BENEFICIOS: [
            "Aumento no Volume Muscular",
            "Aumento de Força",
            "Melhora a Performance nos Treinos",
            "Energia Muscular"
        ],
        DESCRICAO: "Creatina Monoidratada.,  e NÃO CONTÉM GLÚTEN",
        TAMANHOS: [
            "1Kg "
        ],
        SABORES: [
            "Neutro "
        ]
    },
    {
        ID: 3,
        TITULO: "Creatina 100% Pura 120 Cápsulas ",
        LINK: "https://www.integralmedica.com.br/creatina-100-pura-120caps/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166743-500-auto?v=638563087739300000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$53,90",
        PRECO_PRINCIPAL: "R$44,74",
        PARCELAMENTO: "",
        OFF: "17%",
        BENEFICIOS: [
            "Proporciona ganhos de força",
            "Melhora a performance nos treinos",
            "Aumenta a energia muscular",
            "Ganho de massa muscular e recuperação"
        ],
        DESCRICAO: "Creatina monohidratada, lubrificante estearato de magnésio e gelificante gelatina. NÃO CONTÉM GLÚTEN",
        TAMANHOS: [
            "120 Cápsulas "
        ],
        SABORES: [
            "Sem Sabor "
        ]
    },
    {
        ID: 4,
        TITULO: "Creatina com Carboidrato 300g ",
        LINK: "https://www.integralmedica.com.br/creatina-com-carboidrato-carbofuel/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166474-500-auto?v=638472560099100000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$60,90",
        PRECO_PRINCIPAL: "R$42,63",
        PARCELAMENTO: "",
        OFF: "30%",
        BENEFICIOS: [
            "Ganho massa muscular",
            "Maior eficiência na produção de energia",
            "Maior tolerância ao esforço",
            "Aumento de força"
        ],
        DESCRICAO: "Creatina monohidratada, maltodextrina e Antiumectante dióxido de silício.",
        TAMANHOS: [
            "300g "
        ],
        SABORES: [
            "Laranja ",
            "Limão ",
            "Neutro "
        ]
    },
    {
        ID: 5,
        TITULO: "Creatina 100% Pura 150g Hardcore ",
        LINK: "https://www.integralmedica.com.br/creatina-100-pura-150g-integralmedica/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166740-500-auto?v=638562400305400000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$54,90",
        PRECO_PRINCIPAL: "R$42,27",
        PARCELAMENTO: "",
        OFF: "23%",
        BENEFICIOS: [
            "Aumento no Volume Muscular",
            "Acelera o Processo de Recuperação",
            "Aumento de Força",
            "Melhor performance nos treinos"
        ],
        DESCRICAO: "Creatina Monoidratada.,  e NÃO CONTÉM GLÚTEN.",
        TAMANHOS: [
            "150g "
        ],
        SABORES: [
            "Neutro "
        ]
    },
    {
        ID: 6,
        TITULO: "Creatina 350g Hardcore Com Sabor ",
        LINK: "https://www.integralmedica.com.br/creatina-sabores/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/168093-500-auto?v=638826588118570000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$99,90",
        PRECO_PRINCIPAL: "R$89,91",
        PARCELAMENTO: "",
        OFF: "10%",
        BENEFICIOS: [
            "Aumento no Volume Muscular",
            "Acelera o Processo de Recuperação",
            "Aumento de Força",
            "Melhor performance nos treinos"
        ],
        DESCRICAO: "LIMÃO: Creatina monohidratada, acidulante ácido cítrico, aromatizante, antiumectante dióxido de silício e edulcorante sucralose.,  e NÃO CONTÉM GLÚTEN.",
        TAMANHOS: [
            "350g "
        ],
        SABORES: [
            "Limão ",
            "Morango "
        ]
    },
    {
        ID: 7,
        TITULO: "Glutamina 300g em pó ",
        LINK: "https://www.integralmedica.com.br/glutamina-em-po-300g/p",
        FIGURA: "https://integralmedica.vtexassets.com/arquivos/ids/166797-500-auto?v=638573400556200000&width=500&height=auto&aspect=true",
        PRECO_ANTERIOR: "R$84,90",
        PRECO_PRINCIPAL: "R$70,47",
        PARCELAMENTO: "",
        OFF: "17%",
        BENEFICIOS: [
            "Melhora no Sistema Imunológico",
            "Ação Antioxidante",
            "Ação Anticatabólica",
            "Melhora da Integridade Intestinal"
        ],
        DESCRICAO: "L-Glutamina,  e NÃO CONTÉM GLÚTEN. O PRODUTO CONTÉM DOIS SACHÊS DE SÍLICA ANTIUMECTANTE NÃO COMESTÍVEL. MANTER O SACHÊ DE SÍLICA NO POTE ATÉ O TÉRMINO DO PRODUTO",
        TAMANHOS: [
            "300g "
        ],
        SABORES: [
            "Neutro "
        ]
    },
]

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function Homepainel() {

    const [value, setValue] = React.useState(0);
    const [corgrowsell, setCorgrowsell] = React.useState("#121313ff");
    const [cormax, setMax] = React.useState("white");
    const [corIntegra, setIntegra] = React.useState("white");
    const [openModel, setOpenModel] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [opcao, setOpcao] = React.useState("");
    const [growhProducts, setGrowhProducts] = React.useState([]);
    const [maxProducts, setMaxProducts] = React.useState([]);
    const [integraProducts, setIntegraProducts] = React.useState([]);

  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleVerify = (opcao) => {
        switch(opcao){
            case "AMENOACIDOS":
                setTitle("ANALISE DE PREÇOS DE PRODUTOS AMENOACIDOS");
                setGrowhProducts(growh);
                setIntegraProducts(intra);
                setMaxProducts(max);
                setOpenModel(true);
                break;
            case "CARBOADRATOS":
            
            break;
            case "PRETREINOS":
            
            break;
            case "PROTEINAS":
            
            break;
            default:
                break; 
        }
    };

    const handleColor = (opcao) => {
        switch (opcao) {
            case "growsell":
                setCorgrowsell("#121313ff");
                setMax("white");
                setIntegra("white");
                break;
            case "max":
                setCorgrowsell("white");
                setMax("#121313ff");
                setIntegra("white");
                break;
             case "integra":
                setCorgrowsell("white");
                setMax("white");
                setIntegra("#121313ff");
                break;
            default:
                break;
        }
        //setValue(newValue);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <StyledToolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end', fontFamily: "Afacad Flux, sans-serif" }}
                    >
                        INE5454 (Topicos Especiais Em Gerencia De Dados)
                        <Box sx={{ borderBottom: 0, borderColor: 'none' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab 
                                label={
                                    <Typography
                                        onClick={()=> handleColor("growsell")}
                                        sx={{
                                            color: `${corgrowsell}`, 
                                            fontFamily: "Afacad Flux, sans-serif",
                                            fontWeight: 600,
                                            "&:hover": {
                                                color: `#10454F`,
                                                cursor: "pointer",
                                                transition: "0.3s ease-in",
                                                fontSize: 15
                                            },
                                        }}
                                    >
                                        Growth
                                    </Typography>
                                } 
                                {...a11yProps(0)} />
                            <Tab 
                                label={
                                    <Typography
                                        onClick={()=> handleColor("max")}
                                        sx={{
                                            color: `${cormax}`, 
                                            fontFamily: "Afacad Flux, sans-serif",
                                            fontWeight: 600,
                                            "&:hover": {
                                                color: `#10454F`,
                                                cursor: "pointer",
                                                transition: "0.3s ease-in",
                                                fontSize: 15
                                            },
                                        }}
                                    >
                                        Max
                                    </Typography>
                                } 
                                {...a11yProps(1)} 
                            />
                            <Tab 
                                label={
                                     <Typography
                                        onClick={()=> handleColor("integra")}
                                        sx={{
                                            color: `${corIntegra}`, 
                                            fontFamily: "Afacad Flux, sans-serif",
                                            fontWeight: 600, 
                                            "&:hover": {
                                                color: `#10454F`,
                                                cursor: "pointer",
                                                transition: "0.3s ease-in",
                                                fontSize: 15
                                            },
                                        }}
                                    >
                                        Integralmedica
                                    </Typography>
                                } 
                                {...a11yProps(2)}
                            />
                            </Tabs>
                        </Box>
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                    </StyledToolbar>
                </AppBar>
            </Box>
            <Box sx={{ width: '100%' }}>
                <CustomTabPanel value={value} index={0}>
                    <Growpainel setOpcao={setOpcao} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Maxpainel setOpcao={setOpcao} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Integrapainel setOpcao={setOpcao} />
                </CustomTabPanel>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
            >
                <Fab
                    onClick={() => handleVerify(opcao)}
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
                                //color: "white",
                               
                            }} 
                    />
                
                </Fab>
            </Box>
            <Model 
                openModel={openModel} 
                setOpenModel={setOpenModel}
                title={title}
            > 
                <Analiseprecos  max={maxProducts} growh={growhProducts} intra={integraProducts} />
            </Model>
            <Box>
                <Footer 
                   primery={"#121313ff"}
                   secudary={"#0F9BF2"}
                />
            </Box>
        </>
    );
}