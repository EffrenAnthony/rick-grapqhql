import React from 'react';
import { useRickAppContext } from '../context';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Chip from '@mui/material/Chip';


const CharacterView = () => {
  const { state: { character } } = useRickAppContext()

  return (
    <div className="characterView">
      {
        character ?
        <Card sx={{ maxWidth: 345, minWidth: 300 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={character.image}>
              </Avatar>
            }
            title={character.name}
            subheader={character.species}
          />
          <CardMedia
            component="img"
            height="194"
            image={character.image}
            alt="Paella dish"
          />
          <CardContent>
            <Chip label={character.gender} />
            <Chip label={character.location.name} />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
        :
        <Avatar
        alt="Remy Sharp"
        src='https://www.ociostock.com/productos/imagenes/img_205749_e1a699da455d93a1256592383518a8ef_1.jpg'
        sx={{ width: 300, height: 300 }}
      />
      }
    </div>
  );
};

export default CharacterView;