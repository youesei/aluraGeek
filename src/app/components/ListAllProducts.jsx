import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getAllItemList } from '../helpers/getAllItemList';
import { CardProduct } from './CardProduct';


export const ListAllProducts = () => {

    const allProductsList = getAllItemList();
    const navigate = useNavigate();
  return (
    <div className=" d-grid gap-3 py-5">

      <div className="d-flex justify-content-between">
        <h2>Todos los Productos</h2>
        <Button
          style={{ padding: '10px 20px' }}
          className="rounded-0"
          variant="primary"
          onClick={ () => navigate('/productos/agregar') }
        >
          Agregar Producto
        </Button>
      </div>

      <div className="d-grid gap-4" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {
          allProductsList.map( ( product, index ) =>
            <CardProduct {...product} key={index} code='#1111111' />
            )
        }
      </div>
    </div>
  )
}
