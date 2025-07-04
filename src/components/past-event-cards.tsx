import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';
import { Link } from "react-router-dom";

// Images of the event cover pictures
import launchWeekImage from "../images/eventsCoverPic/launchWeek.jpg";
import pitchForImpact from "../images/eventsCoverPic/pitchForImpact.jpg";
import projectWeekAndShowcase from "../images/eventsCoverPic/projectWeekAndShowcase.jpg";
import wingsForLifeImage from "../images/eventsCoverPic/wingsForLife.jpg";
import startupNetworkingNightImage from "../images/eventsCoverPic/startupNetworkingNight.jpg";
import projectShowcaseImage from "../images/eventsCoverPic/projectShowcase.jpg";
import medsciXcaliXEnactusPubcrawl from "../images/eventsCoverPic/Medsci_Cali_Enactus_Pubcrawl.jpg";
import boulderingNight from "../images/eventsCoverPic/boulderingNight.jpg";

const events = [
  {
    id: 1,
    title: "Pitch for Impact Case Challenge",
    link: "https://www.facebook.com/share/18GECyQyGp/",
    image: pitchForImpact,
  },
  {
    id: 2,
    title: "Project Week & Showcase 2025",
    link: "https://fb.me/e/aZwJn0xIK",
    image: projectWeekAndShowcase,
  },
  {
    id: 3,
    title: "Launch Week",
    link: "https://www.facebook.com/events/1091196176028342",
    image: launchWeekImage,
  },
  {
    id: 4,
    title: "Start-Up Networking Night",
    link: "https://www.facebook.com/events/519442017819568",
    image: startupNetworkingNightImage,
  },
  {
    id: 5,
    title: "Project Showcase",
    link: "https://www.facebook.com/events/2729108283942901",
    image: projectShowcaseImage,
  },
  {
    id: 6,
    title: "MEDSCISOC X ENACTUS X CALISOC Pubcrawl",
    link: "https://fb.me/e/7JDXk8Tju",
    image: medsciXcaliXEnactusPubcrawl,
  },
  {
    id: 7,
    title: "Wings for Life",
    link: "https://www.facebook.com/events/1200241964922272",
    image: wingsForLifeImage,
  },
  {
    id: 8,
    title: "ADA x Enactus x BoulderSoc Bouldering Night",
    link: "https://www.instagram.com/p/DLCVLxGRPNh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: boulderingNight,
  }
];

export default function PastEventCards() {
  return (
    <Box
      sx={{
        maxWidth: '1220px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5,
      }}
    >
      {events.map((card) => (
        <Link key={card.id} to={card.link} target="_blank" rel="noopener noreferrer">
          <Card
            sx={{
              width: {
                xs: '70vw',
                sm: '80vw',
                md: 400,
              },
              borderRadius: 5,
              boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.12)",
              position: "relative",
              overflow: "hidden",
              transition: "0.4s cubic-bezier(0.5, 1.6, 0.4, 0.8)",
              "&:hover": {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                transform: "scale(1.06)",
              },
              "&:hover .descriptionBox": {
              opacity: 1,
              transform: "translateY(0%)",
            },
            }}
          >
            <CardActionArea sx={{ height: '100%' }}>
              <CardContent 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center', 
                  gap: 2,
                  padding: 0
                }}
              >
                <CardMedia 
                  component="img"
                  alt={card.title}
                  image={card.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 3
                  }}
                />
              </CardContent>
            </CardActionArea>
            {/* Title overlay */}
            <Box
                className="descriptionBox"
                sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "white",
                padding: "30px",
                opacity: 0,
                transform: "translateY(100%)",
                transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
                }}
            >
                <Typography variant="body2">{card.title}</Typography>
            </Box>
          </Card>
        </Link>
      ))}
    </Box>
  );
}
