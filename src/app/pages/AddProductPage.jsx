import { Button, Container, Form } from 'react-bootstrap';


export const AddProductPage = () => {
  return (
    <div className="bg-light">

      <Container  style={{ padding: '7rem 0' }} className="d-flex justify-content-center">
        <Form className="d-grid gap-3" style={{ width: '27rem' }}>
            <div>
                <h3 className="text-start m-0">Agregar Producto</h3>
            </div>
          <Form.Group controlId="formBasicUrlImage">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="text"
                placeholder="Url de la imagen"
              />
          </Form.Group>
          
          <Form.Group controlId="formBasicCategory">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="text"
                placeholder="Categoria"
              />
          </Form.Group>
          
          <Form.Group controlId="formBasicName">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="text"
                placeholder="Nombre del producto"
              />
          </Form.Group>
          
          <Form.Group controlId="formBasicPrice">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="number"
                min={0}
                placeholder="Precio del producto"
              />
          </Form.Group>

        <Form.Group  className="mb-3" controlId="formBasicMessage">
            <Form.Control
                rows={3}
                style={{ resize: 'none' }}
                className="border-0 rounded-0 border-bottom p-3"
                as="textarea"
                placeholder="Descripcion del producto"
            />
        </Form.Group>

          <Button
              style={{ padding: '12.5px 0px' }}
              className="rounded-0 w-100"
              variant="primary"
          >
              Agregar producto
          </Button>
        </Form>
      </Container>
    </div>
  )
}
