import styled from "styled-components";
import ListTable from "@/src/Common/ListTable";
import Pagination from "@/src/Common/Pagination";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const tableHead = [
  "No",
  "BeACE 분류",
  "중분류",
  "프로그램명",
  "배점",
  "운영부서",
];

interface programData {
  id: string;
  name: string;
  point: number;
  contents: string;
  mainCategory: string;
  middleCategory: string;
  host: string;
}

interface Category {
  category: string;
}

const ProgramCategory = ({ category }: Category) => {
  const limit: number = 30; //랭킹 목록 제한
  const [curPage, setCurPage] = useState<number>(1); //현재 페이지
  const [offset, setOffset] = useState<number>(0);
  const [allListLen, setAllListLen] = useState<number>(0);
  const [roadAll, setRoadAll] = useState<React.ReactNode[][]>([]);

  const refactorData = (list: programData[]) => {
    const TMP_ARRAY: React.ReactNode[][] = [];

    list.forEach((item, i) => {
      TMP_ARRAY.push([
        <p key={i}>{i + 1}</p>,
        <p key={i}>{item.mainCategory}</p>,
        <p key={i}>{item.middleCategory}</p>,
        <Link key={i} href={"/"}>
          <p key={i}>{item.name}</p>
        </Link>,
        <p key={i}>{item.point}</p>,
        <p key={i}>{item.host}</p>,
      ]);
    });

    setRoadAll(TMP_ARRAY);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE}/findMainCategory?mainCategory=${category}`
      )
      .then((response) => {
        setAllListLen(response.data.length);
        refactorData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [category]);

  useEffect(() => {
    setOffset((curPage - 1) * limit);
  }, [curPage]);

  return (
    <ProgramAllContainer>
      <ListTable
        head={tableHead}
        list={roadAll}
        offset={offset}
        limit={limit}
      />
      <Pagination
        listLen={allListLen}
        limit={limit}
        curPage={curPage}
        setCurPage={setCurPage}
      />
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

export default ProgramCategory;
