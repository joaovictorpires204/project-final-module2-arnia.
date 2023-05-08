import { color } from 'jodit/types/plugins/color/color'
import styled from 'styled-components'

const PostContainer = styled.div`
  margin: 10px 15px;
`

const PostLine = styled.div`
  position: relative;
  background-color: ${line => line.color};
  width: 2px;
  height: 30px;
  top: -10px;
  left: 60px;
`

const PostCard = styled.div`
  background-color: white;
  width: 790px;
  height: auto;
  margin: 10px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px lightgray;
`

const Border = styled.div`
  background-color: ${border => border.color};
  width: 3px;
  height: 150%;
  margin: 100px;
  border-radius: 100px;
`

const Circle = styled.div`
  background-color: ${circle => circle.color};
  width: 50px;
  height: 50px;
  margin-top: -155px;
  margin-left: -4px;
  border-radius: 50px;
`

const CircleImg = styled.img`
  position: relative;
  top: -40px;
  left: 5px;
`

const PostContent = styled.div`
  width: auto;
`

const PostTitle = styled.div`
  font-weight: 600;
`

const PostData = styled.div`
  margin-top: 10px;
  font-size: 12px;
`

const PostText = styled.div`
  width: auto;
  margin-top: 10px;
  font-size: 14px;
`

const List = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 10px;
  
  border: 1px solid lightgrey;
  border-radius: 10px;
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  border-bottom: 1px solid lightgrey;
`
const LineBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const BtnFinish = styled.div`
  background-color: #41f6ad;
  width: 100px;
  height: 20px;
  border-radius: 30px;
  color: var(--primary-color);
  text-align: center;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 10px;
`

const FooterBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color => color.color};
  width: 130px;
  height: 35px;
  border-radius: 15px;
  color: var(--primary-color);
`

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

export default {
  PostContainer,
  PostCard,
  Border,
  PostLine,
  Circle,
  CircleImg,
  PostContent,
  PostTitle,
  PostData,
  PostText,
  List,
  Line,
  LineBtn,
  BtnFinish,
  Footer,
  FooterBtns,
  Img
}
