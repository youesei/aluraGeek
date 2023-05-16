import { useParams } from 'react-router-dom';
import { getProduct } from '../helpers/getProduct';
import { Container } from 'react-bootstrap';
import { HorizontalList } from '../components';


export const ProductPage = () => {
    const { id } = useParams();
    const { urlImage, name, price } = getProduct(id);

  return (
    <div className="bg-light">

      <Container className="py-5">
        <div className="d-flex justify-content-center gap-3">
            <div>
                <img style={{ width: '30rem' }} src={ urlImage } alt={`producto_${id}`} />
            </div>
            
            <div className="d-flex flex-column justify-content-center">
                <h2 className="display-4">{ name }</h2>
                <p className="fw-bold">$ { price }</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor facere in praesentium libero soluta! Cum, aliquid eum amet laborum velit rerum aspernatur illo sequi molestias ea veritatis officia perspiciatis dignissimos? Natus repellat sequi veritatis aut sint dolore odit id dolorum culpa magnam quisquam dicta distinctio in delectus assumenda qui nisi ullam eveniet, recusandae numquam, ratione error officia. Nobis, expedita reiciendis sit voluptas ipsa nisi repellat totam doloribus ipsam distinctio impedit nihil, veritatis laborum ad libero quae debitis quod! Odio fugit, reprehenderit autem necessitatibus corrupti, nemo modi unde eius laboriosam saepe laudantium provident placeat reiciendis nihil minus minima quibusdam doloribus suscipit?</p>
            </div>
        </div>

        <HorizontalList title='Productos Similares' typeProduct="figures" />

      </Container>

    </div>
  )
}
