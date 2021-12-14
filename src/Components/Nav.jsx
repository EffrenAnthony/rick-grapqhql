import React, { useState } from 'react';
import { useQuery } from '@apollo/client'
import { useRickAppContext } from '../context';
import { GET_CHARACTERS } from '../Graphql/queries';
// import { RickAppContext } from '../context';
const Nav = () => {
  // const value = useContext(RickAppContext)
  const { dispatch, state } = useRickAppContext()
  const [canUpdate, setCanUpdate] = useState(true)
  // const [characters, setCharacters] = useState([])
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 1
    },
    onCompleted: (dataOnComplete) => {
      handleSetCharacters([...state.characters, ...dataOnComplete.characters.results])
      // setCharacters([...characters, ...dataOnComplete.characters.results])
    }
  })

  function handleSetCharacters(characters) {
   dispatch({ type: 'SET_CHARACTER_LIST', payload: characters}) 
  }

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        page: 2,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult
        setCanUpdate(false)
        return fetchMoreResult
      }
    })

  }

  if (data && canUpdate) {
    handleFetchMore()
  }

  const setCharacter = (character) => {
    dispatch({type: 'SET_CHARACTER', payload: character})
  }

  // console.log(data);
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      {
        state.characters.map((character, key) => (
          <div onClick={() => setCharacter(character)} key={key}>
            {character.name}
          </div>
        ))
      }
    </div>
  );
};

export default Nav;