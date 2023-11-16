import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <Link href={"/"}>
          <Logo>
            <h1>BeACE.RANK</h1>
          </Logo>
        </Link>
        <Privacy>
          <Link href={"/privacy"}>▷개인정보 처리 방침</Link>
        </Privacy>
        <Copyright>
          <p>Copyright 2023. 사나이클럽. All rights reserved.</p>
        </Copyright>
      </FooterContents>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContents = styled.div`
  width: 1200px;
  border-top: 0.15rem dashed #1e98fd;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1em;

  h1 {
    width: min-content;
    font-size: 2.25em; // 36px
    font-family: Noto Sans;
    font-weight: 700;
    letter-spacing: -0.1rem;
    background: linear-gradient(90deg, #1e98fd, #ff00f7);
    color: transparent;
    -webkit-background-clip: text;
  }
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
  p {
    margin-top: 0.5em;
  }
`;

export default Footer;
