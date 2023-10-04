import styled from "styled-components";

import MainBanner from "./MainBanner";
import MainIntro from "./MainIntro";
import MainMenu from "./MainMenu";

const Main = () => {
  return (
    <MainContainer>
      <MainBanner />
      <MainIntro />
      <MainMenu />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;
