import styled from "styled-components";
import axios from "axios";
import ListTable from "@/src/Common/ListTable";
import { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@/src/Common/Pagination";


const tableHead = [
  "랭킹",
  "티어",
  "학번",
  "이름",
  "학과",
  "이수완료",
  "레이팅",
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

// //{
//   "id": "201920211",
//   "name": "오시영",
//   "deptId": 1,
//   "score": 30,
//   "grade": 3,
//   "deviation": 0.0,
//   "password": "Pr0t3ct",
//   "created_at": "2023-10-09T05:53:22.000+00:00"
// },

const RankingAll = () => {
  const limit: number = 30; //랭킹 목록 제한
  const [curPage, setCurPage] = useState<number>(1); //현재 페이지
  const [limitPage, setLimitPage] = useState<number>(0); //최대 페이지 개수
  const [offset, setOffset] = useState<number>(0);
  const [allListLen, setAllListLen] = useState<number>(0);
  const [rankingAll, setRankingAll] = useState<React.ReactNode[][]>([]);
  const [rankingAllTest, setRankingAllTest] = useState<React.ReactNode[][][]>(
    []
  );

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
          <p key={i}>{item.score * 2}</p>,
        ]);
      } else if (i === 1) {
        tmpArray.push([
          <Silver key={i}>{i + 1}</Silver>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{item.score * 2}</p>,
        ]);
      } else if (i === 2) {
        tmpArray.push([
          <Bronze key={i}>{i + 1}</Bronze>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{item.score * 2}</p>,
        ]);
      } else {
        tmpArray.push([
          <p key={i}>{i + 1}</p>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{item.id}</p>,
          <p key={i}>{item.name}</p>,
          <p key={i}>{item.deptId}</p>,
          <p key={i}>{item.score}</p>,
          <p key={i}>{item.score * 2}</p>,
        ]);
      }
    })
    setRankingAll(tmpArray);
  };


  useEffect(() => {
    axios
      .get("http://localhost:8080/userList")
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
  }, []);


  useEffect(() => {
    console.log(rankingAllTest);
  }, [rankingAllTest]);

  useEffect(()=> {
    setOffset((curPage - 1) * limit);
  },[curPage]);

  useEffect(()=> {
  }, [offset]);

  return (
    <ListAllContainer>
      <ListTable head={tableHead} list={rankingAll} offset={offset} limit={limit} />
      {/* <ListTable head={tableHead} list={rankingAll} /> */}
      <Pagination listLen={allListLen} limit={limit} curPage={curPage} setCurPage={setCurPage}/>
    </ListAllContainer>
  );
};

const ListAllContainer = styled.div`
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

export default RankingAll;
