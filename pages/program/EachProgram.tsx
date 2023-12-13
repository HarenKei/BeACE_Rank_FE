import styled from "styled-components";
import { ProgramInfo } from "./[ProgramDetail]";
import { useEffect } from "react";

interface Props {
  data: ProgramInfo;
}

const EachProgram = ({ data }: Props) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <EachProgramContainer>
      <TitleContainer>
        <h2>
          {data?.mainCategory} &gt; {data?.middleCategory}
        </h2>
        <NameAndButton>
          <h1>{data?.name}</h1>
          <Button>이수 신청</Button>
        </NameAndButton>
        <h2>BeACE 점수 : {data?.point}</h2>
      </TitleContainer>

      <ContentsContainer>
        <p>{data?.contents}</p>
      </ContentsContainer>
    </EachProgramContainer>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: #1e98fd;
    font-size: 3rem;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 50vh;
  border: 5px solid #1e98fd;
  border-radius: 1rem;

  display: flex;
  justify-content: center;

  p {
    width: 95%;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

const EachProgramContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameAndButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 9rem;
  height: 3rem;
  border: 0;
  border-radius: 10px;
  background-color: #81bd26;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #405f11;
    transition: 0.5s;
  }
`;

export default EachProgram;
