import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarqueeUpdates from '../components/home/marquee/MarqueeUpdates';
import Highlights from '../components/home/highlights/Highlights';
import Updates from '../components/home/updates/Updates';
import Circulars from '../components/home/circulars/Circulars';
import PressRelease from '../components/home/press_release/PressRelease';
import Advertisement from '../components/home/advertisement/Advertisement';
import Acheivements from '../components/home/acheivements/Acheivements';
// import ImagesSlider from '../components/home/images_slider/ImagesSlider';

const Home = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost/delhisports/api/home/get/");
    let fetch = data.data;
    setData(fetch);
  };

  return (
    <div>
      {data && data !== {} && (
        <>
          {/* <ImagesSlider data={data.images} /> */}
          <MarqueeUpdates data={data.marquee} />
          <Highlights data={data.highlights} />
          <Updates data={data.updates} />
          <Circulars data={data.circulars} />
          <PressRelease data={data.press_release} />
          <Advertisement data={data.advertisement} />
          <Acheivements data={data.acheivements} />
        </>
      )}
    </div>
  );
}

export default Home;