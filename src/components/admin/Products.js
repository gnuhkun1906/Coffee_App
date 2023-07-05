import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { act_delete_pro, act_get_pro } from '../../redux/action'



export default function Products() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listProducts = useSelector(state => state.listproduct)
  useEffect(() => {
    dispatch(act_get_pro())

  }, [])
  const handleDelete = (idDel) => {
    console.log(idDel);
    dispatch(act_delete_pro(idDel))
    // navigate('/admin/listproduct')
  }
  const handleEdit=(proEdit)=>{
    console.log(proEdit);
   navigate('/admin/editproduct',{state:proEdit})
   
  }
  return (
    <div>
      <h1 className='my-4 fs-1'>  Quản lí sản phẩm</h1>
      <br />
      <br />
      <NavLink to={"/admin/addproduct"}><button className='btn btn-info fs-2 my-5' >Thêm mới sản phẩm</button></NavLink>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th >#</th>
            <th >Mã Sản Phẩm</th>
            <th >Sản Phẩm</th>
            <th >Tên Sản Phẩm</th>
            <th >Giá</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((pro, index) => {
            return <tr key={pro.id}>
              <th >{index+1}</th>
              <th >{pro.id}</th>
              <th ><img width={70} src={pro.image} alt="" /></th>
              <td>{pro.productName}</td>
              <td>{pro.price}$</td>
              <td>
                <button className='btn btn-danger mx-3' onClick={()=>handleDelete(pro.id)}>Delete</button>
                <button className='btn btn-warning' onClick={()=>handleEdit(pro)}>Update</button>
              </td>
            </tr>

          })}
        </tbody>
      </table>
    </div>
  )
}
