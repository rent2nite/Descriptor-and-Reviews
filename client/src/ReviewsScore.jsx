import React from 'react';

import styled from 'styled-components';

const ReviewScore = styled.span`
margin-right: 50px;
`

const ReviewImg = styled.img`
height: 15px;
width:15;
margin-right: 5px
`

const ReviewSearch = styled.input`
margin-left: 300px
`

const ReviewScoreCont = styled.div`
margin: 20px;
width:800px;
display: flex
`

const ReviewScoreDesc = styled.span`
margin-right: 20px;
width: 300px;
margin-bottom: 20px
`


const ReviewScoreBar = styled.span`
width: ${(props) => (props.primary ? `${props.primary * 20}%` : '10%')};
display: block;
height: 10px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
background-color: rgb(70,130,180);
background-image: linear-gradient(
  center bottom,
  rgb(43,194,83) 37%,
  rgb(84,240,84) 69%
);
box-shadow: 
  inset 0 2px 9px  rgba(255,255,255,0.3),
  inset 0 -2px 6px rgba(0,0,0,0.4);
position: relative;
overflow: hidden;
`

const Test = styled.div`
background-color: grey;
width: 100px;
height: 0px; 
position: relative;
-moz-border-radius: 25px;
-webkit-border-radius: 25px;
border-radius: 25px;
padding: 0px;
box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
display: inline-block;
margin-right: 100px
`

const ScoreCont = styled.div`
margin-bottom: 40px;
`

const ReviewsScore = ({ review }) => {
    if (review.length > 0) {
        var score = 0;
        for (var i = 0; i < review.length; i++) {
            var rev = review[i];
            let sum = rev.reviewScore.location;
            sum += rev.reviewScore.value;
            sum += rev.reviewScore.cleanliness;
            sum += rev.reviewScore.communication;
            sum += rev.reviewScore.checkin;
            sum += rev.reviewScore.accuracy;
            // console.log(sum)
            score += (sum / 6)
        }
        score /= review.length;
        var renderScore = Math.round(score * 100) / 100 ;
    }
    // var renderScore = Math.round(score * 100) / 100 ;
    // console.log(renderScore)
    var reviewNum = 'reviews';
    if (review.length === 1) {
        reviewNum = 'review';
    }
    // console.log(review[0], 'review');


    
    return (
        <div>
            <div>
                <ReviewImg src='https://webcomicms.net/sites/default/files/clipart/129621/blue-star-129621-7952357.gif' />
                <ReviewScore>{renderScore}</ReviewScore>
                <ReviewScore>{review.length +  '  ' + reviewNum} </ReviewScore>
                <span>
                    <ReviewSearch></ReviewSearch>
                </span>
            </div>
            <ScoreCont>
                <ReviewScoreCont>
                    <ReviewScoreDesc>Location</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar primary={review.length > 0 ? review[0].reviewScore.location : 0}></ReviewScoreBar>
                    </Test>
                    <ReviewScoreDesc>Communication</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar primary={review.length > 0 ? review[0].reviewScore.location : 0}></ReviewScoreBar>
                    </Test>
                </ReviewScoreCont>
                <ReviewScoreCont>
                    <ReviewScoreDesc>Accuracy</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar primary={review.length > 0 ? review[0].reviewScore.location : 0}></ReviewScoreBar>
                    </Test>
                    <ReviewScoreDesc>Check-In</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar primary={review.length > 0 ? review[0].reviewScore.location : 0}></ReviewScoreBar>
                    </Test>
                </ReviewScoreCont>
                <ReviewScoreCont>
                    <ReviewScoreDesc>Cleanliness</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar></ReviewScoreBar>
                    </Test>
                    <ReviewScoreDesc>Value</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar></ReviewScoreBar>
                    </Test>
                </ReviewScoreCont>
            </ScoreCont>
        </div>
    )
}

export default ReviewsScore;


// if (review) {
//     var score = 0;
//     for (var i = 0; i < review.length; i++) {
//         var rev = review[i];
//         let sum = rev.reviewScore.location;
//         sum += rev.reviewScore.value;
//         sum += rev.reviewScore.cleanliness;
//         sum += rev.reviewScore.communication;
//         sum += rev.reviewScore.checkin;
//         sum += rev.reviewScore.accuracy;

//         score += (sum / 6)
//     }
//     console.log(review[0].reviewScore.location)
// }