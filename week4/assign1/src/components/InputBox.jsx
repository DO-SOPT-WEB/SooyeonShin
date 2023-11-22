import React from 'react'
import {Input,Label} from "../styles/common/CommonStyle"
import { styled } from 'styled-components'

const InputBox = ({name,label,placeholder,value,onChange}) => {
  return (
    <InputContaier>
      <Label htmlFor={name}>{label}</Label>
      <Input type='text'  name={name} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)}></Input>
    </InputContaier>
  )
}

const InputContaier=styled.div`
      width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default InputBox