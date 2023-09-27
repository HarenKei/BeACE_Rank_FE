import styled from "styled-components";

const Footer = () =>{
    return(
        <FooterContainer>
            <Logo>
                BeACE.RANK
            </Logo>
            <Privacy>
                <a href={'/'}>▷개인정보 처리 방침</a>
            </Privacy>
            <Copyright>
                Copyright 2023. 사나이클럽. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    width: 1920px;
    height: 130px;
    display: flex;
    flex-direction: column;
    border-top: 2px #0096C8 dotted
`;

const Logo = styled.div`
    color: black;
    font-size: 36px;
    font-family: Noto Sans;
    font-weight: 700;
    word-wrap: break-word;
    justify-content: center;
`;

const Privacy = styled.div`
    color: black;
    font-size: 16px;
    font-family: Noto Sans;
    font-weight: 500;
    word-wrap: break-word;
    justify-content: center;
`;
const Copyright = styled.div`
    color: black;
    font-size: 16px;
    font-family: Noto Sans;
    font-weight: 500;
    word-wrap: break-word;
    justify-content: center;
`;

export default Footer;