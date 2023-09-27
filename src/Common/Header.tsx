import styled from "styled-components";

const Header = () => {

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo>
                    <a href={"/"}>BeAce_Rank</a>
                </Logo>
                <Login>
                    <a href={"/"}>로그인</a>
                </Login>
            </LogoContainer>
            <BarContainer>
                <Category>
                    <ul>
                        <li>BeACE?</li>
                        <li>로드맵</li>
                        <li>랭킹</li>
                        <li>ACE</li>
                    </ul>
                </Category>
            </BarContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    width: 1920px;
    height: 130px;
    display: flex;
    flex-direction: column;
`;

const LogoContainer = styled.div`
    width: 1920px;
    height: 80px;
    display: flex;
    flex-direction: row;
`;

const Logo = styled.div`
    color: #0096C8;
    display: flex;
    justify-content: flex-start;
`;

const Login = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const BarContainer = styled.div`
    width: 1920px;
    height: 50px;
    display: flex;
    flex-direction: row;
`;

const Category = styled.div`
    display:flex;
    justify-content: flex-start;
    ul {list-style-type: style type none;;}
    ul li {display:inline;}
`;

export default Header;