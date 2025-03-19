import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, useTheme } from '@mui/material';

const Carousel = () => {
  const theme = useTheme(); // Access theme variables

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carouselItems = [
    { id: 1, img: 'https://imgs.search.brave.com/UkyUgarXtN1D3yajUP5y6gL-Hmh29TAIChrJSAJFY8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVhbm1jbGVvZHBo/b3RvZ3JhcGh5LmNv/bS9pbWFnZXMvOTYw/L1NwcmF5LVZhbGxl/eS0xNjAwcHgtRE1Q/LVdlYnNpdGUuanBn', title: 'Traditional Wear' },
    { id: 2, img: 'https://imgs.search.brave.com/cCDUZU8845C-LIpP_DsCu-5rQ45UQOr-gtbvBmsBRsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9yb21hbnRpYy1z/bm93eS1tb3VudGFp/bi12aWxsYWdlLWZy/ZWUtaW1hZ2UuanBl/Zz93PTYwMCZxdWFs/aXR5PTgw', title: 'Western Wear' },
    { id: 3, img: 'https://imgs.search.brave.com/VlamF4jTawJ3xTdlTwqJRhkwl2SQx743L6lBV-hkKso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tb3JuaW5nLXN1/bnJpc2UtYWZ0ZXIt/YS1oaWtlLW9uLWEt/bW91bnRhaW4tdHJh/aWwtaW4tbmF0dXJl/LWZyZWUtaW1hZ2Uu/anBlZz93PTYwMCZx/dWFsaXR5PTgw', title: 'Cot Sets' },
    { id: 4, img: 'https://imgs.search.brave.com/aNhLhGmwhtYNRH3gYnK51Kj24GgNcaFcA4v6p4J7JwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9tYW4tY29ucXVl/cmVkLWEtaGlnaC1t/b3VudGFpbi1tb3Rp/dmF0aW9uLWZyZWUt/aW1hZ2UuanBlZz93/PTYwMCZxdWFsaXR5/PTgw', title: 'Wedding Wear' },
  ];

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden', my: 4 }}>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              textAlign: 'center',
              p: 2,
              backgroundColor: theme.palette.background.default,
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                color: 'primary.main',
                fontWeight: 'bold',
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
