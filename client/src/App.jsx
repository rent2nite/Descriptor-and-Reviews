import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Reviews from './Reviews.jsx';

import styled from 'styled-components';

const Root = styled.div`
margin-left: 100px
`

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            houses: [],
            reviews: []
        }

        this.nextPlace = this.nextPlace.bind(this);
        this.randomNum = this.randomNum.bind();
    }

    randomNum() {
        return Math.floor(Math.random() * 101);
    }

    componentDidMount() {
        axios({
            method: "get",
            url: `/houses?${this.randomNum()}`
        })
        .then ((response) => {
            // console.log(response.data)
            this.setState({houses: response.data[0]})
            
            this.getReviews(this.state.houses.id)
        })
        .catch(e => console.log(e))
    }

    getReviews(data) {
        axios({
            method: "get",
            url: `/reviews?${data}`
        })
        .then ((response) => {
            this.setState({ reviews: response.data})
            // console.log(response)
        })
        .catch(e => console.log(e))
    }

    nextPlace(data) {
        axios({
            method: "get",
            url: `/houses?${data}`
        })
        .then ((response) => {
            this.setState({houses: response.data[0]})
            this.getReviews(this.state.houses.id)
            // console.log(response)
        })
        .catch(e => console.log(e))
    }





    render() {
        return (
            <Root>
            <div>
                <Overview house={this.state.houses}/>
            </div> 
            <div>
                <Reviews reviews={this.state.reviews} nextPlace={this.nextPlace}/>
            </div>
            </Root>
        );
    }
}

export default App;



//componenet for overview
//component for reviews 

//componente para rating (cuantas estrellas)

