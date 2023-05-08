import styled from 'styled-components'

const InfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const IconStyle = styled.img`
  cursor: pointer;
`

const InfoText = styled.div`
  width: 90%;
  padding: 0 0 20px 20px;
  font-size: 17px;
`

export default {
  InfoHead,
  IconStyle,
  InfoText
}
