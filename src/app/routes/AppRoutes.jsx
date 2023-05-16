import { Route, Routes } from 'react-router-dom'
import { AddProductPage, AppPage, ProductPage, ProductsPage } from '../pages';
import { Footer, NavBar } from '../../ui/components/';


export const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={ <AppPage/> }/>
          <Route path="/productos/*" >
            <Route index element={ <ProductsPage/> }/>
            <Route path=":id" element={ <ProductPage/> }/>
            <Route path="agregar" element={ <AddProductPage/> }/>
          </Route>
      </Routes>

      <Footer/>
    </>
  )
}
