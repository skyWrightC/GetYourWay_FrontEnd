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
              height="140"
              image={require('../images/house_dragon.png')}
              alt="House of the Dragon"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                House Of The Dragon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                House of the dragon is a dragony film about dragons fighting dragons until there is no more dragons
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href='kingslanding' size="small" color="primary">
              Visit Kings Landing!
            </Button>
            <Button href='dragonpit' size="small" color="primary">
              Visit The Dragonpit
            </Button>
            <Button href='driftmark' size="small" color="primary">
              Visit Driftmark
            </Button>
          </CardActions>
        </Card>
        <br />
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require('../images/last_of_us.png')}
              alt="The Last Of Us"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Last Of Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                the last of us is a zombie program about zombies eating people and turning them into zombies to eat more people to make more zombies
                Click below to visit places the show was filmed!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Visit Edmonton, Canada
            </Button>
            <Button size="small" color="primary">
              Visit Calgary, Canada
            </Button>
            <Button size="small" color="primary">
              Visit Canmore, Waterton
            </Button>
          </CardActions>
        </Card>
        <br />
        <div className='hotdcard'>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require('../images/white_lotus.png')}
                alt="House of the Dragon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The White Lotus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  House of the dragon is a dragony film about dragons fighting dragons until there is no more dragons
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Visit Kings Landing!
              </Button>
              <Button size="small" color="primary">
                Visit The Dragonpit
              </Button>
              <Button size="small" color="primary">
                Visit Driftmark
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

    </>
  );
}