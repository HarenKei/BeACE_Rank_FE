import styled from "styled-components";
import axios, { all } from "axios";
import ListTable from "@/src/Common/ListTable";
import { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@/src/Common/Pagination";
import SelectBox from "@/src/Common/SelectBox";

const tableHead = [
  "랭킹",
  "티어",
  "학번",
  "이름",
  "학과",
  "이수완료",
  "레이팅",
];

const selectOption = [
  {
    name: "1학년",
    value: 1,
  },
  {
    name: "2학년",
    value: 2,
  },
  {
    name: "3학년",
    value: 3,
  },
];

interface userData {
  id: string;
  name: string;
  deptId: number;
  score: number;
  grade: number;
  deviation: number;
  password: string;
  create_at: Date;
}

const RankingGrade = () => {
  const limit: number = 30; //랭킹 목록 제한
  const [curPage, setCurPage] = useState<number>(1); //현재 페이지
  const [offset, setOffset] = useState<number>(0);
  const [allListLen, setAllListLen] = useState<number>(0);
  const [rankingAll, setRankingAll] = useState<React.ReactNode[][]>([]);
  const [option, setOption] = useState<number>(1);

  const refactorData = (list: userData[]) => {
    let tmpArray: React.ReactNode[][] = [];

    list.forEach((item, i) => {
      if (i === 0) {
        tmpArray.push([
          <Gold key={i}>{i + 1}</Gold>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{Math.ceil(item.score * 7 * 0.1)}</p>,
        ]);
      } else if (i === 1) {
        tmpArray.push([
          <Silver key={i}>{i + 1}</Silver>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{Math.ceil(item.score * 7 * 0.1)}</p>,
        ]);
      } else if (i === 2) {
        tmpArray.push([
          <Bronze key={i}>{i + 1}</Bronze>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{Math.ceil(item.score * 7 * 0.1)}</p>,
        ]);
      } else {
        tmpArray.push([
          <p key={i}>{i + 1}</p>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{Math.ceil(item.score * 7 * 0.1)}</p>,
        ]);
      }
    });
    setRankingAll(tmpArray);
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE}/gradeRanking?grade=${option}`)
      .then(function (response) {
        // 성공 핸들링
        setAllListLen(response.data.length);
        refactorData(response.data);
        console.log("Loaded All Ranking Data");
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, [option]);

  useEffect(() => {
    setOffset((curPage - 1) * limit);
    //오프셋 (페이지 시작점) 적용.
  }, [curPage]);

  return (
    <ListAllContainer>
      <SelectGrade>
        <h1>{option}학년 랭킹</h1>
        <SelectBox selectOption={selectOption} setOption={setOption} />
      </SelectGrade>

      <ListContainer>
        <ListTable
          head={tableHead}
          list={rankingAll}
          offset={offset}
          limit={limit}
        />
        <Pagination
          listLen={allListLen}
          limit={limit}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </ListContainer>
    </ListAllContainer>
  );
};

const ListAllContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SelectGrade = styled.div`
  width: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    color: #1e98fd;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Gold = styled.p`
  color: #e38b29;
  font-weight: 900;
`;

const Silver = styled.p`
  color: #526d82;
  font-weight: 900;
`;

const Bronze = styled.p`
  color: #6c3428;
  font-weight: 900;
`;

export default RankingGrade;
