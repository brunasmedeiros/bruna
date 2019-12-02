import React from "react";
import Container from "./Container";
import Header from "./Header";
import ContactFloatEmail from "./ContactFloatEmail";
import AboutSection from "./AboutSection";
import CareerSection from "./CareerSection";
import ProjectSection from "./ProjectSection";

export default function Content(){
  return (
    <Container>
      <div className="scrollable--content">
        <Header/>
        <AboutSection/>
        <CareerSection/>
        <ProjectSection/>
        <ContactFloatEmail />
      </div>
    </Container>
  )
}