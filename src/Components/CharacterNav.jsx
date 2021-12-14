import React from 'react';
import Avatar from '@mui/material/Avatar';

const CharacterNav = ({ image, name }) => {
  return (
    <div className="character">
       <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 80, height: 80 }}
      />
      <p className="character__name">{name.split(' ')[0]}</p>
    </div>
  );
};

export default CharacterNav;