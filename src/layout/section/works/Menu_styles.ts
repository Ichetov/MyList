import styled, { css } from "styled-components";



const LinkItem = styled.a<{ isFetch?: boolean, active: boolean }>`
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
transition: .3s;
&:hover{
 color: #fa4c16ed;
}

${({ isFetch }) => isFetch && css<{ isFetch?: boolean }>`
&{
    position: relative;
    width: 0%;
    &:after{
      content: '';
      position: absolute;
      border: 1px solid ${({ theme }) => theme.colors?.accent};
      width: 0%;
      bottom: 0;
      left: 0;
      transition: 1s;
    }
}
  &:hover::after{
    content: '';
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors?.accent};
    width: 100%;
    bottom: 0;
    left: 0;
   
  }
` }
}

${({active})=> active && css`
&{
  color: #fa4c16ed;
  position: relative;
}
&:after{
  content: '';
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors?.accent};
  width: 100%;
  bottom: 0;
  left: 0;
}
`
}
`


export const S = {
    LinkItem,
}