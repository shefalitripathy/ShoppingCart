import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ProductsList from './ProductsList';

class Home extends React.Component {

	        render() {
        return (
            <Grid >                
                <Row><ProductsList /></Row>
            </Grid>
        );
    }

}
export default Home;