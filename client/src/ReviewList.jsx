import React from 'react';

import styled from 'styled-components';

const Root = styled.div`
margin: 20px
`

const HighlightItemImg = styled.img`
heigth: 15px;
width: 15px;
margin-right: 20px
`

const ReviewContainer = styled.div`
margin-right: 20px
`

const ReviewList = ({review}) => {
    return (
        <Root>
            <ReviewContainer>
                <HighlightItemImg src='https://toppng.com/public/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png'/>
                <span>{review.name}</span>
                <div>
                <span>{review.date}</span>
                </div>
            </ReviewContainer>
            <p>{review.review}</p>
        </Root>
    )
}

export default ReviewList;