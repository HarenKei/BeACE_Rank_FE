import styled from "styled-components";
import axios from "axios";
import ListTable from "@/src/Common/ListTable";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  const limit: number = 30;
  const [limitPage, setLimitPage] = useState<number>(0);
  const [rankingLegnth, setRankingLength] = useState<number>(0);
  const [rankingAll, setRankingAll] = useState<React.ReactNode[][]>([]);

  const refactorData = (list: userData[]) => {
    let tmpArray: React.ReactNode[][] = [];

    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        tmpArray.push([
          <Gold key={i}>{i + 1}</Gold>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{list[i].id}</p>,
          <p key={i}>{list[i].name}</p>,
          <p key={i}>{list[i].deptId}</p>,
          <p key={i}>{list[i].score}</p>,
          <p key={i}>{list[i].score * 2}</p>,
        ]);
      } else if (i === 1) {
        tmpArray.push([
          <Silver key={i}>{i + 1}</Silver>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{list[i].id}</p>,
          <p key={i}>{list[i].name}</p>,
          <p key={i}>{list[i].deptId}</p>,
          <p key={i}>{list[i].score}</p>,
          <p key={i}>{list[i].score * 2}</p>,
        ]);
      } else {
        tmpArray.push([
          <Bronze key={i}>{i + 1}</Bronze>,
          <Image key={i} src="/" width={1} height={1} alt={""} />,
          <p key={i}>{list[i].id}</p>,
          <p key={i}>{list[i].name}</p>,
          <p key={i}>{list[i].deptId}</p>,
          <p key={i}>{list[i].score}</p>,
          <p key={i}>{list[i].score * 2}</p>,
        ]);
      }
    }

    for (let i = 3; i < list.length; i++) {
      tmpArray.push([
        <p key={i}>{i + 1}</p>,
        <Image key={i} src="/" width={1} height={1} alt={""} />,
        <p key={i}>{list[i].id}</p>,
        <p key={i}>{list[i].name}</p>,
        <p key={i}>{list[i].deptId}</p>,
        <p key={i}>{list[i].score}</p>,
        <p key={i}>{list[i].score * 2}</p>,
      ]);
    }
    setRankingAll(tmpArray);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/userList")
      .then(function (response) {
        // 성공 핸들링
        refactorData(response.data);
        setRankingLength(response.data.length);
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
    console.log(rankingLegnth);
    setLimitPage(Math.ceil(rankingLegnth / 30));
  }, [rankingLegnth]);

  useEffect(() => {
    console.log(limitPage);
  }, [limitPage]);

  return (
    <>
      <ListTable head={tableHead} list={rankingAll} />
    </>
  );
};

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
