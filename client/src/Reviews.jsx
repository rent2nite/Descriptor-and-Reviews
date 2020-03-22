import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewsScore from './ReviewsScore.jsx';


import styled from 'styled-components';


const Root = styled.div`
font-family: sans-serif
`


class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Root>
                <h2>Reviews</h2>
                <div>
                    <ReviewsScore />
                </div>
                <div>
                    <ReviewList />
                </div>
                <button>Page review buttons</button>
            </Root>
        )
    }
}


export default Reviews;