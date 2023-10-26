import styled from "styled-components";
import ListTable from "@/src/Common/ListTable";
import Pagination from "@/src/Common/Pagination";
import { useEffect, useState } from "react";

const tableHead = [
  "No",
  "BeACE대분류",
  "BeACE중분류",
  "프로그램명",
  "배점",
  "운영부서",
];

interface programData {
    
}

const ProgramAll = () => {
  const limit: number = 30; //랭킹 목록 제한
  const [curPage, setCurPage] = useState<number>(1); //현재 페이지
  const [offset, setOffset] = useState<number>(0);
  const [allListLen, setAllListLen] = useState<number>(0);
  const [roadAll, setRoadAll] = useState<React.ReactNode[][]>([]);

  return (
    <ProgramAllContainer>
      <ListTable head={tableHead} list={roadAll} offset={offset} limit={limit} />      
    </ProgramAllContainer>
  );
};

const ProgramAllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;