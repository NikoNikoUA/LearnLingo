import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const CardContainer = styled.div`
  padding: 24px;
  border-radius: 24px;
  position: relative;
  background-color: #f8f8f8;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;

  margin-bottom: 32px;
`;

export const ImgContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  border: 3px solid ${(props) => props.theme.colors.themeHoverOrange};
  border-radius: 100px;

  background-image: white;
`;

export const Img = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SvgOnline = styled.svg`
  position: absolute;
  top: 45px;
  left: 111px;
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const ContainerWithHeart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 64px;
  margin-bottom: 8px;
`;

export const Item = styled.p`
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};

  display: flex;
  align-items: center;

  &:not(:last-child) {
    &:after {
      content: "";
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-left: 16px;
    }
  }
`;

export const ContainerWithSvg = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  &:not(:last-child) {
    &:after {
      content: "";
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-left: 16px;
    }
  }
`;

export const SpanPrice = styled.span`
  color: #38cd3e;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 32px;
`;
export const Languages = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textHoverColor};
`;

export const ContainerTeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ContainerSpeaks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

export const Info = styled.p`
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ReadMoreBtn = styled.button`
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(props) => props.theme.colors.textColor};
  background-color: #f8f8f8;
  border: none;
  margin-bottom: 32px;
`;

export const Experience = styled.p`
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 32px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const RevieverRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const ReviewerRatingNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ReviewComment = styled.p`
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ReviewerImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const LevelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;

  border-radius: 35px;
  border: none;
  padding: 8px 12px;
  min-width: 110px;
  min-height: 32px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.14286;
  color: ${(props) => props.theme.colors.textColor};

  background-color: ${(props) =>
    props.active ? props.theme.colors.themeOrange : "white"};
  transition: all 250ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeOrange};
  }
`;

export const LevelContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 32px;
`;

export const TrialBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;

  border-radius: 12px;
  border: none;
  padding: 16px 48px;
  min-width: 232px;
  height: 60px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(props) => props.theme.colors.textColor};

  background: ${(props) => props.theme.colors.themeOrange};

  transition: all 250ms ease;

  &:hover {
    background: ${(props) => props.theme.colors.themeHoverOrange};
    color: ${(props) => props.theme.colors.textHoverColor};
  }
`;

export const CustomModal = styled(Modal)`
  overflow-y: scroll;
  position: relative;
  border-radius: 12px;
  max-width: 599px;
  height: 90%;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 64px;
  border: 1px solid ${(props) => props.theme.colors.themeOrange};
`;
