import styled from "styled-components";
import Menu from "./Menu";
import { useEffect } from "react";

interface Contents {
  conTitle: string;
  conLink: string;
}

interface Data {
  title: string;
  contents: Array<Contents>;
}

const menuArray = [
  {
    title: "BeACE?",
    contents: [
      {
        conTitle: "BeACE 안내",
        conLink: "https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120",
      },
      {
        conTitle: "BeACE QnA",
        conLink: "https://naver.com",
      },
    ],
  },
  {
    title: "로드맵",
    contents: [
      {
        conTitle: "BeACE 전체 프로그램",
        conLink: "https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120",
      },
      {
        conTitle: "Basic 프로그램",
        conLink: "https://naver.com",
      },
      {
        conTitle: "Educational 프로그램",
        conLink: "https://naver.com",
      },
      {
        conTitle: "Active 프로그램",
        conLink: "https://naver.com",
      },
      {
        conTitle: "Creative 프로그램",
        conLink: "https://naver.com",
      },
      {
        conTitle: "Ethical 프로그램",
        conLink: "https://naver.com",
      },
    ],
  },
  {
    title: "랭킹",
    contents: [
      {
        conTitle: "전체 랭킹",
        conLink: "https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120",
      },
      {
        conTitle: "학과별 랭킹",
        conLink: "https://naver.com",
      },
      {
        conTitle: "학년별 랭킹",
        conLink: "https://naver.com",
      },
      {
        conTitle: "우리학과 랭킹",
        conLink: "https://naver.com",
      },
      {
        conTitle: "랭킹 시스템 소개",
        conLink: "https://naver.com",
      },
    ],
  },
  {
    title: "명예의 전당",
    contents: [
      {
        conTitle: "1학점 명예의 전당",
        conLink: "https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120",
      },
      {
        conTitle: "총장상 명예의 전당",
        conLink: "https://naver.com",
      },
    ],
  },
  {
    title: "기타",
    contents: [
      {
        conTitle: "개인정보 처리방침",
        conLink: "https://job.daelim.ac.kr/cms/FrCon/index.do?MENU_ID=120",
      },
    ],
  },
];

const MainMenu = () => {

  return(
    <MainMenuContainer>
      <MenuContainer>
        {menuArray.map((item : Data) => (
          <Menu key={item.title} title={item.title} contents={item.contents}/>
        ))}
      </MenuContainer>
    </MainMenuContainer>
  );
};

const MainMenuContainer = styled.div`
  width: 1200px;
  border-top: 0.15rem dashed #1e98fd;
  margin-bottom: 6rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;
  
`;

export default MainMenu;