import styled from "styled-components";
import RankingMain from "./RankingMain";

const Ranking = () => {
  return (
    <RankingContainer>
    랭킹페이지
    <RankingMain/>
    </RankingContainer>
  )
};

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Ranking;
