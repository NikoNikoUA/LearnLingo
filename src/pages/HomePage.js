import {
  HomePageContainer,
  MainTextContainer,
  Img,
  MainHeader,
  Text,
  Btn,
  StatsContainer,
  StatsList,
  StatsListContainer,
  FirstP,
  SecondP,
} from "../CommonStyles.styled";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <MainTextContainer>
          <MainHeader>
            Unlock your potential with the best <span>language</span> tutors
          </MainHeader>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <Btn type="button">Get started</Btn>
        </MainTextContainer>
        <div>
          <picture>
            <source
              srcSet="
                     /LearnLingo/project-pics/Orange/blockorange.jpg 1x,
                    /LearnLingo/project-pics/Orange/blockorange@2x.jpg 2x
                  "
              media="(min-width: 320px)"
              type="image/jpg"
            />
            <Img
              src="/LearnLingo/project-pics/Orange/blockorange.jpg"
              alt="worker at pc"
            />
          </picture>
        </div>
      </HomePageContainer>
      <StatsContainer>
        <StatsListContainer>
          <StatsList>
            <li>
              <FirstP>32,000+</FirstP>
              <SecondP>Experienced tutors</SecondP>
            </li>
            <li>
              <FirstP>300,000+</FirstP>
              <SecondP>5-star tutor reviews</SecondP>
            </li>
            <li>
              <FirstP>120+</FirstP>
              <SecondP>Subjects taught</SecondP>
            </li>
            <li>
              <FirstP>200+</FirstP>
              <SecondP>Tutor nationalities</SecondP>
            </li>
          </StatsList>
        </StatsListContainer>
      </StatsContainer>
    </>
  );
};

export default HomePage;
