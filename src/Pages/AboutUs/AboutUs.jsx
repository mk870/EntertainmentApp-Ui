import React from "react";

import {
  AboutUsContainer,
  AboutUsWrapper,
  AboutUsHeaderText,
  AboutUsText,
  IntroWrapper,
  Svg,
  AboutUsGridContainer,
  AboutUsGridItem,
  AboutUsGridSvg,
  AboutUsGridHeaderText,
  AboutUsGridDateText,
  AboutUsGridInfo,
  AboutUsGridWrapper,
} from "./AboutUsStyles";
import aboutUsSvg from "../../Assets/about-us-2.png";
import newsSvg from "../../Assets/news2.png";
import consultancySvg from "../../Assets/consultancy.png";
import mediaSvg from "../../Assets/media.png";
import clothingSvg from "../../Assets/clothing2.jpg";
import trainingSvg from "../../Assets/training4.jpg";

const AboutUs = () => {
  const Services = [
    {
      heading:'1. Ensimini News',
      startDate: 'June 2023',
      media: 'Blogging on all social media platforms',
      info: '(All things agriculture)',
      svg: newsSvg,
    },
    {
      heading:'2.	Ensimini Media',
      startDate: 'June 2023',
      media: 'YouTube and Podcasting',
      info: '(Having conversations with farmers, students and different professionals in the industry with the hope that these stories will spark interest and inspire people)',
      svg: mediaSvg,
    },
    {
      heading:'3.	Ensimini Protective Clothing',
      startDate: 'March 2023, however we start sourcing clothing ASAP',
      media: '',
      info: '(Selling all protective gear and stationary needed on and off farms)',
      svg: clothingSvg,
    },
    {
      heading:'4.	Ensimini Consultancy Services',
      startDate: 'January 2024',
      media: '',
      info: 'Create formal and informal opportunities to support farmers and aspiring farmers, ensuring that they are productive, profitable and sustainable.',
      svg: consultancySvg,
    },
    {
      heading:'5.	Ensimini Agricultural Trainings',
      startDate: 'January 2024',
      media: '',
      info: 'School of Agriculture that provides knowledge on different aspects of Agriculture for a fee.',
      svg: trainingSvg,
    },
  ]
  return (
    <AboutUsContainer>
      <AboutUsWrapper>
      <AboutUsHeaderText>About Us</AboutUsHeaderText>
      </AboutUsWrapper>
      <IntroWrapper>
        <Svg src={aboutUsSvg} alt="svg" />
        <AboutUsText>
          Ensimini Agri-Connections believes that there are lots of stories to
          tell that are often over looked by society. Farmers, particularly
          young farmers should be able to thrive in the agricultural sector
          provided there is institutional and financial support as well as
          mentorship and support. We will work to increase the efficiency along
          the agricultural value chain, bridge knowledge gaps, increase
          productivity and profits and also Strengthen young farmers and leaders
          in the agricultural industry. <br /> <br />
          Ensimini is still on the pipeline, we
          plan to start small and then grow big. The dream is to be an excel
          lent digital agricultural company through introducing innovative
          technologies and linking the value chain through back ward and forward
          linkages (agro-based company) as this can boost productivity, help to
          generate on and off-farm employment opportunities, and increase export
          earnings. After months of contemplating the direction of this brand.
          We have decided to take a plunge and register as an official business.
          Once the registration is done we'll then start operating in the five
          following sectors: Ensimini News, Ensimini Media, Ensimini Protective
          Clothing, Ensimini Consultancy Services and Ensimini Agricultural
          Trainings.
        </AboutUsText>
      </IntroWrapper>
      <AboutUsGridContainer>
        {Services.map(service => (
          <AboutUsGridWrapper key={service.heading}>
            <AboutUsGridHeaderText>{service.heading}</AboutUsGridHeaderText>
            <AboutUsGridItem>
              <AboutUsGridSvg src={service.svg} alt="svg"/>
              <AboutUsWrapper>
                <AboutUsGridDateText>{service.startDate}</AboutUsGridDateText>
                {service.media !== '' && <AboutUsGridInfo>{service.media}</AboutUsGridInfo>}
                <AboutUsGridInfo>{service.info}</AboutUsGridInfo>
              </AboutUsWrapper>
            </AboutUsGridItem>
          </AboutUsGridWrapper>
        ))}
      </AboutUsGridContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
