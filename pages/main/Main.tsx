import MainBanner from "./MainBanner";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <MainBanner />
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
