import styled from "styled-components";

const Title =({title})=>{
  return(
    <>
    <TitleSec>
        <p>{title}</p>
    </TitleSec>
    </>
  )
}

const TitleSec=styled.div`
  width: 40rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p{
    font-size: 25px;
    font-weight: 800;
  }
`

export default Title;