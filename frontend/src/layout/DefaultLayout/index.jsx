import { useSearchParams, Outlet } from 'react-router-dom'
import { Box, Checkbox, Divider, Fab, FormControlLabel } from '@mui/material'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'
import { BarChart } from '@mui/icons-material'
import { MetricsModel } from '../../components/MetricsModel'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props
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
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export function DefaultLayout() {
  const [openMetrics, setOpenMetrics] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const brands = searchParams.get('brands')?.split(',') ?? []

  function handleChangeCheckbox(value) {
    const newList = brands.includes(value)
      ? brands.filter((v) => v !== value)
      : [...brands, value]
    setSearchParams({
      brands: newList.join(','),
    })
  }

  function handleOpenMetrics() {
    setOpenMetrics((open) => !open)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        display={'flex'}
        sx={{ flex: 1, minWidth: '100vw', height: '100%' }}
        gap={1}
      >
        <Box display="flex" flexDirection={'column'} p={2} gap={2}>
          <FormControlLabel
            label="Growth"
            control={
              <Checkbox
                checked={brands.includes('GROWTH')}
                onChange={() => handleChangeCheckbox('GROWTH')}
              />
            }
          />

          <FormControlLabel
            label="Max"
            control={
              <Checkbox
                checked={brands.includes('MAX')}
                onChange={() => handleChangeCheckbox('MAX')}
              />
            }
          />

          <FormControlLabel
            label="Integralmedica"
            control={
              <Checkbox
                checked={brands.includes('INTEGRALMEDICA')}
                onChange={() => handleChangeCheckbox('INTEGRALMEDICA')}
              />
            }
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Outlet />
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
      >
        <Fab
          onClick={handleOpenMetrics}
          sx={{
            p: 2,
            width: 50,
            height: 50,
            bgcolor: ` #0F9BF2`,
            color: 'white',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
            '&:hover': {
              color: '#0F9BF2',
              // fontSize: "10px",
              cursor: 'pointer',
              transition: '0.3s ease-in',
            },
          }}
        >
          <BarChart
            sx={{
              fontSize: 25,
            }}
          />
        </Fab>
      </Box>

      <MetricsModel
        open={openMetrics}
        handleOpen={handleOpenMetrics}
      ></MetricsModel>

      <Footer primery={'#121313ff'} secudary={'#0F9BF2'} />
    </Box>
  )
}
