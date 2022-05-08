import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import bigImg from './../../../Assets/Images/big-img.png';
import Advertisement from '../../../Components/Advertisement';
import adImg1 from './../../../Assets/Images/ad-img-1.png';
import adImg2 from './../../../Assets/Images/ad-img-2.png';
import List from '../../../Components/List';
import Post from '../../../Components/Post';
import listImg1 from './../../../Assets/Images/list-img-1.png';
import listImg2 from './../../../Assets/Images/list-img-2.png';
import listImg3 from './../../../Assets/Images/list-img-3.png';
import pro1 from './../../../Assets/Images/Rectangle 11.png';
import ContactItem from '../../../Components/ContactItem/index';
import newsItemImg1 from './../../../Assets/Images/news-item-1.svg';
import newsItemImg2 from './../../../Assets/Images/news-item-2.svg';
import newsItemImg3 from './../../../Assets/Images/news-item-3.svg';
import newsItemImg4 from './../../../Assets/Images/news-item-4.svg';
import NewsItem from '../../../Components/NewsItem';
import bigImg2 from './../../../Assets/Images/big-img-2.png';
import FamilyImage from "./../../../Assets/Images/family-image.svg";
import HouseHelperImage from "./../../../Assets/Images/house-helper.svg";

const contactList = [
  {
    title: "ĐỊA CHỈ",
    icon: "location-dot",
    content: ["64/15 Nguyên Hồng", "Phường 1, Quận Gò Vấp", "Thành phố Hồ Chí Minh"]
  },
  {
    title: "GIỜ MỞ CỬA",
    icon: "clock",
    content: ["Thứ 2 - Thứ 6: 8h00 - 20h00", "Thứ 7: 8h00 - 21h00", "Chủ nhật: 8h00 - 21h30"]
  },
  {
    title: "EMAIL",
    icon: "envelope",
    content: ["uitwatch@gmail.com", "19522009@gm.uit.edu.vn", "nduyan1601@gmail.com"]
  },
  {
    title: "ĐIỆN THOẠI",
    icon: "phone",
    content: ["Anh An - 0938269974", "Anh Phong - 093569712", "Anh Hưng - 0908926975"]
  }
]

const newsList = [
  {
    img: newsItemImg1,
    title: "Tìm người quét dọn",
    desc: "Tôi hiện đang sống ở một mình và thường xuyên về nhà chiều muộn nên nhà cửa lúc nào cũng bụi bặm. Vì thế nên cần một người giúp việc... "
  },
  {
    img: newsItemImg2,
    title: "Tìm người phụ quán",
    desc: "Gia đình tôi vừa mới vay vốn và mở được một cửa hàng quần áo nhỏ. Nên tôi cần tuyển một người phụ giúp trông coi cửa hàng. Yêu cầu:..."
  },
  {
    img: newsItemImg3,
    title: "Tìm người chăm em...",
    desc: "Vợ tôi vừa mới sinh đôi vào cuối năm ngoái, đến nay thì cũng gần được nửa năm, cô ấy sắp phải đi làm lại ở công ty. Do vậy nên tôi cần một..."
  },
  {
    img: newsItemImg4,
    title: "6 cách giữ nhà sạch",
    desc: "Bạn quá bận rộn với công việc và không có nhiều thời gian dọn dẹp nhà cửa? Bạn muốn giữ cho không gian nhà ở của mình luôn sạch sẽ..."
  }
]

const postList = [
  {
    id: "P001",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P002",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P003",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P004",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P005",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P006",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P007",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P008",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P009",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P010",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P011",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P012",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P013",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer",
  },
  {
    id: "P014",
    img: HouseHelperImage,
    gender: "male",
    name: "Nữ giúp việc - Lê Anh Tuấn",
    firstName: "Tuấn",
    lastName: "Lê Anh",
    phoneNumber: "0938269974",
    address: "64/15 Nguyên Hồng Phường 1 Gò Vấp",
    workplace: "Gia đình, cá nhân, công ty",
    price: "7.500.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employee",
    expertise: ["Vệ sinh nhà cửa", "Chăm con cái"],
    advantage: "Khỏe mạnh, thật thà, nhanh nhẹn",
    experience: "1 năm"
  },
];

function Home() {
  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);

  const move = useRef();
  const product = useRef()

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(num, "effect");
    setTrans(-(window.innerWidth-170)*num);

  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/4)) setNum((num) => num + 1);
    // console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    // console.log(num);
  }

  return (
    <div className="home">
      <img src={bigImg} alt="big-img" />
      <div className="home__ads">
        <Advertisement 
          img={adImg1}
          title="TÌM  NGƯỜI CHĂM EM BÉ"
          des="Vợ tôi vừa mới sinh đôi vào cuối năm ngoái, đến nay thì cũng gần được nửa năm, cô ấy sắp phải đi làm lại ở công ty. Do vậy nên tôi cần 1 người giúp việc có thể chăm sóc 2 bé nhà tôi. Bên cạnh đó thì nhà tôi cần có thêm một người nữa để có thể quét dọn nhà cửa, giặt đồ, phơi đồ."
        />

        <Advertisement 
          img={adImg2}
          title="TÌM NGƯỜI PHỤ QUÁN"
          des="Gia đình tôi vừa mới vay vốn và mở được một cửa hàng quần áo nhỏ. Nên tôi cần tuyển một người phụ giúp trông coi cửa hàng. Yêu cầu: chăm chỉ, thật thà, nhanh nhẹn."
        />
      </div>

      {/* DỊCH VỤ */}
      <h1>DỊCH VỤ VỦA CHÚNG TÔI</h1>
      <div className="home__lists">
        <List 
          img={listImg1}
          title="Giúp việc nam"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />

        <List 
          img={listImg2}
          title="Giúp việc nữ"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />

        <List 
          img={listImg3}
          title="Tìm giúp việc"
          list={{
            item1: "Lĩnh vực",
            item2: "Địa điểm",
            item3: "Mức lương",
          }}
        />
      </div>

      <h1>DANH SÁCH TÌM NGƯỜI GIÚP VIỆC</h1>
      <div className="home__contracts-wrapper">
        <FontAwesomeIcon icon={solid('angle-left')} onClick={handleLeftClick}/>
        
        <div className="home__contracts">
          <ul 
            className="home__contract-wrap"
            style={{left: trans + "px"}}
            ref={move}
          >
            {postList.map((item, index) => (
              <li key={index}>
                <div className="home__contract-frame">
                  <div className="home__contract">
                    <Post
                        ref={product}
                        img={item.img}
                        name={item.name}
                        type={item.type}
                        price={item.price}
                        address={item.generalAddress}
                      />
                  </div>    
                </div>
              </li>
            ))}
          </ul>
        </div>

        <FontAwesomeIcon icon={solid('angle-right')} onClick={handleRightClick}/>
      </div>

      <img src={bigImg2} alt="image-poster" style={{margin: "20px 0"}}/>

      <div className="home__bottom">
        <div className="home__bottom-contact">
            <div className="home__bottom-contact-title">THÔNG TIN LIÊN LẠC</div>
            <div className="home__bottom-contact-desc">Nếu bạn có bất kì phản hồi gì về tiệm bánh HachatMacaron, hãy liên hệ ở các thông tin bên dưới:</div>
            <div className="home__bottom-contact-list">
            {
              contactList.map((element, index) => (
                <ContactItem
                  key={index}
                  title={element.title}
                  icon={element.icon}
                  content={element.content}
                ></ContactItem>
              ))
            }
            </div>
        </div>

        <div className="home__bottom-line"></div>

        <div className="home__bottom-news">
          <div className="home__bottom-news-title">TIN TỨC VÀ BÀI VIẾT</div>
          <div className="home__bottom-news-list">
            {
              newsList.map((element, index) => (
                <NewsItem
                  key={index}
                  img={element.img}
                  title={element.title}
                  desc={element.desc}
                ></NewsItem>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home