const rows = [
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
		
];


const amenoacidopages = {
	getData: ({from, to}) => {
		return new Promise((resolve, reject) => {
			
			const data = rows.slice(from, to);
			
			resolve({
				count: rows.length,
				data: data
			})
			
		})
	}
}
export default amenoacidopages;