import ApolloContext from "./Apollo";
import CharacterView from "./Components/CharacterView";
import Nav from "./Components/Nav";
import { RickAppProvider } from "./context";
import Container from '@mui/material/Container';
import './styles/App.scss'

function App() {
  return (
    <ApolloContext>
      <RickAppProvider>
        <Container maxWidth="md">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
            alt='logo'
            className="logo"></img>
          <Nav></Nav>
          <CharacterView></CharacterView>
        </Container>
      </RickAppProvider>
    </ApolloContext>
  );
}

export default App;
