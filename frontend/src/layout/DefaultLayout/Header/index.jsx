import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()

  const currentPage = location.pathname ?? '/aminoacidos'

  return (
    <Box component="header">
      <AppBar position="static">
        <Box sx={{ borderBottom: 0, borderColor: 'none' }}>
          <Tabs
            value={currentPage}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab
              component={Link}
              value="/aminoacidos"
              to="/aminoacidos"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Aminoácidos
                </Typography>
              }
            />
            <Tab
              component={Link}
              value="/carboidratos"
              to="/carboidratos"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Carboidratos
                </Typography>
              }
            />
            <Tab
              component={Link}
              value="/pretreino"
              to="/pretreino"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  PRÉ-TREINO
                </Typography>
              }
            />
            <Tab
              component={Link}
              value="/proteinas"
              to="/proteinas"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  PROTEÍNAS
                </Typography>
              }
            />

            <Tab
              component={Link}
              value="/termogenicos"
              to="/termogenicos"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Termogênicos
                </Typography>
              }
            />

            <Tab
              component={Link}
              value="/vitaminas"
              to="/vitaminas"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Vitaminas
                </Typography>
              }
            />

            <Tab
              component={Link}
              value="/acessorios"
              to="/acessorios"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Acessórios
                </Typography>
              }
            />

            <Tab
              component={Link}
              value="/outlet"
              to="/outlet"
              label={
                <Typography
                  sx={{
                    fontFamily: 'Afacad Flux, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      color: `#10454F`,
                      cursor: 'pointer',
                      transition: '0.3s ease-in',
                      fontSize: 15,
                    },
                  }}
                >
                  Outlet
                </Typography>
              }
            />
          </Tabs>
        </Box>
      </AppBar>
    </Box>
  )
}
