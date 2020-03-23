import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
`
const Title = styled.h2`
`

const Specs = styled.span`
margin-right: 15px
`

const Location = styled.span`
`

const HeadContainer = styled.div`
margin-bottom: 10px
`

const HostContainer = styled.div`
color: rgb(113, 113, 113)
`

const SpecsContainer = styled.div`
margin-bottom: 20px
`

const HostImage = styled.img`
width: 25px;
height; 25px
`

const ImgContainer = styled.div`
margin: 10px
`

const HostName = styled.span`
margin-left: 20px
`


const Header = ({house}) => {
    var guests = '';
    var bedrooms = '';
    var beds = '';
    var baths = '';

    if (house.id) {
        guests = house.houseSpecs.guests + ' ' + 'Guests';
        bedrooms = house.houseSpecs.bedrooms + ' ' + 'Bedrooms';
        beds = house.houseSpecs.beds + ' ' + 'Beds';
        baths = house.houseSpecs.baths + ' ' + 'Baths';
        // console.log(house.houseSpecs.guests)
    }

    return (
        <Head>
            <HeadContainer>
            <Title>{house.houseName}</Title>
            <Location>{house.location}</Location>
            <ImgContainer>
                <HostImage src='https://toppng.com/public/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png'/>
                <HostName>{house.host}</HostName>
            </ImgContainer>
            </HeadContainer>
            <SpecsContainer>
                <Specs>{guests}</Specs>
                <Specs>{bedrooms}</Specs>
                <Specs>{beds}</Specs>
                <Specs>{baths}</Specs>
            </SpecsContainer>
        </Head>
    )
}

export default Header;;