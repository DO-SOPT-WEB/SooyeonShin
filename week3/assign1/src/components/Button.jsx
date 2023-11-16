import styled from "styled-components";

const Button =(props)=>{

  

  return(
    <Btn type="button" onClick={props.onClick} disabled={props.state === null}>{props.content}</Btn>
  )
};

const Btn=styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #d49898;

  //글자
  font-size:25px;
  font-weight: 600;
  color: #fff;

  &:hover{
    background-color: #d49898a7;
    cursor: pointer;
  }

  &:disabled{
    background-color: #ccc;
  }

`

export default Button;