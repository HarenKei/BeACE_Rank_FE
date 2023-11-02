import { useState, useEffect } from "react";
import styled from "styled-components";
import ProgramAll from "./ProgramAll";
import ProgramCategory from "./ProgramCategory";

const ProgramMain = () => {
  const [category, setCategory] = useState<string>("1");
  const [listCategory, setListCategory] = useState<string>("");

  const navClickHandler = (e: React.MouseEvent) => {
    setCategory((e.target as HTMLParagraphElement).id);
  };

  useEffect(() => {
    if(category === "2") {
      setListCategory("Basic");
    } else if (category === "3") {
      setListCategory("Educational");
    } else if (category === "4") {
      setListCategory("Active");
    } else if (category === "5") {
      setListCategory("Creative");
    } else if(category === "6") {
      setListCategory("Ethical");
    }
  }, [category]);

  return (
    <ProgramMainContainer>
      <ProgramTitle>
        <h1>BeACE 로드맵</h1>
        <p>BeACE 프로그램을 카테고리별로 확인해보세요.</p>

        <Category>
          <p
            id={"1"}
            className={`menu ${category === "1" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            All
          </p>
          <p
            id={"2"}
            className={`menu ${category === "2" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            Basic
          </p>
          <p
            id={"3"}
            className={`menu ${category === "3" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            Educational
          </p>
          <p
            id={"4"}
            className={`menu ${category === "4" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            Active
          </p>
          <p
            id={"5"}
            className={`menu ${category === "5" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            Creative
          </p>
          <p
            id={"6"}
            className={`menu ${category === "6" ? "active" : ""}`}
            onClick={navClickHandler}
          >
            Ethical
          </p>
        </Category>
      </ProgramTitle>

      {category === "1" && <ProgramAll />}
      {category !== "1" && <ProgramCategory category={listCategory} />}
    </ProgramMainContainer>
  );
};

const ProgramMainContainer = styled.div`
  width: 1200px;
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgramTitle = styled.div`
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

  .menu.active {
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

export default ProgramMain;
