import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import EachProgram from "./EachProgram";

export interface ProgramInfo {
  id: string;
  name: string;
  point: number;
  contents: string;
  mainCategory: string;
  middleCategory: string;
  host: string;
}

const dummyInfo: ProgramInfo = {
  id: "z99",
  name: "로딩중",
  point: 0,
  contents: "로딩중",
  mainCategory: "로딩중",
  middleCategory: "로딩중",
  host: "로딩중",
};

const ProgramDetail = () => {
  const router = useRouter();
  const programId = router.query.ProgramDetail;
  const [program, setProgram] = useState<ProgramInfo>(dummyInfo);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE}/findBeACEProgram?id=${programId}`
      )
      .then((response) => {
        setProgram(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [programId]);

  return (
    <ProgramDetailContainer>
      <EachProgram data={program} />
    </ProgramDetailContainer>
  );
};

const ProgramDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
`;

export default ProgramDetail;
