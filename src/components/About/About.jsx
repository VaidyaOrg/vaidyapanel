import React from "react";
import Typography from "@mui/material/Typography";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "react-lottie";
// import ImageCarousel from './ImageCarousel';

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      "https://lottie.host/3515fc4e-24c4-4ae0-b01a-55f3110d3cab/JRloRXmLIk.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white ml-5 mr-5 pb-6 pt-10 rounded-md pl-20 pr-20">
      {/* Image Carousel */}
      {/* <ImageCarousel /> */}
      <p className="text-2xl font-semibold text-center">
        About{" "}
        <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
          Sushrut
        </span>
      </p>
      <br />

      <Typography>
        Welcome to the Health Center of IIT Bhilai, your dedicated resource for
        health and wellness on campus. Our center is committed to promoting the
        well-being of our students, faculty, and staff through comprehensive
        healthcare services and support. We understand that a healthy body and
        mind are essential for academic success and personal growth. That's why
        our Health Center offers a wide array of services tailored to meet the
        diverse needs of our campus community. From routine check-ups to
        specialized care, we strive to provide accessible and compassionate
        healthcare to all. At the Health Center, we take a holistic approach to
        healthcare, recognizing the interconnectedness of physical, mental, and
        emotional well-being. Our team of experienced healthcare professionals
        is dedicated to addressing not just the symptoms, but also the
        underlying factors contributing to your health concerns.
      </Typography>
      <br />
      {/* Heading */}

      {/* Paragraph */}
      <Typography>
        In addition to primary care services, our Health Center provides mental
        health support to help students navigate the challenges of university
        life. Whether you're experiencing stress, anxiety, depression, or simply
        need someone to talk to, our counselors are here to provide confidential
        support and guidance. Furthermore, we believe that education is key to
        empowering individuals to take control of their health. That's why we
        offer health education programs and workshops aimed at equipping our
        campus community with the knowledge and skills to make informed
        decisions about their well-being. Whether you're seeking medical care,
        emotional support, or health education, the Health Center of IIT Bhilai
        is here to serve you. Your health is our priority, and we're committed
        to helping you thrive academically, professionally, and personally.
        Visit us today and take the first step towards a healthier, happier you.
      </Typography>

      {/* Flex box with logos */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Player
          src="https://lottie.host/3515fc4e-24c4-4ae0-b01a-55f3110d3cab/JRloRXmLIk.json"
          className="player h-[12vw]"
          autoplay
          loop 
        />
        {/* <Lottie options={defaultOptions} height={400} width={400} />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://lottie.host/3515fc4e-24c4-4ae0-b01a-55f3110d3cab/JRloRXmLIk.json"
          background="##FFFFFF"
          speed="1"
          loop
          controls
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player> */}
        
        <Player
          src="https://lottie.host/04862d18-ccb0-44b0-ae99-68ada65f1e00/XQauxzM1C2.json"
          className="player h-[12vw]"
          autoplay
          loop 
        />
      </div>
    </div>
  );
};

export default About;
