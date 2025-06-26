import { useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Images of the event cover pictures
import launchWeekImage from "../images/eventsCoverPic/launchWeek.jpg";
import pitchForImpact from "../images/eventsCoverPic/pitchForImpact.jpg";
import projectWeekAndShowcase from "../images/eventsCoverPic/projectWeekAndShowcase.jpg";

const events = [
  {
    title: "Pitch for Impact Case Challenge",
    link: "https://www.facebook.com/share/18GECyQyGp/",
    image: pitchForImpact,
  },
  {
    title: "Project Week & Showcase 2025",
    link: "https://fb.me/e/aZwJn0xIK",
    image: projectWeekAndShowcase,
  },
  {
    title: "Launch Week",
    link: "https://www.facebook.com/events/1091196176028342",
    image: launchWeekImage,
  }
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
      setCurrIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
      setFade(false);
    }, 250);

  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
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
      <Link to={events[currIndex].link} target="_blank" rel="noopener noreferrer">
        <Card
          sx={{
            width: {
              xs: '70vw', 
              sm: '80vw',
              md: 500,
            },
            overflow: "hidden",
            borderRadius: 5,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            position: "relative",
            margin: "0 2vw",
            transition: "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.8)",
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