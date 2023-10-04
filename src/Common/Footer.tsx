import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <Logo>BeACE.RANK</Logo>
        <Privacy>
          <Link href="/">▷개인정보 처리 방침</Link>
        </Privacy>
        <Copyright>
          <p>Copyright 2023. 사나이클럽. All rights reserved.</p>
        </Copyright>
      </FooterContents>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 1920px;
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
  color: black;
  font-size: 2.25em; // 36px
  font-family: Noto Sans;
  font-weight: 700;
  word-wrap: break-word;
  justify-content: center;
  margin-top: 1rem;
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
  p {
    margin-top: 0.5em;
  }
`;

export default Footer;
