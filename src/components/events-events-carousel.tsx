import { useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface EventsData {
  title: string,
  link: string,
  image: any
}

import ENACTUS_pubcrawl_market_July_2025 from "../images/eventsCoverPic/ENACTUS_pubcrawl_market_Jully_2025.jpg";
import enactus_social_impact_mentoring from "../images/eventsCoverPic/Enactus_Social_Impact_Mentoring.jpg";

const events: EventsData[] = [
    {
    title: "Cops N’ Robbers Pubcrawl 2025",
    link: "https://www.facebook.com/share/1Z19f5osvq/",
    image: ENACTUS_pubcrawl_market_July_2025 
  },
    { 
      title: "Enactus Social Impact Mentoring",
      link: "https://www.facebook.com/events/1500237394292332/",
      image: enactus_social_impact_mentoring
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

  const handleJump = (position: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrIndex(position);
      setFade(false);
    }, 250);
  }

  return (
    <>
      {events.length === 0 ? (
        <h3 className="text-xl mb-6">
          No upcoming events
        </h3>
      ) : (
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
                  width: {
                    xs: '70vw',
                    sm: '80vw',
                    md: 500,
                  },
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
              <span key={i} className={`w-3 h-3 rounded-full ${i === currIndex ? 'bg-[#A8A8A8]' : 'bg-[#E8E8E8]'}`} onClick={() => handleJump(i)}></span>
            ))}
          </div>
        </>
      )}
    </>
  );
}