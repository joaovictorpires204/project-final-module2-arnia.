import S from '../../../assets/styles/evaluation-styles/head-sectionstyle'

type DiviverSectProps = {
    title: string
}

export const DividerSection = ({title}: DiviverSectProps) => {
    return(
        <S.HeadContainer>
            <S.DividerContent>{title}</S.DividerContent>
            <S.Bar></S.Bar>
        </S.HeadContainer>
    )
}