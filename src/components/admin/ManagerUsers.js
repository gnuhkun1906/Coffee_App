import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_get_user } from '../../redux/action'

export default function ManagerUsers() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(act_get_user())
  },[])
  const listUsers=useSelector(state=>state.users)
 

  return (
    <div>
         <h1 className='my-4 fs-1'> Manager User </h1>
      <br />
      <br />
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th >#</th>
            <th >UserId</th>
            <th >UserName</th>
            <th >Email</th>
            <th >Password</th>
            <th >Telephone</th>
            <th >Address</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((user,index)=>{
            return <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.telephone}</td>
              <td>{user.address}</td>
              <td>
                <button className='btn btn-danger'>Disable</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
