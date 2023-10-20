import styled from "styled-components";
import HonorMain from "./HonorMain";

const Honor = () => {
  return (
    <HonorContainer>
      <HonorMain/>
    </HonorContainer>
  );
};

const HonorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

export default Honor;
