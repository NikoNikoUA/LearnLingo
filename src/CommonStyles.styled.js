import styled from "styled-components";

export const Container = styled.div`
  padding: 0 64px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

// ================= Home Page =================

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const MainTextContainer = styled.div`
  border-radius: 30px;
  width: 720px;
  min-height: 530px;
  background-color: #f8f8f8;
  padding: 98px 64px;
`;
export const Img = styled.img`
  max-width: 568px;
  max-height: 530px;
`;

export const MainHeader = styled.h1`
  font-weight: 500;
  font-size: 48px;

  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};

  max-width: 548px;
  min-height: 112px;
  margin-bottom: 32px;

  & > span {
    font-style: italic;
    font-weight: 400;
    background-color: ${(props) => props.theme.colors.themeOrange};
    border-radius: 4px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.375;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};

  max-width: 471px;
  min-height: 66px;

  margin-bottom: 64px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 12px;
  padding: 16px 88px;
  max-width: 267px;
  height: 60px;
  border: none;

  background: ${(props) => props.theme.colors.themeOrange};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(props) => props.theme.colors.textColor};
  transition: all 250ms ease;

  &:hover {
    background: ${(props) => props.theme.colors.themeHoverOrange};
    color: ${(props) => props.theme.colors.textHoverColor};
  }
`;

export const StatsContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const StatsListContainer = styled.div`
  position: relative;
`;

export const StatsList = styled.ul`
  padding: 40px 122px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%23F4C550FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 30px;

  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const FirstP = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};
`;

export const SecondP = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
`;

// ================================ Teachers ==============================

export const TeachersContainer = styled.section`
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
