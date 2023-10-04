import styled from "styled-components";
import Link from "next/link";

const MainBannerButton = () => {
  return (
    <Link href={"https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120"}>
      <ButtonContainer>
        <p>BeACE 운영계획 바로가기</p>
      </ButtonContainer>
    </Link>
  );
};

const ButtonContainer = styled.div`
  width: 18rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.25rem;
  background-color: #0096c8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
  }
`;

export default MainBannerButton;
