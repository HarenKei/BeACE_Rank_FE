import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <UpperContainer>
        <Link href={"/"}>
          <h1>BeACE RANK</h1>
        </Link>
        <Link href={"/login"}>
          <p>로그인</p>
        </Link>
      </UpperContainer>
      <LowerContainer>
        <MenuContainer>
          <Menu>
            <Link
              href={"https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120"}
            >
              <p>BeACE?</p>
            </Link>
            <Link href={"/program"}>
              <p>로드맵</p>
            </Link>
            <Link href={"/ranking"}>
              <p>랭킹</p>
            </Link>
            <Link href={"/honor"}>
              <p>명예의 전당</p>
            </Link>
          </Menu>
        </MenuContainer>
      </LowerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperContainer = styled.div`
  width: 1200px;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2em;
    font-weight: 900;
    letter-spacing: -0.1rem;
    background: linear-gradient(94deg, #1e98fd, #ff00f7);
    color: transparent;
    -webkit-background-clip: text;
  }
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: #0096c8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 1200px;
`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }
`;

export default Header;
