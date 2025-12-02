import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import Typography from '@mui/material/Typography'

export function Boxproduct(props) {
  const { product } = props
  return (
    <Card
      sx={{
        width: 345,
        height: 420,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'secondary.main',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.title}
        sx={{
          height: 230,
          width: '100%',
          objectFit: 'contain',
        }}
      />

      <CardContent sx={{ pb: 0, flexGrow: 1 }}>
        <Typography gutterBottom variant="subtitle1" component="h3">
          {product.title}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          <strong>
            Preço:{' '}
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </Typography>
        <Typography variant="caption">{product.brand}</Typography>
      </CardContent>

      <CardActions sx={{ pt: 0, mt: 'auto' }}>
        <Button
          size="small"
          endIcon={<ArrowForward />}
          onClick={() => window.open(product.link, '_blank')}
        >
          IR PARA PRODUTO
        </Button>
      </CardActions>
    </Card>
  )
}
