import styled from "styled-components";

import MainBanner from "./MainBanner";
import MainIntro from "./MainIntro";

const Main = () => {
  return (
    <MainContainer>
      <MainBanner />
      <MainIntro />
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
