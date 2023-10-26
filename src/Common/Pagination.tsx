import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
  const paginationLimit: number = 5; //페이지네이션 당 5개의 항목으로 제한 1 ~ 5, 6 ~ 10...
  const numPages: number = Math.ceil(listLen / limit); //만들어야 할 페이지의 갯수
  const [curPagination, setCurPaginaiton] = useState<number>(1); //현재 pagination의 index
  const [paginationOffset, setPageinationOffset] = useState<number>(1); //pagination의 시작 지점 (offset)
  const [paginationArray, setPaginationArray] = useState<Array<number>>([]); //pagination을 사용할 numPages만큼의 배열
  const numPagination: number = Math.ceil(numPages / paginationLimit); //pagination의 pagination 갯수

  const onClickHandler = (e: React.MouseEvent) => {
    setCurPage(Number((e.target as HTMLParagraphElement).id));
  };

  const onClickHandlerPagination = (e: React.MouseEvent) => {
    const value: string = (e.target as any).id;

    if (value === "decrease") {
      setCurPaginaiton(curPagination - 1);
    } else if (value === "increase") {
      setCurPaginaiton(curPagination + 1);
      
    }
  };

  useEffect(() => {
    setPageinationOffset((curPagination - 1) * paginationLimit);
    setCurPage(curPagination * paginationLimit - 4);
  }, [curPagination]);

  useEffect(() => {
    let arr: Array<number> = Array(numPages)
      .fill()
      .map((item, index) => {
        return index;
      });
    setPaginationArray(arr);
  }, [numPages]);

  return (
    <PaginationContainer>
      {curPagination >= 2 && (
        <PaginationButton id={"decrease"} onClick={onClickHandlerPagination}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#1e98fd" />
        </PaginationButton>
      )}
      {paginationArray
        .slice(paginationOffset, paginationOffset + paginationLimit)
        .map((item, index) => (
          <Button key={index}>
            <p
              id={(item + 1).toString()}
              className={`page ${curPage === item + 1 ? "active" : ""}`}
              onClick={onClickHandler}
            >
              {item + 1}
            </p>
          </Button>
        ))}
      {curPagination != numPagination && (
        <PaginationButton id={"increase"} onClick={onClickHandlerPagination}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" color="#1e98fd" />
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    pointer-events: none;
  }
`;

const Button = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
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
