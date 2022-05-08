import React, { useState } from "react";
import "./ContractCreate.css";
import { Link } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function NewsCreate() {
  const [type, setType] = useState("");
  const [image, setImage] = useState();
  console.log(image);
  return (
    <form className='news-create'>
      <div className='news-create-wrapper'>
        <h1>TẠO HỢP ĐỒNG</h1>
        <p>Tạo hợp đồng mới GolfMaid ở đây</p>
      </div>
      <div className='news-create-form'>
        <div className='news-create-item'>
          <p>Tên người giúp việc</p>
          <input
            type='text'
            name='employee'
            placeholder='Nhập tên người giúp việc ...'
          />
        </div>
        <div className='news-create-item'>
          <p>Tên người thuê</p>
          <input
            type='text'
            name='employer'
            placeholder='Nhập tên người thuê ...'
          />
        </div>
        <div className='news-create-item'>
          <p>Ngày bắt đầu</p>
          <input type='date' name='startDate' />
        </div>
        <div className='news-create-item'>
          <p>Ngày kết thúc</p>
          <input type='date' name='endDate' />
        </div>
        <div className='news-create-item'>
          <p>Giá tiền</p>
          <input type='number' name='price' placeholder='Nhập giá tiền ...' />
        </div>
        <div className='news-create-item'>
          <p>Thời gian làm việc</p>
          <div>
            <input type='radio' name='workingTime' value='fulltime' /> Toàn thời
            gian
            <input type='radio' name='workingTime' value='parttime' /> Bán thời
            gian
            <input type='radio' name='workingTime' value='allday' /> Cả ngày
          </div>
        </div>
      </div>

      <div className='news-create-func'>
        <button>TẠO</button>
        <Link className='news-create-func--cancel' to='/admin/news-management'>
          HỦY
        </Link>
      </div>
    </form>
  );
}

export default NewsCreate;
