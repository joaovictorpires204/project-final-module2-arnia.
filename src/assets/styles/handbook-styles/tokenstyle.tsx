import styled from "styled-components";

const TokenCard = styled.div`
    padding: 30px;
`

const TokenContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
`
const TokenSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`

const TokenHeader = styled.div`
    display: flex;
    gap: 10px;
`

const TokenIcon = styled.img`
    width: 15px;
    height: 15px;
`

const InfoText = styled.div`
    color: #00995D;
`

const TokenDescrip = styled.p`
    margin: 2px 25px;
    color: grey;
`

export default{
    TokenCard, 
    TokenContent,
    TokenSection,
    TokenHeader,
    TokenIcon,
    InfoText,
    TokenDescrip
}