import { useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Images of the event cover pictures
import launchWeekImage from "../images/eventsCoverPic/launchWeek.jpg";
import pitchForImpact from "../images/eventsCoverPic/pitchForImpact.jpg";
import projectWeekAndShowcase from "../images/eventsCoverPic/projectWeekAndShowcase.jpg";

// keeping these events for now because there aren't any upcoming ones, but will change later
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

export default function EventsEventsCarousel() {
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
    <>
      <Box display="flex" flexDirection="row" alignItems="center">
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
              width: 500,
              height: 277,
              borderRadius: 5,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              position: "relative",
              margin: "0 50px",
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
      <div className="mt-6 flex gap-x-3">
        {events.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === currIndex ? 'bg-[#A8A8A8]' : 'bg-[#E8E8E8]'}`}></span>
        ))}
      </div>
    </>
  );
}