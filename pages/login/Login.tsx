import styled from "styled-components";
import LoginData from "@/src/Common/LoginData";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginFormContainer>
          <h1>BeAce Rank</h1>
          <LoginData />
          <h5>아이디가 없다면?</h5>
          <button type="submit" id="signIn">회원가입 하러가기</button>
        </LoginFormContainer>
      </LoginContainer>
    </>
  )
};

const LoginContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.1em solid #1e98fd;
  border-radius: 1%;
  padding: 5em 10em;

  h1 {
    font-size: 2em;
    font-weight: 900;
    letter-spacing: -0.1rem;
    background: linear-gradient(94deg, #1e98fd, #ff00f7);
    color: transparent;
    -webkit-background-clip: text;
    padding-bottom: 1.5em;
  }

  input[type=text]{
    width: 15em;
    /* font-style:; */
    padding: 0.1em;
    margin-bottom: 0.5em;
  }
  input[type=password]{
    width: 15em;
    margin-bottom: 0.5em;
  }

  button#loginBtn{
    width:3.5em;
    background-color: #1e98fd;
    color:white;
    border-radius: 0.2em;
    border-color: #1e98fd;
    padding:0.1em;
    margin-left: 11.5em;
  }

  button#loginBtn:hover{
    background-color:#ff00f7;
    color: white;
    border-color:#ff00f7;
  }

  h5{
    margin: 0.5em;
  }

  button#signIn{
    width: 15em;
    border:none;
    border-radius: 0.2em;
    box-shadow: 0px 3px 0px 0px #a9a9a9;
  }
  button#signIn:hover{
    margin-top:2px;
    box-shadow: 0px 2px 0px 0px #d3d3d3;
  }
`;

export default Login;