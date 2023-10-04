import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <UpperContainer>
        <p>로고</p>
        <p>로그인</p>
      </UpperContainer>
      <LowerContainer>
        <MenuContainer>
          <Menu>
            <Link href={"/"}>
              <p>BeACE?</p>
            </Link>
            <Link href={"/"}>
              <p>로드맵</p>
            </Link>
            <Link href={"/"}>
              <p>랭킹</p>
            </Link>
            <Link href={"/"}>
              <p>명예의 전당</p>
            </Link>
          </Menu>
        </MenuContainer>
      </LowerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 1920px;
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
