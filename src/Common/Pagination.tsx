import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  listLen: number;
  limit: number;
  curPage: number;
  setCurPage: any;
}

//listLen : 전체 리스트 길이
//limit : 한 페이지 당 최대 요소 개수
//curPage : 현재 페이지
//setCurPage : 현재 페이지 갱신용 함수.

const Pagination = ({ listLen, limit, curPage, setCurPage }: Props) => {
  const numPages : number = Math.ceil(listLen / limit); //페이지 개수
  const paginationLimit : number = 5;
  const [curPagination, setCurPaginaiton] = useState<number>(1);
  const [paginationOffset, setPageinationOffset] = useState<number>(1);

  const onClickHandler = (e: React.MouseEvent) => {
    console.log((e.target as HTMLParagraphElement).id);
    setCurPage(Number((e.target as HTMLParagraphElement).id));
  };

  const onClickHandlerPagination = (e: React.MouseEvent) => {
    const id: string = (e.target as HTMLButtonElement).id;
    console.log((e.target as HTMLButtonElement).id);

    if(id === "decrease") {
      setCurPaginaiton(curPagination - 1);
    } else if(id === "increase") {
      setCurPaginaiton(curPagination + 1);
    }
  }

  useEffect(()=> {
    console.log(`curPagination ${curPagination}`);
    setPageinationOffset((curPagination - 1) * paginationLimit);
  }, [curPagination])

  // useEffect(() => {
  //   if(curPage === ((paginationLimit * curPagination) - 1)) {
  //     setCurPaginaiton(curPagination + 1);
  //   }
  // }, [curPage])

  return (
    <PaginationContainer>
      <PaginationButton id={"decrease"} onClick={onClickHandlerPagination}/>
      {Array(numPages)
        .fill()
        .slice(paginationOffset, paginationOffset + paginationLimit)
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
        <PaginationButton id={"increase"} onClick={onClickHandlerPagination}/>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
`;

const PaginationButton = styled.button`
  width: 3rem;
  background-color: red;
`

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
