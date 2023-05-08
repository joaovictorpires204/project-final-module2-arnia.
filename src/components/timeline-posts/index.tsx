import S from '../../assets/styles/timeline-posts/timelinestyle'
import Head from '../../assets/icons/mental-health-line-white.png'
import { Children, ReactNode } from 'react'

type PostProps = {
  line: string
  border: string
  circle: string
  title: string
  data: string
  text?: string
  children?: ReactNode
}

export const TimelinePost = ({ line, border, circle, title, data, text, children }: PostProps) => {
  return (
    <S.PostContainer>
      <S.PostLine color={line}/>
      <S.PostCard>
        <S.Border color={border} />
        <S.Circle color={circle} />
        <S.CircleImg src={Head} alt="" />
        <S.PostContent>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostData>{data}</S.PostData>
          <S.PostText>{text}</S.PostText>
          {children}
        </S.PostContent>
      </S.PostCard>
    </S.PostContainer>
  )
}
