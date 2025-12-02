import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { BarChart } from '@mui/x-charts/BarChart'
import { standardDeviationPrices } from '../../../api/standard-deviation-prices'

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

export function DesvioChart() {
  const [searchParams] = useSearchParams()
  const brands = searchParams
    .get('brands')
    ?.split(',')
    .filter((brand) => brand !== '')

  const { data } = useQuery({
    queryKey: [
      'standardDeviationPrices',
      brands?.length === 0 ? undefined : brands,
    ],
    queryFn: () =>
      standardDeviationPrices({
        brands: brands?.length === 0 ? undefined : brands,
      }),
  })

  const brandsData = Object.keys(data?.standardDeviationPrices ?? [])
  const series = brandsData.reduce((currentSeries, brand) => {
    Object.keys(data.standardDeviationPrices[brand]).forEach((category) => {
      if (!currentSeries[category]) currentSeries[category] = []

      currentSeries[category].push(
        data.standardDeviationPrices[brand][category],
      )
    })

    return currentSeries
  }, {})

  return (
    <BarChart
      xAxis={[{ data: brandsData }]}
      yAxis={[
        {
          width: 70,
        },
      ]}
      series={Object.keys(series).map((category) => ({
        data: series[category],
        label: Categories[category],
      }))}
    />
  )
}
