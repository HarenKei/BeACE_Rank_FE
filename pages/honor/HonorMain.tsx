import { useState, useEffect, MouseEventHandler } from "react";
import styled from "styled-components";
import ListTable from "@/src/Common/ListTable";
import HonorScholarship from "./HonorScholarship";
import HonorAward from "./HonorAward";
import axios from "axios";

const Options = [
	{},
	{ value: "grade1", name: "1학년" },
	{ value: "grade2", name: "2학년" },
	{ value: "grade3", name: "3학년" },
];

const HonorMain = () => {

  const [grade, setGrade] = useState("");
  const [category, setCategory] = useState<string>("1");
  
  const navClickHandler = (e: React.MouseEvent) => {
    setCategory((e.target as HTMLParagraphElement).id);
  };
  
  const dropDownHandler = (e: any) => { // 적절한 타입을 찾지 못함.
    setGrade((e.target as any).value);
  };

  const [toggle, setToggle] = useState<boolean>(true);
  const toggleHandler = () => {
    const reverse = !toggle;
    setToggle(reverse)
  }

  const handlers = () => {
    navClickHandler;
    toggleHandler;
  }
  
    useEffect(() => {
      console.log(category);
    }, [category]);

    useEffect(() => {
      console.log(grade);
    }, [grade]);

  return (
    <HonorMainContainer>
      <HonorTitle>
        <h1>명예의 전당</h1>
        <p>BeACE 점수 150점 이상은 총장 상장 수여 대상,</p>
        <p>학년별 BeACE 점수 상위 39명은 장학금 수혜 유력 대상입니다.</p>
        <Category>
          <p
            id={"1"}
            className={`menu ${category === "1" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            장학금 수혜 유력
          </p>
          <p
            id={"2"}
            className={`menu ${category === "2" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            총장 상장 유력
          </p>
        </Category>
      </HonorTitle>

      {category === "1" && <HonorScholarship /> }
      {grade === "1" && <ListTable />}
      {category === "2" && <HonorAward />}
    </HonorMainContainer>
  );
};

const HonorMainContainer = styled.div`
  width: 1200px;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HonorTitle = styled.div`
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
  width: 20%;
  margin-top: 1.6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default HonorMain;
