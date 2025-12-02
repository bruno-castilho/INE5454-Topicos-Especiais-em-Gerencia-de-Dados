import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { BarChart } from '@mui/x-charts/BarChart'
import { medianPrices } from '../../../api/median-prices'

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

export function MedianaChart() {
  const [searchParams] = useSearchParams()
  const brands = searchParams
    .get('brands')
    ?.split(',')
    .filter((brand) => brand !== '')

  const { data } = useQuery({
    queryKey: ['medianPrices', brands?.length === 0 ? undefined : brands],
    queryFn: () =>
      medianPrices({
        brands: brands?.length === 0 ? undefined : brands,
      }),
  })

  const brandsData = Object.keys(data?.medianPrices ?? [])
  const series = brandsData.reduce((currentSeries, brand) => {
    Object.keys(data.medianPrices[brand]).forEach((category) => {
      if (!currentSeries[category]) currentSeries[category] = []

      currentSeries[category].push(data.medianPrices[brand][category])
    })

    return currentSeries
  }, {})

  return (
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
  )
}
