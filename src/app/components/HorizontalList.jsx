
import { NavLink } from "react-router-dom";
import { getItemsList } from "../helpers/getItemsList";
import { CardProduct } from "./CardProduct";
import { ArrowRight } from "react-bootstrap-icons";


export const HorizontalList = ({ typeProduct, title }) => {

    const productsList = getItemsList(typeProduct);

  return (
    <div className="d-grid gap-2 mt-5">

        <div className="d-flex justify-content-between align-items-center">
            <h2>{ title }</h2>
            <NavLink to='/productos' style={{ textDecoration: 'none',fontWeight: 600 }} className="d-flex gap-2 align-items-center text-primary">
                <p className="m-0">Ver todo</p>
                <ArrowRight/>
            </NavLink>
        </div>

        <div className="d-flex gap-2 justify-content-between ">
            {
                productsList.map( ( product, index ) => 
                    <CardProduct key={index} {...product} />
                )
            }
        </div>

    </div>
  )
}
