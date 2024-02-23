import React, { useState } from 'react';
import Slider from 'react-slick';                                                                                         
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import './Fourthpage.css';

const FourthPage = () => {
  const navigate = useNavigate(); 
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for movies with query: ${searchQuery}`);
  };
 
  const handleNext = () => {
    navigate('/moviesearch');
  };

  const carouselImages1 = [
    'https://images-cdn.ubuy.ae/634d0cc50dae823b9a54f97f-the-batman-movie-poster-i-am-the.jpg', 
    'https://m.media-amazon.com/images/I/61g+uzL0ohL._AC_UF1000,1000_QL80_.jpg',
    'https://image.tmdb.org/t/p/original/hMNi01KTkQ13kc6dNLX04Jvm4m7.jpg',
    'https://e0.pxfuel.com/wallpapers/990/424/desktop-wallpaper-stranger-things-fanmade-poster-iphone-netflix-stranger-things.jpg',
    'https://ew.com/thmb/zmFfRFpL853CXR3T5fmYDCJ5b7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vampire-diaries-ad_510-f034467f63e64324acb15737cd63e7d7.jpg',
    
  ];
  const carouselImages2= [
    'https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg', 
    'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/6/65/Thunivu_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Master_2021_poster.jpg/220px-Master_2021_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/af/Varisu_poster.jpg',
    
  ];
  const carouselImages3= [
    'https://m.media-amazon.com/images/M/MV5BNmQ3NGM5ODMtNDhjYS00MDQwLWEwNjItNjZiNjdkMmQ3NjQzXkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_FMjpg_UX1000_.jpg', 
    'https://image.tmdb.org/t/p/original/rrG8yFhXTw9N5UaqsBYh3Ir9bOJ.jpg',
    'https://timesofindia.indiatimes.com/photo/61285285.cms',
    'https://m.media-amazon.com/images/M/MV5BYzY0OTVhZTMtYjAzNy00ODYzLTkxMzUtZmY2MWRlNTE1N2UyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
    'https://sund-images.sunnxt.com/31494/1000x1500_034820fc-d0da-4f26-b6d3-292cfd42c0b1.jpg',
    
  ];
  const carouselImages4= [
    'https://wallpapers.com/images/hd/surya-and-meghna-with-a-guitar-vaaranam-aayiram-poster-1vpon8fhd6i73bwp.jpg', 
    'https://m.media-amazon.com/images/S/pv-target-images/01ba985b68b667d325aa437e370d207d397966efa361dfbd994141ba04c83536.jpg',
    'https://sund-images.sunnxt.com/31656/1000x1500_b92f9300-fe29-44b8-a432-05da49b17704.jpg',
    'https://upload.wikimedia.org/wikipedia/en/3/32/Premam_film_poster.jpg',
    'https://wecinemas.com.sg/Data/Movies/2374/1.jpg',
    
  ];
  
  
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="FourthPage">
     
      <Slider {...carouselSettings}>
        {carouselImages1.map((imageUrl, index) => (
          <div key={index} className="card">
            <img src={imageUrl} alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </Slider>

     
      <Slider {...carouselSettings}>
        {carouselImages2.map((imageUrl, index) => (
          <div key={index} className="card">
            <img src={imageUrl} alt={`Movie ${index + 4}`} />
          </div>
        ))}
      </Slider>
      <Slider {...carouselSettings}>
        {carouselImages3.map((imageUrl, index) => (
          <div key={index} className="card">
            <img src={imageUrl} alt={`Movie ${index + 4}`} />
          </div>
        ))}
      </Slider>
      <Slider {...carouselSettings}>
        {carouselImages4.map((imageUrl, index) => (
          <div key={index} className="card">
            <img src={imageUrl} alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </Slider>

    </div>
  );
};


export default FourthPage;


