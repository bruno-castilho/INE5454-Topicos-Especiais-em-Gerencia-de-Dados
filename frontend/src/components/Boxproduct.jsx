import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import {ArrowForward} from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export function Boxproduct(props) {
    const { product } = props
    return (
        <Card sx={{ width: 345, height: 400 }}>
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
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h3">
                    {product.title}
                </Typography>
                <Typography variant="subtitle2" component="h3">
                    <strong>Preço: {product.price}</strong>
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small" endIcon={<ArrowForward />} onClick={() => window.open(product.link, '_blank')}>IR PARA PRODUTO</Button>
            </CardActions>
        </Card>
    );
}
