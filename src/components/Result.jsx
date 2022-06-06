import React from 'react'
import styled from '@emotion/styled'

const InfoResult = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
`
const ImgCrypto = styled.img `
    width: 120px;
    margin: 0 16px;
`

const InfoText = styled.p`
    font-weight: 500;
    span{
        font-weight: 600;
        color: #e4b725;

    }
`

const PriceText = styled.p`
    font-size: 24px;
    span{
        font-weight: 600;
        color: #e4b725;

    }
`



const Result = ({result}) => {

    console.log(result)

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result

    return (
        <InfoResult>
            <ImgCrypto src={`https://www.cryptocompare.com${IMAGEURL}`} alt={result.FROMSYMBOL} />
            <div>
                <PriceText>Price:  <span>{PRICE}</span></PriceText>
                <InfoText>Min 24h: <span>{HIGHDAY}</span></InfoText>
                <InfoText>Nax 24h: <span>{LOWDAY}</span></InfoText>
                <InfoText>24h % :  <span>{CHANGEPCT24HOUR}%</span></InfoText>
                <InfoText>Update: <span>{LASTUPDATE}</span></InfoText>
            </div>
        </InfoResult>
    )
}
export default Result