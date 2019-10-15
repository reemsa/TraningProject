import React from 'react'
import useStyles from './TagButtonStyle'
interface IProps{
    data:string
}
const TagButton:React.FC<IProps>=({data})=>{
    const classes=useStyles()
    return <button disabled className={classes.button}>{data}</button>
}
export default TagButton