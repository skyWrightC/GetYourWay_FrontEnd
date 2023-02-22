import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,} from '@mui/material';
import './Cards.css';

export default function MultiActionAreaCard() {
  return (
    <>
      <div className='hotdcard' >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../images/HOTDsky.png')}
              alt="House of the Dragon"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                House Of The Dragon
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Almost two centuries before the Long Night, Red Wedding, or the Battle of the Bastards, another massive conflict
              wreaked havoc across Westeros. The first of many planned spin-offs of HBO’s
              landmark series Game of Thrones goes back to an era when the Targaryens ruled the Seven Kingdoms and dragons were plentiful.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href='houseofthedragon' size="large" color="primary">
              Visit House Of The Dragon!
            </Button>
          </CardActions>
        </Card>
        <br />
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../images/TLOUsky.png')}
              alt="The Last Of Us"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Last Of Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
              After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl
              who may be humanity’s last hope. Pedro Pascal and Bella Ramsey star as Joel and Ellie. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href='/thelastofus' size="large" color="primary">
              Visit The Last Of Us
            </Button>
          </CardActions>
        </Card>
        <br/>
        <div className='hotdcard'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={require('../images/WLsky.png')}
                alt="House of the Dragon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The White Lotus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                The series details "a week in the life of vacationers as they relax and rejuvenate in paradise.
                With each passing day, a darker complexity emerges in these picture-perfect travelers,
                the hotel's cheerful employees, and the idyllic locale itself.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='/thewhitelotus' size="large" color="primary">
                Visit The White Lotus!
              </Button>
              </CardActions>
            </Card>
          
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>



    </>
  );
}