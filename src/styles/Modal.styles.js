import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
position: relative
background: grey;

`;

export const Title = styled.label`
  color: black;
  font-size: 16px;
`;

export const Divider = styled.hr`
  color: red;
`;

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: grey;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;

export const TitleUser = styled.h1`
  color: rgb(97, 97, 97);
`;

export const Title4 = styled.h4`
  color: black;
`;
export const ModalWrapper = styled.div`
width: ${(props) => (props.dataComments ? "1000px" : "400px")};
height: ${(props) => (props.dataComments ? "600px" : "400px")};
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.9);
background: white;
display: grid;
padding: 10px;
position: fixed;
overflow: auto;
top: 50%;
left: 50%;
margin-top: -400px;
margin-left: -500px;
border-radius: 10px;
z-index: 10;
font-size: 16px;




@media(max-width: 500px){
        
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 30%;
    overflow: auto;
    margin: -25px 0 0 -25px; 
  }
}

`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  z-index: 10;
`;

export const CloseModal = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
