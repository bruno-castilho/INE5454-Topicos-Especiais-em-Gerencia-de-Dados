import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Chart } from 'react-google-charts'
// import logo from '../assets/LogoIn13.png';
// import classes from "./Footer.module.css";

export const data = [
  ['Element', 'Density', { role: 'style' }],
  ['MAX', 8.94, '#b87333'], // RGB value
  ['GROWTH', 10.49, 'silver'], // English color name
  ['INTEGRALMEDICA', 19.3, 'gold'], // CSS-style declaration
]

// Converte "R$ 73,50" → 73.50
function parsePreco(valor) {
  if (!valor) return 0
  return parseFloat(valor.replace('R$', '').replace(',', '.').trim())
}

// Soma os preços de uma lista
function somaPrecos(lista) {
  if (!lista || lista.length === 0) return 0
  return lista.reduce(
    (total, item) => total + parsePreco(item.PRECO_PRINCIPAL),
    0,
  )
}

// Faz análise dos preços e sugere a marca mais barata
function analisarPrecos(marcas) {
  const entradas = Object.entries(marcas).map(([nome, lista]) => ({
    nome,
    total: somaPrecos(lista),
    media: somaPrecos(lista) / (lista.length || 1),
  }))

  const maisBarata = entradas.reduce((min, atual) =>
    atual.media < min.media ? atual : min,
  )

  return {
    analise: entradas,
    sugestao: `A marca **${maisBarata.nome.toUpperCase()}** apresenta os preços médios mais baixos (R$ ${maisBarata.media.toFixed(
      2,
    )}). Recomendamos realizar sua compra no site desta marca.`,
  }
}

function Analiseprecos(props) {
  const { max, growh, intra } = props
  // let data = [];
  const [analise, setAnalise] = useState({
    sugestao: '',
    analise: [],
    totalProMax: 0,
    totalProGrow: 0,
    totalProIntegra: 0,
  })

  useEffect(() => {
    if (max && growh && intra) {
      const resultado = analisarPrecos({ max, growh, intra })
      setAnalise({
        sugestao: resultado.sugestao,
        analise: resultado.analise,
        totalProMax: resultado.analise[0].total,
        totalProGrow: resultado.analise[1].total,
        totalProIntegra: resultado.analise[2].total,
      })
    }
    /* 
          
      */
  }, [max, growh, intra])

  const data = [
    ['Marca', 'Preço Total', { role: 'style' }],
    ['MAX', analise.totalProMax, '#b87333'],
    ['GROWTH', analise.totalProGrow, 'silver'],
    ['INTEGRALMEDICA', analise.totalProIntegra, 'gold'],
  ]
  // ✅ evita erro: só renderiza se analise existir
  if (!analise) {
    return (
      <Box sx={{ p: 5, width: 550 }}>
        <Typography variant="body2" color="text.secondary">
          Carregando análise de preços...
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        // bgcolor: `${secudary}`,
        // textAlign: 'center',
        p: 5,
        width: 550,
        // color: "white",
      }}
    >
      <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />

      <Typography
        variant="body1"
        sx={{ mt: 3, fontSize: 14, fontFamily: 'Afacad Flux, sans-serif' }}
      >
        <strong>Recomendação:</strong> <br />
        {analise.sugestao}
      </Typography>
    </Box>
  )
}

export default Analiseprecos
