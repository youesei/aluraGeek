import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

  return (
    <Navbar className="d-flex justify-content-" bg="white" expand="lg">
        {/*  */}
        <Container className='p-0'>
            <div style={{ height: '4.4rem', width: '45rem' }} className="d-flex gap-4 py-3">
                <NavLink className="d-flex justify-content-center align-items-center" to="/" >
                    <img style={{ height: '3.1rem' }} src="/public/img/logo.svg" alt="logo"  />
                </NavLink>

                <Form.Control
                    // style={{ padding: '10px', width: 'rem' }}
                    className="rounded-pill w-100 border border-light bg-light"
                    type="search"
                    placeholder='¿Que deseas buscar?'
                />
            </div>

            {
                ( pathname === '/' || pathname === '/productos/agregar' )
                ?   <Button
                        style={{ padding: '10px 60px' }}
                        className="rounded-0"
                        variant="outline-primary"
                        onClick={ () => navigate( ( pathname === '/' ) ? '/auth/login' : '/productos' ) }
                    >
                        { ( pathname === '/' ) ? 'Login' : 'Menú Administrador' }
                    </Button>
                : null
            }
        </Container>
    </Navbar>
  )
}
