import { Button, Container, Form } from "react-bootstrap"
import { Footer, NavBar } from "../../ui/components"


export const LoginPage = () => {
  return (
    <div className="bg-light">

      <NavBar/>

      <Container  style={{ padding: '7rem 0' }} className="d-flex justify-content-center">
        <Form className="d-grid gap-3" style={{ width: '27rem' }}>
          <h5 className="text-center">Iniciar Sesión</h5>
          <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="email"
                placeholder="Escriba su nombre"
              />
          </Form.Group>
          
          <Form.Group controlId="formBasicPass">
              <Form.Control
                className="border-0 rounded-0 border-bottom p-3"
                type="password"
                placeholder="Escriba su Contraseña"
              />
          </Form.Group>

          <Button
              style={{ padding: '12.5px 0px' }}
              className="rounded-0 w-100"
              variant="primary"
          >
              Entrar
          </Button>
        </Form>
      </Container>

      <Footer/>
    </div>
  )
}
