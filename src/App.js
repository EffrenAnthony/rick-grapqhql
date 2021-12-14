import ApolloContext from "./Apollo";
import CharacterView from "./Components/CharacterView";
import Nav from "./Components/Nav";
import { RickAppProvider } from "./context";

function App() {
  return (
    <ApolloContext>
      <RickAppProvider>
        <Nav></Nav>
        <CharacterView></CharacterView>
      </RickAppProvider>
    </ApolloContext>
  );
}

export default App;
