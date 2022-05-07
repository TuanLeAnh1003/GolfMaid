import React from 'react';
import './HouseHelper.css';
import CategoryItem from '../../../Components/Category/CategoryItem/index';
import Post from '../../../Components/Post/index';
import FindHouseHelperImage from './../../../Assets/Images/Find-house-helper-image.svg';
import FamilyImage from './../../../Assets/Images/family-image.svg';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import HouseHelperImage from './../../../Assets/Images/house-helper.svg'

function HouseHelper() {
  const { type } = useParams()

  const cateList = [
    {
      title: "NGƯỜI GIÚP VIỆC",
      contentList: ["Việc nhà", "Trông trẻ", "Chăm người già", "Chăm người bệnh", "Làm tạp vụ", "Vệ sinh nhà cửa"]
    },
    {
      title: "MỨC LƯƠNG",
      contentList: ["0đ - 2.000.000đ", "2.000.000đ - 4.000.000đ", "4.000.000đ - 8.000.000đ", "8.000.000đ - 12.000.000đ", "12.000.000đ - 15.000.000đ", "15.000.000đ +"]
    },
    {
      title: "CƠ SỞ LÀM VIỆC",
      contentList: ["Cá nhân", "Gia đình", "Công ty"]
    }, 
    {
      title: "Địa điểm",
      contentList: ["TP. Hồ Chí Minh  ", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Bình Dương"]
    },
    {
      title: "Giới tính",
      contentList: ["Nam", "Nữ"]
    }
  ]

  const familyList = [{
    id: "P001",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P002",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P003",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P004",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P005",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P006",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P007",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P008",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P009",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P010",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P011",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P012",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }, {
    id: "P013",
    img: FamilyImage,
    name: "Chính chủ tuyển nữ giúp việc nhà ở lại",
    workplace: "Gia đình",
    price: "7.000.000đ",
    generalAddress: "TP Hồ Chí Minh"
  }]

  const houseHelperList = [
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    },
    {
      img: HouseHelperImage,
      name: "Nữ giúp việc - Lê Anh Tuấn",
      workplace: "Gia đình, cá nhân, công ty",
      price: "7.500.000đ",
      generalAddress: "TP Hồ Chí Minh"
    }
  ]

  return (
    <div className="findHousehelper">
      <div className="findHousehelper__category">
        <div className="findHousehelper__category-gender">
          <Link to='/househelper' className="findHousehelper__category-gender-item findHousehelper__category-gender-item--active">
            TẤT CẢ
          </Link>
        </div>

        <div className="findHousehelper__category-line"></div>

        <div className="findHousehelper__category-type">
          <Link to="/househelper/find" className="findHousehelper__category-type-find">Tìm người giúp việc</Link><br />
          <Link to="/househelper/list" className="findHousehelper__category-type-list">Danh sách người giúp việc</Link>
        </div>


        {cateList.map((element, index) => (
            <div key={index} className="findHousehelper__category-element">
              <div className="findHousehelper__category-line"></div>

              <CategoryItem
                title={element.title}
                contentList={element.contentList}
              ></CategoryItem>
            </div>
        )
        )}
      </div>
      {
        type === 'find' ? (
          <div className="findHousehelper__family">
              <div className="findHousehelper__family-img">
                <img src={FindHouseHelperImage} alt="" className="findHousehelper__family-img--main" />
              </div>
              <p className="findHousehelper__family-title">TUYỂN NGƯỜI GIÚP VIỆC MỚI NHẤT 2022</p>
              <div className="findHousehelper__family-list">
                {
                  familyList.map((element, index) => (
                    <Link to={`/post-detail/${element.id}`} key={index} className="findHousehelper__family-list-item">
                      <Post
                        img= {element.img}
                        name= {element.name}
                        workplace= {element.workplace}
                        type= {element.type}
                        price= {element.price}
                        address= {element.generalAddress}
                      ></Post>
                    </Link>
                  ))
                }
              </div>
          </div>
        ) : (
          <div className="findHousehelper__family">
              <div className="findHousehelper__family-img">
                <img src={FindHouseHelperImage} alt="" className="findHousehelper__family-img--main" />
              </div>
              <p className="findHousehelper__family-title">DANH SÁCH NGƯỜI GIÚP VIỆC MỚI NHẤT 2022</p>
              <div className="findHousehelper__family-list">
                {
                  houseHelperList.map((element, index) => (
                    <div key={index} className="findHousehelper__family-list-item">
                      <Post
                        img= {element.img}
                        name= {element.name}
                        type= {element.type}
                        workplace= {element.workplace}
                        price= {element.price}
                        address= {element.generalAddress}
                      ></Post>
                    </div>
                  ))
                }
              </div>
          </div>
        )
      }
    </div>
  )
}

export default HouseHelper
