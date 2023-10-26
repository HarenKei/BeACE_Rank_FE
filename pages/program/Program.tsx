import styled from "styled-components";
import ProgramMain from "./ProgramMain";

const Road = () => {
    return (
        <ProgramContainer>
            <ProgramMain />
        </ProgramContainer>
    );
};

const ProgramContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Road;