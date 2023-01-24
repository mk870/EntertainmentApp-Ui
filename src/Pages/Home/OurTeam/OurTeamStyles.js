import styled from "styled-components";
import { mainColor } from "../../../components/CssVariables/Index";

export const OurTeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
`;

export const OurTeamHeader = styled.span`
  font-size: 35px;
  font-family: "Quicksand", sans-serif;
  color: ${mainColor};
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
export const OurTeamMembers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
  width: 100%;
`;
export const OurTeamMembersHeader = styled.span`
  font-size: 25px;
  font-family: "Quicksand", sans-serif;
  color: ${mainColor};
  font-weight: 900;
  @media (max-width: 700px) {
    font-size: 17px;
  }
`;

export const OurTeamDirectorsMembers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 35px;
  width: 60%;
  @media (max-width: 920px) {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-gap: 30px;
    width: auto;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 370px) {
    grid-gap: 20px;
  }
`;
export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  height: 290px;
  @media (max-width: 600px) {
    height: 240px;
    width: 160px;
  }
  @media (max-width: 370px) {
    height: 240px;
    width: 140px;
  }
`;
export const OurTeamAdvisorMembers = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 30px;
  place-items: center;
  width: 100%;
  margin-top: 35px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 420px) {
    place-items: auto;
    width: auto;
  }
  @media (max-width: 370px) {
    grid-gap: 20px;
  }
`;
export const MemberImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }
`;
export const MemberDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
  text-align: center;
`;

export const MemberName = styled.span`
  font-weight: bold;
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;

export const MemberPosition = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 7px;
  @media (max-width: 370px) {
    font-size: 13px;
  }
`;
