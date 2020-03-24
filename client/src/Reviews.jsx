import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewsScore from './ReviewsScore.jsx';


import styled from 'styled-components';


const Root = styled.div`
font-family: sans-serif
`


class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.nextHouse = this.nextHouse.bind(this);
        this.randomNum = this.randomNum.bind(this);
    

    }
    randomNum() {
        return Math.floor(Math.random() * 101);
    }

    nextHouse (event) {
        this.props.nextPlace(this.randomNum())
        event.preventDefault()
    }

    render() {
        return (
            <Root>
            <h2>Reviews</h2>
            <div>
                <ReviewsScore review={this.props.reviews}/>
            </div>
            <div>
                {this.props.reviews.map((review, key) => (
                     <ReviewList review={review} key={key}/>
                ))}
            </div>
            <button onClick={this.nextHouse}>NEXT HOUSE</button>
        </Root>
        )
    }
}


export default Reviews;


// const Reviews = ({reviews}) => {


//     return (
//         <Root>
//             <h2>Reviews</h2>
//             <div>
//                 <ReviewsScore review={reviews}/>
//             </div>
//             <div>
//                 {reviews.map((review, key) => (
//                      <ReviewList review={review} key={key}/>
//                 ))}
//             </div>
//             <button>NEXT HOUSE</button>
//         </Root>
//     )
// }