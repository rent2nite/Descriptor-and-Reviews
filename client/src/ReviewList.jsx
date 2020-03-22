import React from 'react';

import styled from 'styled-components';

const Root = styled.div`
margin: 20px
`

const HighlightItemImg = styled.img`
heigth: 40px;
width: 40px
`

const ReviewList = () => {
    return (
        <Root>
            <div>
                <HighlightItemImg src='https://image.flaticon.com/icons/png/512/69/69524.png'/>
                <span>Nombre</span>
                <span>Fecha</span>
            </div>
            <p>
                Todo el reesto de texto - Review
            </p>
        </Root>
    )
}

export default ReviewList;