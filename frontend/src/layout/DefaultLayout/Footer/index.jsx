import { Box, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: `primary.main`,
        textAlign: 'center',
        p: 5,
        color: 'white',
      }}
    >
      <Typography variant="h7">
        INE5454 (Topicos Especiais Em Gerencia De Dados)
      </Typography>
    </Box>
  )
}
