

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin: number
    Fmax: number

}  


export const font = ({family, weight, color, lineHeight,Fmin,Fmax}: fontPropsType)=>{
 return `
 font-family: ${family || 'Roboto'};
 font-weight: ${weight || 400};
 color: ${color || '#494949'};
 line-height: ${lineHeight || 1.2};
 font-size:  calc( (100vw - 360px)/(1146 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
 `
}