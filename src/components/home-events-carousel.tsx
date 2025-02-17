import { useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const oWeekImage = "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/476229220_122121672578607827_495259889061321110_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=75d36f&_nc_ohc=3wFz0zQxaZMQ7kNvgEurH_0&_nc_oc=AdihBjLQO6Vv6XxsJmYp_98dneI7R-LJb7S6mqZtkDj7PCR3p4DyVDHS5Mh5hG4_gyo&_nc_zt=23&_nc_ht=scontent.fsyd3-1.fna&_nc_gid=AAVm2pcF-cwY8ElaYAK2UBo&oh=00_AYDy_cAAkEh7wGI0NIyfm9kvExh4YvmGxE12xM58yPzivw&oe=67B8DBCF";
const directorRecruitmentImage = "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/475761069_590907987195402_7232662635612807952_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=75d36f&_nc_ohc=VN-zWsrTz7kQ7kNvgGBfsgC&_nc_oc=Adil9KLPLS-7F6RpR7EXnAzshhcWg0RDpt5JbW2eCONOFSOd6GS_r_SwWVnwgyw_bQA&_nc_zt=23&_nc_ht=scontent.fsyd3-1.fna&_nc_gid=ArvPpUuRf-q4I61SaTFe0If&oh=00_AYCQpQJ8PYjrqrX7tNJD7PZcUCIx72yjHHERBdfELkSU2w&oe=67B8EA66";
const launchWeekImage = "https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/480322642_122122994588607827_6406124203658938237_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=75d36f&_nc_ohc=HuFUJazQIgYQ7kNvgEqnvWW&_nc_oc=AdiyzpTeAwGfQSOi8d5Fqdxk0wQyCwXytxKqJjyFxybQYfT4TKDrtu777V51o-wAAdE&_nc_zt=23&_nc_ht=scontent.fsyd3-1.fna&_nc_gid=AI-UwbyWO7y5yArtiqTves0&oh=00_AYDdDj9DvSAFbaNp_YE2u0YALzCOgjHGpaQb0lvAoT15BA&oe=67B910A0";

const events = [
  {
    title: "Launch Week",
    link: "https://www.facebook.com/events/1091196176028342",
    image: launchWeekImage,
  },
  {
    title: "O-Week Event",
    link: "https://www.facebook.com/events/480811088409092",
    image: oWeekImage,
  },
  {
    title: "2025 Director Recruitment",
    link: "https://www.facebook.com/events/400736763044830/",
    image: directorRecruitmentImage,
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
      setCurrIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
      setFade(false);
    }, 250);

  };

  return (
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
  );
}