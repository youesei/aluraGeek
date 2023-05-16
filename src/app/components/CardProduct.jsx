import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';


export const CardProduct = ({ name, price, urlImage, code='', id }) => {
  return (
    <Card className="bg-light w-100" style={{ width: '10rem', border: 'none' }}>
      <Card.Img className="rounded-0" variant="top" src={ urlImage } />
      <Card.Body className="px-0 py-2">

        <Card.Text className="my-1">{ name }</Card.Text>
        <Card.Title>$ { price }</Card.Title>

        {
          ( code.length <= 0 )
          ? <NavLink
              to={`/productos/${id}`}
              style={{ fontWeight: 600, textDecoration: 'none' }}
              className="text-primary"
            >
              Ver Producto
            </NavLink>
          : <Card.Text className="my-1">{ code }</Card.Text>
        }
            
      
      </Card.Body>
    </Card>
  )
}
