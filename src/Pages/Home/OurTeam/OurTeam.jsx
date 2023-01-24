import React from "react";

import {
  MemberContainer,
  MemberDetails,
  MemberImage,
  MemberName,
  MemberPosition,
  OurTeamAdvisorMembers,
  OurTeamContainer,
  OurTeamDirectorsMembers,
  OurTeamHeader,
  OurTeamMembers,
  OurTeamMembersHeader,
} from "./OurTeamStyles";
import pic from "../../../Assets/Qhelile Ntombikayise Bhebhe.png";


const OurTeam = () => {
  const directors = [
    {
      name: "Qhelile Ntombikayise Bhebhe",
      position: "EXECUTIVE DIRECTOR",
      image: pic,
    },
    {
      name: "Strength-Given Ncube",
      position: "INFORMATION AND TECHNOLOGY",
      image: pic,
    },
  ];

  const advisors = [
    {
      name: "Sithulisiwe Dube-Bhebhe",
      position: "BOARD MEMBER",
      image: pic,
    },
    {
      name: "Saymore Ngonidzashe Kativu",
      position: "AGRI-BUSINESSES",
      image: pic,
    },
    {
      name: "Mnqobi Mkandla",
      position: "FINANCE AND BUSINESS DEVELOPMENT",
      image: pic,
    },
    {
      name: "Banele Dube",
      position: "LEGAL ADVISOR",
      image: pic,
    },
  ];

  return (
    <OurTeamContainer>
      <div className="container">
      <OurTeamHeader>Our Team</OurTeamHeader>
      <OurTeamMembers>
        <OurTeamMembersHeader>Board Of Directors</OurTeamMembersHeader>
        <OurTeamDirectorsMembers>
          {directors.map((director) => (
            <MemberContainer key={director.name}>
              <MemberImage src={director.image} />
              <MemberDetails>
                <MemberName>{director.name}</MemberName>
                <MemberPosition>{director.position}</MemberPosition>
              </MemberDetails>
            </MemberContainer>
          ))}
        </OurTeamDirectorsMembers>
      </OurTeamMembers>
      <OurTeamMembers>
        <OurTeamMembersHeader>Board Of Advisors</OurTeamMembersHeader>
        <OurTeamAdvisorMembers>
          {advisors.map((advisor) => (
            <MemberContainer key={advisor.name}>
              <MemberImage src={advisor.image} />
              <MemberDetails>
                <MemberName>{advisor.name}</MemberName>
                <MemberPosition>{advisor.position}</MemberPosition>
              </MemberDetails>
            </MemberContainer>
          ))}
        </OurTeamAdvisorMembers>
      </OurTeamMembers>
      </div>
    </OurTeamContainer>
  );
};

export default OurTeam;
