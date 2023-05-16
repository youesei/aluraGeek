import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


export const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className="banner d-flex align-items-end">
        
        <div className="w-100 h-75 d-flex flex-column justify-content-center" style={{ padding: '0 8rem' }}>
            <h1 className="text-white">Febrero Promocional</h1>
            <p className="text-white">Productos Seleccionados con 33% de descuento</p>
            
            <div>
                <Button
                    style={{ padding: '10px 20px' }}
                    className="rounded-0"
                    variant="primary"
                    onClick={ () => navigate('/productos') }
                >
                    Ver Consolas
                </Button>
            </div>
        </div>

    </div>
  )
}
