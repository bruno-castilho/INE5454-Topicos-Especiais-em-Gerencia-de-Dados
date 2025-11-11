import { Box, Grid } from "@mui/material";
import { Boxproduct } from "../components/Boxproduct";


const rows = [
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
		
];


export function Aminoacidos() {
    return <>
        <Grid sx={{ flexGrow: 1, mt: 0.1 }} container spacing={2}>
            <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
                {rows.map((slide, index) => {
                return (
                    <Grid key={index} item sm={6} md={4}>
                    <Boxproduct
                        primery={"#121313ff"}
                        secudary={"#0F9BF2"}
                        product={slide}
                    />
                    </Grid>
                );
                })}
            </Grid>
            </Grid>
        </Grid>
    </>
}