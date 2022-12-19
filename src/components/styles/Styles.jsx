import styled from "styled-components";

const Input = styled.input`
  width: 500px;
  height: 40px;
  font-size: 19px;
  padding: 0 5px;
  background: none;
  border: none;
  border-bottom: 1px solid;
  outline: none;
`;
const InputWithButton = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 50px 0;
`;
const TodoStyle = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  border: .1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 5px;
`;
const List = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin: 20px auto;
    background-color: #4f92cc;
    padding: 10px;
    border-radius: 5px;
    text-transform: capitalize;
  }
  & .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  & .btns button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    font-size: 20px;
  }
  & input {
    width: 200px;
    height: 20px;
    font-size: 17px;
    border: none;
    border-bottom: 1px solid gainsboro;
    background: none;
    outline: none;
    color: aliceblue;
  }
`;

const Title = styled.div`
  & {
    text-decoration: ${({ className }) => (!className ? "line-through" : "")};
  }
`;

const ErrorCall = styled.div`
  & {
    position: absolute;
  background-color: #00000086;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: red;
  left: 0;
  }
  & div h1 {
    display: block;
  }
  & {
    button {
      width: 150px;
      height: 40px;
      font-size: 18px;
    }
  }
  & .title__error {
    font-size: 30px;
  }
  & .message__error {
    font-size: 30px;
  }
`

const saveInput = styled.input`
  width: 100px;
  height: 30px;
`

export { Input, Button, TodoStyle, InputWithButton, Title, List, ErrorModule, ErrorCall, saveInput };
