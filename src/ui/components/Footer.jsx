import { Button, Container, Form, NavLink } from "react-bootstrap"


export const Footer = () => {
  return (
    <footer>
        <div style={{ backgroundColor: '#EAF2FD', padding: '3rem 0' }}>

            <Container className="d-flex justify-content-between py-4 px-0">

                <div>
                    <NavLink className="d-flex justify-content-center align-items-center" to="/" >
                        <img style={{ height: '3.1rem',  display: 'flex' }} src="/public/img/logo.svg" alt="logo"  />
                    </NavLink>
                </div>

                <div className="d-flex flex-column align-items-start gap-3">
                    <NavLink className="d-flex justify-content-center">
                        Quienes somos
                    </NavLink>
                    <NavLink className="d-flex justify-content-center">
                        Politica de privacidad
                    </NavLink>
                    <NavLink className="d-flex justify-content-center">
                        Programa de fidelidad
                    </NavLink>
                    <NavLink className="d-flex justify-content-center">
                        Nuestras Tiendas
                    </NavLink>
                    <NavLink className="d-flex justify-content-center">
                        Quiero ser franquiciado
                    </NavLink>
                    <NavLink className="d-flex justify-content-center">
                        Anúncie aqui
                    </NavLink>
                </div>

                <Form className="w-50">
                    <h5>Hable con nosotros</h5>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className="border-0 rounded-0 border-bottom p-3" type="text" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group  className="mb-3" controlId="formBasicMessage">
                        <Form.Control rows={3} style={{ resize: 'none' }} className="border-0 rounded-0 border-bottom p-3" as="textarea" placeholder="Escribe tu mensaje" />
                    </Form.Group>

                    <Button
                        style={{ padding: '10px 20px' }}
                        className="rounded-0"
                        variant="primary"
                        // className="p-2"
                    >
                        Enviar Mensaje
                    </Button>
                </Form>
                
            </Container>

        </div>
        
        <div className="p-4 bg-white d-flex justify-content-center flex-column align-items-center">
            <p className="m-0">Desarrollado por Nelson Reina</p>
            <p className="m-0">2023</p>
        </div>
    </footer>
  )
}
