import { useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Images of the event cover pictures
const startupNetworkingNightImage =
  "/images/eventsCoverPic/startupNetworkingNight.jpg";
const projectShowcaseImage = "/images/eventsCoverPic/projectShowcase.jpg";
const medsciXcaliXEnactusPubcrawl =
  "/images/eventsCoverPic/Medsci_Cali_Enactus_Pubcrawl.jpg";
const social_impact_mentoring =
  "/images/eventsCoverPic/enactus_social_impact_mentoring.jpg";
const pubcrawl_market_July_2025 =
  "/images/eventsCoverPic/ENACTUS_pubcrawl_market_Jully_2025.jpg";
const director_recruitment_2026 =
  "/images/eventsCoverPic/Enactus_event_director_recruimtent_2026.jpg";

const events = [
  {
    title: "Director Recruitment",
    link: "https://www.facebook.com/share/1F6cCpDtHn/",
    image: director_recruitment_2026,
  },
  {
    title: "Social Impact Mentoring",
    link: "https://www.facebook.com/events/1500237394292332/",
    image: social_impact_mentoring,
  },
  {
    title: "Cops N’ Robbers Pubcrawl 2025",
    link: "https://www.facebook.com/share/1Z19f5osvq/",
    image: pubcrawl_market_July_2025,
  },
  {
    title: "Start-Up Networking Night",
    link: "https://www.facebook.com/events/519442017819568",
    image: startupNetworkingNightImage,
  },
  {
    title: "Project Showcase",
    link: "https://www.facebook.com/events/2729108283942901",
    image: projectShowcaseImage,
  },
  {
    title: "MEDSCISOC X ENACTUS X CALISOC Pubcrawl",
    link: "https://fb.me/e/7JDXk8Tju",
    image: medsciXcaliXEnactusPubcrawl,
  },
];

export default function HomeEventsCarousel() {
  const [currIndex, setCurrIndex] = useState(0);
  const [isFade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % events.length);
      setFade(false);
    }, 250);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrIndex(
        (prevIndex) => (prevIndex - 1 + events.length) % events.length,
      );
      setFade(false);
    }, 250);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <ArrowBackRounded
        onClick={handlePrev}
        sx={{
          fontSize: 50,
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.3)",
          },
        }}
      />
      <Link
        to={events[currIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card
          sx={{
            width: {
              xs: "70vw",
              sm: "80vw",
              md: 500,
            },
            overflow: "hidden",
            borderRadius: 5,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            position: "relative",
            margin: "0 2vw",
            transition:
              "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.8)",
            opacity: isFade ? 0.3 : 1,
            "&:hover": {
              transform: "scale(1.06)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt={events[currIndex].title}
            image={events[currIndex].image}
            sx={{ objectFit: "contain" }}
          />
        </Card>
      </Link>
      <ArrowForwardRounded
        onClick={handleNext}
        sx={{
          fontSize: 50,
          cursor: "pointer",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.3)",
          },
        }}
      />
    </Box>
  );
}
