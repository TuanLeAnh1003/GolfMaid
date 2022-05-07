import React, { useState, useRef, useEffect } from 'react';
import './PostDetail.css';
import img from './../../../Assets/Images/Rectangle 48.png';
import smallImg from './../../../Assets/Images/post-detail-1.svg';
import pro1 from './../../../Assets/Images/Rectangle 11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import FamilyImage from './../../../Assets/Images/family-image.svg';
import Post from '../../../Components/Post';
import HouseHelperImage from './../../../Assets/Images/house-helper.svg'
import { useParams } from 'react-router'

function PostDetail() {
  const postId = useParams()
  const postList = [{
    id: "P001",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P002",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P003",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P004",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P005",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P006",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P007",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P008",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P009",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P010",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P011",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P012",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P013",
    img: FamilyImage,
    gender: "female",
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employer"
  }, {
    id: "P014",
    img: HouseHelperImage,
    gender: "male",
    name: "Nữ giúp việc - Lê Anh Tuấn",
    workplace: "Gia đình, cá nhân, công ty",
    price: "7.500.000đ",
    generalAddress: "TP Hồ Chí Minh",
    type: "employee",
  },]

  const commentList = [
    {
      commentId: "CM001",
      author: "Duy An",
      postId: "P001",
      content: "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    },
    {
      commentId: "CM002",
      author: "Duy An",
      postId: "P001",
      content: "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    },
    {
      commentId: "CM003",
      author: "Duy An",
      postId: "P001",
      content: "Người giúp việc tôi thuê được 3 tháng để chăm cho con tôi rồi, làm việc rất chuyên nghiệp và tử tế. ",
    }
  ]

  // -------------------------
  const [trans1, setTrans1] = useState(0);
  const [num1, setNum1] = useState(0);
  const move1 = useRef();
  const product1 = useRef()

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(product);
    setTrans1(-(1300 + 38)*num1);

  }, [num1]);

  const handleRightClick1 = () => {
    if(num1 < Math.floor(move1.current.childNodes.length/4)) setNum1((num1) => num1 + 1);
    // console.log(num, "click");
  }

  const handleLeftClick1 = () => {
    if(num1 > 0) setNum1((num1) => num1 - 1);
    // console.log(num);
  }

  // -------------------------------
  const [trans2, setTrans2] = useState(0);
  const [num2, setNum2] = useState(0);
  const move2 = useRef();
  const product2 = useRef()

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    setTrans2(-(1300 + 38)*num2);
  }, [num2]);

  const handleRightClick2 = () => {
    if(num2 < Math.floor(move2.current.childNodes.length/4)) setNum2((num2) => num2 + 1);
    // console.log(num, "click");
  }

  const handleLeftClick2 = () => {
    if(num2 > 0) setNum2((num2) => num2 - 1);
    // console.log(num);
  }

  // -----------------------------------
  const [productCount, setProductCount] = useState(1);
  const handleIncrement = () => {
    setProductCount(productCount + 1);
  }

  const handleDecrement = () => {
    if(productCount > 0) setProductCount(productCount - 1);
  }

  // -----------------------------------
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  }

  return (
    
    <div className="pro-detail">
      

      {
        postList.map((element) => (
          element.id === postId.postId && (
            <>
            <ul className="pro-detail__type">
        <li>{
          element.type === 'employee' ? "Người giúp việc" : "Người thuê"  
        }</li>
        <li>{element.workplace}</li>
        <li>{element.generalAddress}</li>
      </ul>

      <hr />

              <div className="pro-detail__brief">
          <div className="pro-detail__imgs">
            <img src={element.img} alt="img" />
            <div className="pro-detail__more-img">
              <img src={smallImg} alt="smallImg" />
              <img src={smallImg} alt="smallImg" />
              <img src={smallImg} alt="smallImg" />
              <img src={smallImg} alt="smallImg" />
            </div>
          </div>
  
          <div className="pro-detail__more">
            <h3>{element.name}</h3>
            <div className="pro-detail__status">
              <span>Liên hệ: <b>0938269983</b> - Chị Duy An</span>
              <span>Nơi làm việc: <b>64/13 Nguyên Hồng, Phường 1</b></span>
            </div>
  
            <h3>{element.price}</h3>
  
            <div className="dotted-line"></div>
  
            <p className="pro-detail__description">
            Gia đình tôi đang cần 2 người : 1 người chăm bé và 1 người giúp việc nhà . Nhà chị gái tôi cần 
            1 người chăm mẹ nữa. Nhà tôi 1 trệt,1 lầu,1 lửng,diện tích 60m2 , nhà có 2 vợ chồng và 1 con. 
            1 đứa 10 tháng. Chị gái tôi đang chăm sóc mẹ già 85 tuổi bị tai biến nhẹ đi lại hơi yếu, dạo 
            này chị ấy bận công việc công ty không có thời gian chăm sóc bà cụ, nên chị của mình cũng cần 
            1 cô giúp việc chăm sóc mẹ nữa. Mình cần tìm cô giúp việc gia đình chủ yếu là nấu ăn,lau dọn nhà cửa, thật thà, sạch sẽ,..
            </p>
  
            <div className="dotted-line"></div>
  
            <div className="pro-detail__order">
  
              <div className="pro-detail__quantity">
                <h4>SỐ LƯỢNG</h4>
                <div className="pro-detail__count">
                  <span onClick={handleDecrement}>-</span>
                  <input type="number" value={productCount} onChange={e => setProductCount(e.current.value)} />
                  <span onClick={handleIncrement}>+</span>
                </div>
              </div>
            </div>
  
            <div className="dotted-line"></div>
  
            <div className="pro-detail__buttons">
              <div className="add-to-cart">
                <button>LƯU TIN</button>
                <button>
                  LIÊN HỆ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/*--------------------------*/}
  
        <div className="pro-detail__info">
          <div className="pro-detail__info-titles">
            <div className="pro-detail__info-title">CHI TIẾT</div>
          </div>
  
          <div className="pro-detail__info-content">
            <div className="pro-detail__info-first">
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('credit-card')}/>
                <p>Hình thức trả lương: Theo tháng</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('mars-and-venus')}/>
                <p>Giới tính: {element.gender}</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('graduation-cap')}/>
                <p>Trình độ học vấn:  Không yêu cầu</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('square-minus')}/>
                <p>Độ tuổi tối thiểu: 18 tuổi</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('maximize')}/>
                <p>Độ tuổi tối đa: 65 tuổi</p>
              </div>
            </div>
  
            <div className="erect-line"></div>
  
            <div className="pro-detail__info-second">
            <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('clock')}/>
                <p>Loại công việc: Toàn thời gian</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('file')}/>
                <p>Kinh nghiệm: Không yêu cầu</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('location-dot')}/>
                <p>Tên công ty: Tại nhà</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('shield')}/>
                <p>Các quyền lợi khác: Tăng lương</p>
              </div>
              <div className="pro-detail__info-first-item">
                <FontAwesomeIcon icon={solid('certificate')}/>
                <p>Chứng chỉ / kỹ năng: Không yêu cầu</p>
              </div>
            </div>
          </div>
        </div>
  
        <hr style={{width: "50%", margin: "50px auto"}}/>
            </>
          ) 
        ))
      }

      

      {/* ------------------------------------- */}

      <div className="pro-detail__relation">
        <h2>THÔNG TIN LIÊN QUAN</h2>
        <div className="pro-detail__products-wrapper">
          <FontAwesomeIcon icon={solid('angle-left')} onClick={handleLeftClick1}/>
          
          <div className="pro-detail__products">
            <ul 
              className="pro-detail__product-wrap"
              style={{left: trans1 + "px"}}
              ref={move1}
            >
              {postList.map((item, index) => (
                <li key={index}>
                  <div className="pro-detail__product-frame">
                    <div className="pro-detail__product">
                      <Post
                        ref={product1}
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
          <FontAwesomeIcon icon={solid('angle-right')} onClick={handleRightClick1}/>
        </div>
      </div>
      <div className="pro-detail__comments">
        <div className="pro-detail__comments-left">
          <h3>BÌNH LUẬN</h3>
          {commentList.map((comment, i) => comment.postId === postId.postId && (
            <div className="pro-detail__comment" key={i}>
              <h4>{comment.author}</h4>
              {Array(5).fill().map((_, i) => (
                <span key={i}>
                  <FontAwesomeIcon icon={solid('star')} />
                </span>
              ))}
              <p>{comment.content}</p>
              <hr style={{color: "#CBCBCB", margin: "50px 0"}}/>
            </div>
          ))}
        </div>
        <form className="pro-detail__comments-right">
          <h3>Thêm đánh giá</h3>
          <p>Bình luận của bạn*</p>
          <textarea type="text" />
          <div className="pro-detail__comments-right-wrapper">
            <div>
              <p>Tên*</p>
              <input type="text" />
            </div>
            <div>
              <p>Email*</p>
              <input type="text" />
            </div>
          </div>
          <input type="submit" value="Gửi đi" />
        </form>
      </div>
    </div>
  )
}

export default PostDetail