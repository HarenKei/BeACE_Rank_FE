import styled from "styled-components";
import RankingMain from "./RankingMain";

const Ranking = () => {
  return (
    <RankingContainer>
      <RankingMain />
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export default Ranking;
