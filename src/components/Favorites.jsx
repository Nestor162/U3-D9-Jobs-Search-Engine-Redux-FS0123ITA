import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  console.log(favorites);
  return (
    <Container className="mt-4">
      <h1>Aziende preferite</h1>
      <ListGroup>
        {favorites.map(favorite => {
          return <ListGroup.Item>{favorite.title}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
};

export default Favorites;
