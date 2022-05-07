import React, { useState } from 'react'
import Post from '../../../Components/Post'
import HouseHelperImage from './../../../Assets/Images/house-helper.svg'
import FamilyImage from './../../../Assets/Images/family-image.svg';
import { Link } from 'react-router-dom'

import './Search.css'

function Search({searchContent}) {
  const [type, setType] = useState(0)
  const houseHelperList = [
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      type: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    }
  ]

  const familyList = [{
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    type: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }]

  return (
    <div className="search">
      <div className="search-cate">
        <div className="search-cate-product">
          <input className="search-cate-product-input" type="radio" name="type" id="product" onClick={e => setType(0)} checked/>
          <label className="search-cate-product-label">Tìm kiếm công việc</label>
        </div>
        <div className="search-cate-post">
          <input className="search-cate-post-input" type="radio" name="type" id="post" onClick={e => setType(1)}/>
          <label className="search-cate-post-label">Tìm người giúp việc</label>
        </div>
      </div>

      {
        type === 0 ? (
          <>
            <div className="search-title">TÌM THẤY {familyList.length} KẾT QUẢ CHO {searchContent}</div>
            <div className="search-list">
              {
                familyList.map((element, index) => (
                  <div className="search-list-item">
                    <Post 
                      key={index} 
                      img={element.img}
                      name={element.name}
                      type={element.type}
                      price={element.price}
                      address= {element.generalAddress}
                    />
                  </div>
                ))
              }
            </div>
          </>
        ) : (
          <>
            <div className="search-title">TÌM THẤY {houseHelperList.length} KẾT QUẢ CHO {searchContent}</div>
            <div className="search-list">
              {
                houseHelperList.map((element, index) => (
                  <div className="search-list-item">
                    <Post 
                      key={index} 
                      img={element.img}
                      name={element.name}
                      type={element.type}
                      price={element.price}
                      address= {element.generalAddress}
                    />
                  </div>
                ))
              }
            </div>
          </>
        )
      }
        

      <Link to='/househelper' className="search-view-all">XEM TẤT CẢ BÀI KHÁC</Link>
    </div>
  )
}

export default Search