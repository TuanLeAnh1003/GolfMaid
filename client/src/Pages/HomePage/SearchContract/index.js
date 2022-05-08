import React from 'react'
import './SearchContract.css'

function SearchContract() {
  return (
    <form className="search-contract">
      <div className="search-contract--title">TRA CỨU HỢP ĐỒNG</div>
      <input type="text" className="search-contract--input" placeholder="Mã hợp đồng" /><br />
      <input type="text" className="search-contract--input" placeholder="Email" /><br />
      <input type="submit" value="TRA CỨU HỢP ĐỒNG" className="search-contract--submit" />
    </form>
  )
}

export default SearchContract
