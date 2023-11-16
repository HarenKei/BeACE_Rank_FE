import styled from "styled-components";
import SignUpData from "@/src/Common/SignUpData";

const SignUp = () => {

    return(
        <>
            <SignUpContainer>
                <SignUpFormContainer>
                    <h1>BeACE Rank</h1>
                    <SignUpData/>
                </SignUpFormContainer>
            </SignUpContainer>
        </>
    );
}

const SignUpContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpFormContainer = styled.div`
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
    button#signUpBtn{
        width:5em;
        background-color: #1e98fd;
        color:white;
        border-radius: 0.2em;
        border-color: #1e98fd;
        padding:0.1em;
        margin-left: 10em;
    }
    button#signUpBtn:hover{
    background-color:#ff00f7;
    color: white;
    border-color:#ff00f7;
  }
`;

export default SignUp;