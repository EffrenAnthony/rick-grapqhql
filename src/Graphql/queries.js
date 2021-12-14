import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
  characters(page: $page) {
    results {
      id
      name
      status
      species
      type
      gender
      image
      location {
        name
        type
        dimension
      }
    }
    info {
      next
      prev
    }
  }
}
`