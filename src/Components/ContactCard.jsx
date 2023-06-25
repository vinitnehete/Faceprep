import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ContactCard = (prop) =>{
    return(
        <Card sx={{ maxWidth: 345 , height : 270 ,backgroundColor: '#E6E6FA',}}>
      <CardMedia
        sx={{ height: 140 , borderRadius: '50%' , width:140 , textAlign: 'center',
        margin: 'auto',}}
        image={prop.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {prop.name}
        </Typography>
       
      </CardContent>
     
    </Card>

    )
}

export default ContactCard