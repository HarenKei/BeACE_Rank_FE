/*
<ListTable 
  tableHead={['랭킹', '티어', '학번', '이름', '학과', '이수완료', 레이팅]}
  tableData={[
    [<p key={...} className="...">1</p>, <img key={...} src="..." />, "김푸앙", 120, 8],
    [<p key={...} className="...">2</p>, <img key={...} src="..." />, "김대림", 110, 7],
    [<p key={...} className="...">3</p>, <img key={...} src="..." />, "박안양", 100, 7],
    ...
  ]} />
*/
import styled from "styled-components";

const sampleTableHead = [
  "랭킹",
  "티어",
  "학번",
  "이름",
  "학과",
  "이수완료",
  "레이팅",
];
const sampleTableData = [
  [
    <p key={1}>1</p>,
    <img key="tier" src="..." />,
    "2021001",
    "홍길동",
    "컴퓨터 공학",
    3,
    1700,
  ],
  [
    <p key={2}>2</p>,
    <img key="tier" src="..." />,
    "2021002",
    "박지영",
    "수학",
    2,
    1500,
  ],
  [
    <p key={3}>3</p>,
    <img key="tier" src="..." />,
    "2021003",
    "김영희",
    "물리학",
    3,
    1400,
  ],
  [
    <p key={4}>4</p>,
    <img key="tier" src="..." />,
    "2021004",
    "이철수",
    "화학",
    1,
    1600,
  ],
  [
    <p key={5}>5</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={6}>6</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={7}>7</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={8}>8</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={9}>9</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={10}>10</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={11}>11</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={12}>12</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={13}>13</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={14}>14</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={15}>15</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={16}>16</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={17}>17</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={18}>18</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={19}>19</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
  [
    <p key={20}>20</p>,
    <img key="tier" src="..." />,
    "2021005",
    "최예진",
    "생물학",
    2,
    1350,
  ],
];

import { useEffect, useState } from "react";

interface Props {
  tableHead: string[];
  tableData: Array<Array<React.ReactNode>>;
}

const ScholarList = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // Prevent hydration error

  return (
    isMounted && (
      <TableStyle>
        <TheadStyle>
          {sampleTableHead.map((thData, index) => (
            <th key={index}>{thData}</th>
          ))}
        </TheadStyle>
        <TbodyStyle>
          {sampleTableData.map((row, index) => (
            <tr key={index}>
              {row.map((col, index) => (
                <td key={index}>{col}</td>
              ))}
            </tr>
          ))}
        </TbodyStyle>
      </TableStyle>
    )
  );
};

const TableStyle = styled.table`
  width: 100%;
  margin-top: 3.2rem;
  text-align: center;
  border-collapse: collapse;
`;

const TheadStyle = styled.thead`
  font-size: 1.25rem;
  font-weight: 900;
  color: #1e98fd;

  th {
    height: 3rem;
    border-bottom: 3px solid #1e98fd;
  }
`;

const TbodyStyle = styled.tbody`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 100px;
  tr {
    height: 2rem;
    border-bottom: 2px solid #1e98fd;
  }
`;

export default ScholarList;
