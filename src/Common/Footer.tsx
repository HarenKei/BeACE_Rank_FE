import styled from "styled-components";
import Link from 'next/link'

const Footer = () =>{
    return(
        <FooterContainer>
            <Logo>
                BeACE.RANK
            </Logo>
            <Privacy>
                <Link href="/">
                    <a>▷개인정보 처리 방침</a>
                </Link>
            </Privacy>
            <Copyright>
                <p>Copyright 2023. 사나이클럽. All rights reserved.</p>
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
    font-size: 2.25em; // 36px
    font-family: Noto Sans;
    font-weight: 700;
    word-wrap: break-word;
    justify-content: center;
    margin-bottom: 1em;
`;

const Privacy = styled.div`
    color: black;
    font-size: 1em; // 16px
    font-family: Noto Sans;
    font-weight: 500;
    word-wrap: break-word;
    justify-content: center;
`;
const Copyright = styled.div`
    color: black;
    font-size: 1em;
    font-family: Noto Sans;
    font-weight: 500;
    word-wrap: break-word;
    justify-content: center;
    p{
        margin-top: 0.5em;
    }
`;

export default Footer;