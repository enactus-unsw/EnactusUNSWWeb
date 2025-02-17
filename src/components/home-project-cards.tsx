import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';

import shareplateLogo from "../images/Shareplate_Logo_Grey.png";
import tech4ImpactLogo from "../images/tech4impact_logo.png";
import procketsLogo from "../images/prockets_logo.png";

const projects = [
  {
    id: 1,
    title: 'Shareplate',
    description: "A not-for-profit initiative dedicated to bridging the gap between households experiencing food insecurity and those who have the capacity to provide resources through a digital platform known as 'Shareplate'.",
    logo: shareplateLogo,
  },
  {
    id: 2,
    title: 'Tech4Impact',
    description: 'Tech4Impact is a project focused on helping those with limited access to technology overcome the digital divide. We refurbish old devices, giving them new life and donating them to those in need. Our goal is to increase technology access; creating equal opportunities for education, employment, and connectivity.',
    logo: tech4ImpactLogo,
  },
  {
    id: 3,
    title: 'Prockets',
    description: 'Creating prosthetics more accessible to amputees - financially by developing a cost-effective component of the prosthetic and socially through a support network platform.',
    logo: procketsLogo,
  },
];

export default function HomeProjectCards() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 5,
      }}
    >
      {projects.map((card) => (
        <Card
          key={card.id}
          sx={{
            width: 300,
            height: 380,
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
                gap: 2
              }}
            >
              <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                {card.title}
              </Typography>
              <CardMedia 
                component="img"
                alt={card.title}
                image={card.logo}
                sx={{
                  width: "230px",
                  height: "230px",
                  objectFit: "contain",
                }}
              />
            </CardContent>
          </CardActionArea>
          {/* Description overlay */}
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
            <Typography variant="body2">{card.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
