import { useState, useEffect, MouseEventHandler } from "react";
import styled from "styled-components";
import RankingAll from "./RankingAll";
import RankingGrade from "./RankingGrade";


const RankingMain = () => {
  const [category, setCategory] = useState<string>("1");

  const navClickHandler = (e: React.MouseEvent) => {
    setCategory((e.target as HTMLParagraphElement).id);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <RankingMainContainer>
      <RankingTitle>
        <h1>BeACE 랭킹</h1>
        <p>BeACE 랭킹을 카테고리별로 확인해보세요.</p>

        <Category>
          <p
            id={"1"}
            className={`menu ${category === "1" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            전체 랭킹
          </p>
          <p
            id={"2"}
            className={`menu ${category === "2" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            우리 학과 랭킹
          </p>
          <p
            id={"3"}
            className={`menu ${category === "3" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            학과 내 랭킹
          </p>
          <p
            id={"4"}
            className={`menu ${category === "4" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            학년별 랭킹
          </p>
        </Category>
      </RankingTitle>

      {category === "1" && <RankingAll />}
      {category === "4" && <RankingGrade/>}
    </RankingMainContainer>
  );
};

const RankingMainContainer = styled.div`
  width: 1200px;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RankingTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .menu {
    font-weight: 400;
    cursor: pointer;
  }

  .menu.active{
    color: #1e98fd;
    font-weight: 900;
  }
`;

const Category = styled.div`
  width: 30%;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default RankingMain;
