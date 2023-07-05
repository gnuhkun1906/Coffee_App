import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { act_post_pro } from '../../redux/action';


export default function AddProduct() {
  const [productName, setProductName] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "uploads/");
  const navigate=useNavigate();
  const dispatch=useDispatch()

  // Viết hàm upload
  const uploadImage = (e) => {
    let imageUpload=e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImageUrl(url);
      });
    });
  };
  // Lấy dữ liệu trả về từ firebase
  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl(url);
        });
      });
    });
  }, []);
  const handleCreatePro=()=>{
    dispatch(act_post_pro({image:imageUrl, productName,price}))
    navigate("/admin/products")
  }
  return (
    <div>
      <h1>Thêm Mới Sản Phẩm</h1>
      <h1 className='my-4 fs-1'>  Quản lí sản phẩm</h1>
    <br/>
    <br/>

      <table class="table table-striped table-hover border-1">
        <thead>
          <tr>
            <th>
              <b className='fs-2'>Product Image</b>
            </th>
            <td>
              <img width={"100"} src={imageUrl} alt="" />
              <input type="file" onChange={uploadImage} className='fs-4'/>
            </td>
          </tr>

          <tr>
            <th>
              <b className='fs-2'>Product Name</b>
            </th>
            <td>
              <input type="text" className='fs-2' value={productName} onChange={(e)=>setProductName(e.target.value) } />
            </td>
          </tr>

          <tr>
            <th>
              <b className='fs-2'>Price</b>
            </th>
            <td>
              <input type="number" className='fs-2' value={price} onChange={(e)=>setPrice(e.target.value)} />
            </td>
          </tr>

        </thead>
  
      </table>
     <button className='btn btn-success fs-4' onClick={handleCreatePro}>Create Product</button>
    </div>
    


   
  )
}
