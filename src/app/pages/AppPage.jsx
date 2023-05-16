import { Container } from 'react-bootstrap';
import { Banner, HorizontalList } from '../components';


export const AppPage = () => {
  return (
    <div className="bg-light">
      <Banner/>

      <Container className="pb-5">
        
        <HorizontalList title='Star Wars' typeProduct="figures" />
        
        <HorizontalList title='Consolas' typeProduct="consoles" />

        <HorizontalList title='Diversos' typeProduct="others" />

      </Container>

    </div>
  )
}
