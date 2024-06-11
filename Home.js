import React from 'react';
import "./Home.css";
import Product from "./Product";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
      <div className='homecontainer'>

        {/* React Responsive Carousel */}
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          className="carousel-root"
        >
          <div>
            <img src="https://m.media-amazon.com/images/I/71NEUHoukSL._SX3000_.jpg" alt="First slide" className="carousel-image" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/June/5300-Kitchen---Summer-appliances-hero---May_1236X1080_Water-bottler--lunc-box-pc-v2._CB555049279_.jpg" alt="Second slide" className="carousel-image" />
          </div>
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRS/GW/pc_unrec_june_ubs._CB554831429_.jpg" alt="Third slide" className="carousel-image" />
          </div>
        </Carousel>

        <div className='homerow'>
          <Product
            title="House of Hades"
            id="123442d"
            price={400}
            image="https://m.media-amazon.com/images/I/51Qd0GP6hrL._SL500_.jpg"
            rating={4}
          />
          <Product
            title="Echo Dot"
            id="123op1d"
            price={4999}
            image="https://img.tatacliq.com/images/i11/1348Wx2000H/MP000000007854218_1348Wx2000H_202306280032211.jpeg"
            rating={4}
          />
        </div>
        <div className='homerow'>
          <Product
            title="Oppo Enco Buds 2"
            id="287442d"
            price={1599}
            image="https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=20&crop=false"
            rating={5}
          />
          <Product
            title="Thompson R9"
            id="120302o"
            price={6789}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmcUtDcK0Ctv3I1ZGiZV1kqPH5tUmw_yAS2zHw0WcnSpqX0XX6CCRkOBv1Wzj5ar1CGzyrg5OrMvqBEvHB8QqzU97rFRyO4oR6aS1z5GPNEn0BS4TLgyryIg"
            rating={1}
          />
          <Product
            title="Philips Air fryer"
            id="1468922d"
            price={4890}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoldCJeSVFSBMdzsxVwzoc-y2SGrgae3yE5j0T0Aco6Y9FKZJ5CyW9xxPW6ScRxeadbKmySPZOu_QKkp-kF33qJrNvGiw-e_s57L79mkGm6WNvkcZAsrtpdzLI2I_a4EgRILcHtQU&usqp=CAc"
            rating={3}
          />
        </div>
        <div className='homerow'>
          <Product
            id="90920130"
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQCKsgIylpRCbqc7RxjXJN1ZYyX5e2KeRLIRMPrJ5MMAgJQwpxskib4MNqM7tmmx5JjRaFtjbNWwNOx6DtE2dLVBaCG0_pe8dHESA2RUUyU70cBUq9PW5C4"
            title="Aqua grand water purifier"
            rating={4}
            price={3789}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
