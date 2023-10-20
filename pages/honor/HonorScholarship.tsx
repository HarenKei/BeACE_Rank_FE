import styled from "styled-components";
import ListTable from "@/src/Common/ListTable";
import ScholarList from "@/src/Common/ScholarList";
import DropDown from "./DropDown";

const HonorScholarship = () => {
  return(
    <>
      <DropDownContainer>
        <DropDown/>
      </DropDownContainer>
      <ScholarList/>
    </>
  )
};

const DropDownContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default HonorScholarship;