import styled from "styled-components";

const MainIntro = () => {
  return (
    <MainIntroContainer>
      <IntroContainer>
        <Contents>
          <h1>BeACE, Already ACE</h1>
          <p>
            BeACE RANK는 대림대학교 학생 자기주도 역량개발 비교과 통합프로그램
            BeACE를 학생들이 더욱 적극적으로 참여하여 대림대학교의 인재상, ACE가
            될 수 있도록 태어난 랭킹 커뮤니티입니다.
            <br />
            <br />
            BeACE 점수를 기반으로 사나이 클럽만의 깊은 고민으로 해석해 낸
            레이팅을 통해 티어를 매기고, 학생들간의 랭킹을 매겨 대림대학교
            학생들 간의 건전한 경쟁을 유도합니다.
            <br />
            <br />
            <span>
              Active - 실천형 인재 | Creative - 문제해결형 인재 | Ethical -
              협업형 인재
            </span>
          </p>
        </Contents>

        <Contents>
          <h1>값진 노력, 값진 명예</h1>
          <p>
            BeACE 점수를 100점 이상 모으면 졸업학기 1학점, 150점 이상 모으면
            총장님의 시상이 있다는 사실, 알고 계셨나요?
            <br />
            <br />
            BeACE RANK에서는 100점 이상, 150점 이상의 학생들을 ACE 랭킹으로 따로
            모아서 학생들의 값진 노력을 인정해주고자 했습니다.
            <br />
            <br />
            그들은 다른 학생들과 총장님에게 인정받는 대림대학교의 자랑스러운
            인재들입니다.
          </p>
        </Contents>

        <Contents>
          <h1>대학생활을 알차게</h1>
          <p>
            대림대학교의 각 부처에서는 학생심리상담, 취업상담 등 학생들의 고민을
            폭넓게 들어주고 있고, 학생들이 모여 더 넓은 세계로 나아갈 수 있도록
            많은 도움을 보내고 있습니다. BeACE 점수는 덤이죠.
            <br />
            <br />
            대림대학교 학생들의 값진 등록금으로 마련된 알찬 활동들로 짧 다면
            짧고, 길다면 긴 대학생활을 꽉 채워보면 어떨까요?
            <br />
            <br />
            BeACE RANK에서 대학 생활을 채울 수 있는 보기 쉽게 정리된 알찬
            활동들을 확인하세요
          </p>
        </Contents>
      </IntroContainer>
    </MainIntroContainer>
  );
};

const MainIntroContainer = styled.div`
  width: 1200px;
  margin-top: 3rem;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Contents = styled.div`
  width: 60%;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -0.07rem;
  }

  p {
    margin-top: 3rem;
    font-size: 1rem;
    font-weight: 400;

    object-fit: fill;
    word-break: keep-all;

    span {
      font-weight: 900;
    }
  }
`;

export default MainIntro;
