import './App.css';
import styles from './style.module.css'

import { Col, Container, Row } from 'react-bootstrap';
import ApiDetails from './components/ApiDetails';
import ApiDesign from './components/ApiDesign';
import TabForms from './components/TabForms'
import ParamsForm from './components/ParamsForm';

function App() {
  return (
   <>
    <div>
      <Container className={styles.container}>
        <Row>
          <Col className={styles.colFour} sm={2}>
            <ApiDetails></ApiDetails>
          </Col>
          <Col className={styles.colEight} sm={8}>
            <ApiDesign></ApiDesign>
            <ParamsForm></ParamsForm>
            <TabForms></TabForms>
          </Col>
          
        </Row>
      </Container>
    </div>
   </>
  );
}
App.whyDidYouRender = true
export default App;
