import styled from "styled-components"

type ImgPropsType = {
    src: string
    alt: string
}

export const InnerImg = ({src,alt}: ImgPropsType )=>{
    return(
        <Img src ={src} alt={alt}/>
    )
}

const Img = styled.img`
 max-width: 545px;
 width: 100%;
 flex: start;
 object-fit: cover;
 border-radius: 36px;
 border: 1px solid #C4C4C4;
height: 100%;
`