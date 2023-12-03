import styled from "styled-components";


type PhotoPropsType = {
    width: string | number
   
}

export const Photo = styled.img<PhotoPropsType>`
 object-fit: cover;
 max-width: ${({width})=> width + 'px'};

 width: 100%;
 border-radius: 25px;
object-position: center;
 @media ${({ theme }) => theme.media?.mobile}{
//  height: 250px;
   
}
`