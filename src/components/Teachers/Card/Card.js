import {
  CardContainer,
  ImgContainer,
  Img,
  SvgOnline,
  StatsContainer,
  Item,
  ContainerWithSvg,
  Name,
  Span,
  Languages,
  ContainerSpeaks,
  Info,
  ContainerTeacherInfo,
  ReadMoreBtn,
  Experience,
  ReviewContainer,
  RevieverRatingContainer,
  ReviewerInfo,
  ReviewerRatingNumber,
  ReviewComment,
  ReviewerImg,
  LevelBtn,
  LevelContainer,
  SpanPrice,
  TrialBtn,
  CustomModal,
} from "./Card.styled";
import icons from "../../../sprite.svg";
import { useEffect, useRef, useState } from "react";
import { TrialLessonForm } from "../../Forms/TrialLessonForm/TrialLessonForm";

// import { HeartIcon } from "../../../../src/components/Hearticon/HeartIcon";

export const Card = ({ teacher }) => {
  const [readMore, setReadMore] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    // id,
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    levels,
    experience,
    reviews,
  } = teacher;

  const lang = languages.map((language) => language).join(", ");
  const condition = conditions.map((condition) => condition).join(" ");
  const ref = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const InfoStyles = {
    overflow: "hidden",
    display: "-webkit-box",
    whiteSpace: "break-spaces",
    maxHeight: "0",
  };

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight !== ref.currentClientHeight);
    }
  }, []);

  return (
    <CardContainer>
      <div>
        <ImgContainer>
          <Img src={avatar_url} alt="teacher" />
        </ImgContainer>
        <SvgOnline width="12px" height="12px">
          <use href={`${icons}#icon-online`}></use>
        </SvgOnline>
      </div>
      <div>
        <StatsContainer>
          <ContainerWithSvg>
            <svg width="16px" height="16px">
              <use href={`${icons}#icon-book`}></use>
            </svg>
            <Item>Lessons online</Item>
          </ContainerWithSvg>
          <Item>Lessons done: {lessons_done}</Item>
          <ContainerWithSvg>
            <svg width="16px" height="16px">
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <Item>Rating: {rating}</Item>
          </ContainerWithSvg>
          <Item>
            Price / 1 hour:&nbsp;<SpanPrice>{price_per_hour}$</SpanPrice>
          </Item>
        </StatsContainer>
        {/* <HeartIcon teacher={teacher} index={index} /> */}
        <Name>
          {name} {surname}
        </Name>
        <ContainerTeacherInfo>
          <ContainerSpeaks>
            <Span>Speaks:</Span>
            <Languages>{lang}</Languages>
          </ContainerSpeaks>
          <Info>
            <Span>Lesson info:</Span> {lesson_info}
          </Info>
          <Info>
            <Span>Conditions: </Span>
            {condition}
          </Info>
        </ContainerTeacherInfo>
        <div style={readMore ? null : InfoStyles} ref={ref}>
          <Experience>{experience}</Experience>
          {reviews.map((review) => (
            <ReviewContainer>
              <ReviewerInfo>
                <div>
                  <ReviewerImg
                    src="/LearnLingo/project-pics/avatar.png"
                    alt="reviewer"
                  />
                </div>
                <div>
                  <Span>{review.reviewer_name}</Span>
                  <RevieverRatingContainer>
                    <svg width="16px" height="16px">
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                    <ReviewerRatingNumber>
                      {review.reviewer_rating}.0
                    </ReviewerRatingNumber>
                  </RevieverRatingContainer>
                </div>
              </ReviewerInfo>
              <div>
                <ReviewComment>{review.comment}</ReviewComment>
              </div>
            </ReviewContainer>
          ))}
        </div>
        {showReadMore && (
          <ReadMoreBtn type="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "Read more..."}
          </ReadMoreBtn>
        )}

        <div>
          <LevelContainer>
            {levels.map((level, id) => (
              <li key={id}>
                <LevelBtn type="button">#{level}</LevelBtn>
              </li>
            ))}
          </LevelContainer>
          {readMore ? (
            <TrialBtn type="button" onClick={openModal}>
              Book trial lesson
            </TrialBtn>
          ) : null}
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Trial Lesson Modal"
      >
        <TrialLessonForm teacher={teacher} closeModal={closeModal} />
      </CustomModal>
    </CardContainer>
  );
};
