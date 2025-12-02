import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
  Tabs,
  Tab,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Close } from '@mui/icons-material'
import { useState } from 'react'
import { MediaChart } from './MediaChart'
import { MedianaChart } from './MedianaChart'
import { ModaChart } from './ModaChart'
import { MinChart } from './MinChart'
import { MaxChart } from './MaxChart'
import { DesvioChart } from './DesvioChart'

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
  const [measure, setMeasure] = useState('Média')

  function handleChangeMeasure(event, newMeasure) {
    setMeasure(newMeasure)
  }

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
            <Tabs value={measure} onChange={handleChangeMeasure}>
              <Tab label="Média" value="Média" />
              <Tab label="Moda" value="Moda" />
              <Tab label="Mediana" value="Mediana" />
              <Tab label="Máximo" value="Máximo" />
              <Tab label="Mínimo" value="Mínimo" />
              <Tab label="Desvio Padrão" value="Desvio Padrão" />
            </Tabs>
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
          {measure === 'Média' && <MediaChart />}
          {measure === 'Mediana' && <MedianaChart />}
          {measure === 'Moda' && <ModaChart />}
          {measure === 'Máximo' && <MaxChart />}
          {measure === 'Mínimo' && <MinChart />}
          {measure === 'Desvio Padrão' && <DesvioChart />}
        </Box>
      </DialogContent>
    </Dialog>
  )
}
