import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Close } from '@mui/icons-material'
import { BarChart } from '@mui/x-charts/BarChart'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { avaragePrices } from '../api/avarage-prices'

const Categories = {
  PROTEINAS: 'Proteínas',
  PRETREINO: 'Pré-Treino',
  CARBOIDRATOS: 'Carboidratos',
  AMINOACIDOS: 'Aminoácidos',
  TERMOGENICOS: 'Termogênicos',
  ACESSORIOS: 'Acessórios',
  OUTLET: 'Outlet',
  VITAMINAS: 'Vitaminas',
}

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    borderRadius: useTheme().spacing(0),
    padding: useTheme().spacing(1),
    position: 'absolute',
    top: useTheme().spacing(1),
  },
  dialogTitle: {
    paddingRight: '0px',
  },
}))

export function MetricsModel(props) {
  const { open, handleOpen } = props
  const classes = useStyles()

  const [searchParams] = useSearchParams()
  const brands = searchParams
    .get('brands')
    ?.split(',')
    .filter((brand) => brand !== '')

  const { data } = useQuery({
    queryKey: ['avaragePrices', brands?.length === 0 ? undefined : brands],
    queryFn: () =>
      avaragePrices({
        brands: brands?.length === 0 ? undefined : brands,
      }),
  })

  const brandsData = Object.keys(data?.averagePrices ?? [])
  const series = brandsData.reduce((currentSeries, brand) => {
    Object.keys(data.averagePrices[brand]).forEach((category) => {
      if (!currentSeries[category]) currentSeries[category] = []

      currentSeries[category].push(data.averagePrices[brand][category])
    })

    return currentSeries
  }, {})

  console.log(series)

  return (
    <Dialog
      open={open}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle className={classes.dialogTitle}>
        <Box display="flex" justifyContent="space-between">
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
            Preço Médio
          </Typography>
          <IconButton
            onClick={handleOpen}
            sx={{
              mt: 1.2,
              ml: 1,
              borderRadius: 0,
              height: 30,
              width: 40,
              color: `${'#0F9BF2'}`,
              // border: `1px solid ${'#F9CC19'}`,
              fontSize: '20px',
              fontFamily: 'Afacad Flux, sans-serif',
              '&:hover': {
                color: 'white',
                cursor: 'pointer',
                transition: '0.3s ease-in',
              },
            }}
          >
            <Close sx={{ color: '#0F9BF2', fontSize: '20px' }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: '100%' }}>
          <BarChart
            xAxis={[{ data: brandsData }]}
            yAxis={[
              {
                width: 70,
                valueFormatter: (value) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }),
              },
            ]}
            series={Object.keys(series).map((category) => ({
              data: series[category],
              label: Categories[category],
              valueFormatter: (value) => {
                if (!value)
                  return Number(0).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })

                return value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              },
            }))}
          />
        </Box>
      </DialogContent>
    </Dialog>
  )
}
