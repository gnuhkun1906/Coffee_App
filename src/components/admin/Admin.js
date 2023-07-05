import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminContent from './AdminContent'



export default function Admin() {
  return (
    <div>
      <div className='row'>
        <div className="col-3">
         <AdminContent/>
        </div>
        <div className="col-8 admin-content">
      <Outlet/>  
        </div>
      </div>
    </div >
  )
}
