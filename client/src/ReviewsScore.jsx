import React from 'react';

import styled from 'styled-components';

const ReviewScore = styled.span`
margin-right: 15px;
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
width:1000px
`

const ReviewScoreDesc = styled.span`
margin-right: 100px;
width: 300px;
margin-bottom: 20px
`

const ReviewScoreBar = styled.span`
width: 90%;
display: block;
height: 10px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
background-color: rgb(43,194,83);
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
text-align: center;
margin-right: 100px
`

const ReviewsScore = () => {
    return (
        <div>
            <div>
            <ReviewImg src='https://webcomicms.net/sites/default/files/clipart/129621/blue-star-129621-7952357.gif' />
            <ReviewScore>4.9</ReviewScore>
            <ReviewScore>200</ReviewScore>
            <span>
                <ReviewSearch></ReviewSearch>
            </span>
            </div>
            <div>
                <ReviewScoreCont>
                    <ReviewScoreDesc>Location</ReviewScoreDesc>
                    <Test>
                    <ReviewScoreBar></ReviewScoreBar>
                    </Test>
                    <ReviewScoreDesc>Communication</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar></ReviewScoreBar>
                    </Test>
                </ReviewScoreCont>
                <ReviewScoreCont>
                    <ReviewScoreDesc>Accuracy</ReviewScoreDesc>
                    <Test>
                    <ReviewScoreBar></ReviewScoreBar>
                    </Test>
                    <ReviewScoreDesc>Check-In</ReviewScoreDesc>
                    <Test>
                        <ReviewScoreBar></ReviewScoreBar>
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
            </div>
        </div>
    )
}

export default ReviewsScore;