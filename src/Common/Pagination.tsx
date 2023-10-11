import { useEffect } from "react";
import styled from "styled-components";

function Pagination({
  listLen,
  limit,
  curPage,
  setCurPage,
}: {
  listLen: number;
  limit: number;
  curPage: number;
  setCurPage: any;
}) {
  const numPages = Math.ceil(listLen / limit); //페이지 개수

  const onClickHandler = (e: React.MouseEvent) => {
    console.log((e.target as HTMLParagraphElement).id);
    setCurPage(Number((e.target as HTMLParagraphElement).id));
  };

  useEffect(() => {
    Array(numPages)
      .fill()
      .map((item, index) => {
        console.log(`index : ${index}`);
      });
  }, []);

  return (
    <PaginationContainer>
      {Array(numPages)
        .fill()
        .map((item, index) => (
          <Button key={index}>
            <p
              id={(index + 1).toString()}
              className={`page ${curPage === index + 1 ? "active" : ""}`}
              onClick={onClickHandler}
            >
              {index + 1}
            </p>
          </Button>
        ))}
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .page {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .page.active {
    color: #1e98fd;
    font-weight: 900;
  }
`;

export default Pagination;
