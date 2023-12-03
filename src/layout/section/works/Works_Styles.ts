import styled from "styled-components"
import { Text } from "../../../components/Text"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"

const StyledWorks = styled.section`
padding-bottom: 60px;
padding-top: 50px;
position: relative;
background-color: #fff;
 ul{
    white-space: nowrap;
    width: 100%;
    overflow: auto;
    @media ${({ theme }: any) => theme.media.mobile}{
    justify-content: start;
    }
  
 }
${Text}{
    @media ${({ theme }: any) => theme.media.tablet}{
        text-align: center;
    }
}
}
${SectionTitle}{
    @media ${({ theme }: any) => theme.media.tablet}{
        text-align: center;
    }
}
${FlexWrapper}{
    @media ${({ theme }: any) => theme.media.tablet}{
        margin-bottom: 10px;
        margin-top: 15px;
    }
}
`

const WorksTitle = styled(SectionTitle)`
margin-bottom: 75px;
text-align: left;
`


export const S = {
    StyledWorks,
    WorksTitle
}