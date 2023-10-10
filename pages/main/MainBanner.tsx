import styled from "styled-components";
import MainBannerButton from "./MainBannerButton";

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <BgContainer>
        <ContentsContainer>
          <Title>BeACE RANK</Title>
          <SubTitle>내가 설계하고 주도하는 나만의 경쟁력.</SubTitle>
          <Intro>
            <p>
              BeACE RANK는 대림대학교의 학생 자기주도 역량개발 비교과 통합
              프로그램 BeACE를 위해 태어난 랭킹 커뮤니티입니다.
            </p>

            <p>
              대림대학교 학생들은 자신의 BeACE 점수를 기반으로 한 랭킹과 티어
              시스템을 통해 한층 더 흥미있게 BeACE 프로그램에 참여할 수
              있습니다.
            </p>
          </Intro>
          <MainBannerButton />
        </ContentsContainer>
      </BgContainer>
    </MainBannerContainer>
  );
};

const MainBannerContainer = styled.div`
  width: 100%;
  height: 580px;

  background-image: url("https://cdn.news.unn.net/news/photo/202111/518240_320941_5119.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: 50%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 6.5em;
  letter-spacing: -0.3rem;
  background: linear-gradient(94deg, #1e98fd, #ff00f7);
  color: transparent;
  -webkit-background-clip: text;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.07rem;
`;

const Intro = styled.div`
  width: 60%;
  margin: 1.5rem 0rem 1.5rem 0rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1rem;

  p {
    margin: 1rem 0rem 1rem 0rem;
    object-fit: fill;
    word-break: keep-all;
  }
`;

export default MainBanner;
