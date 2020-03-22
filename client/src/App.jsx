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
            houses: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/houses",
        })
        .then ((response) => {
            // console.log(response);
            this.setState({houses: response.data[0]})
            // console.log(this)

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
                <Reviews />
            </div>
            </Root>
        );
    }
}

export default App;



//componenet for overview
//component for reviews 

//componente para rating (cuantas estrellas)

