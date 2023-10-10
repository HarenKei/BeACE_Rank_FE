import styled from "styled-components";
import { useEffect, useState } from "react";


const ListTable = ({head , list} : {head : string[], list : React.ReactNode[][]} ) => {
  const [isMounted, setMounted] = useState(false);

  console.log(list);

  useEffect(() => {
    setMounted(true);
  }, []); // Prevent hydration error

  return (
    isMounted && (
      <TableStyle>
        <TheadStyle>
          {head.map((thData, index) => (
            <th key={index}>{thData}</th>
          ))}
        </TheadStyle>
        <TbodyStyle>
          {list.map((row, index) => (
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

export default ListTable;
