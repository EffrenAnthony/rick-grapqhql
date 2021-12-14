import React from 'react';
import { useRickAppContext } from '../context';

const CharacterView = () => {
  const { state: { character } } = useRickAppContext()
  return (
    <>
      {
        character &&
        <div>
          {character.name}
          {character.image}
        </div>
      }
    </>
  );
};

export default CharacterView;