import { Container } from 'react-bootstrap';
import { ListAllProducts } from '../components';


export const ProductsPage = () => {
  return (
    <div className="bg-light">

      <Container>
          <ListAllProducts/>
      </Container>

    </div>
  )
}
