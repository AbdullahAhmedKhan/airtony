import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                {/* <!-- Page content here --> */}
                <h2 className='text-center text-3xl font-bold text-purple-500'>Welcome to your dashboard</h2>
                <Outlet className="bg-primary"></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-gray-200 text-base-content">

                    {/* <!-- Sidebar content here --> */}

                    <li className='btn btn-primary btn-outline border border-2 rounded-full shadow-lg my-2'><Link to='/dashboard'>My Order</Link></li>
                    <li className='btn btn-primary btn-outline border border-2 rounded-full shadow-lg my-2'><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li className='btn btn-primary btn-outline border border-2 rounded-full shadow-lg my-2'><Link to='/dashboard/addreview'>Add Review</Link></li>
                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    </>} */}
                    {admin &&
                        <>
                            <li><button className='btn btn-primary btn-outline border border-2 rounded-full shadow-lg my-2'><Link to="/dashboard/users">Make Admin</Link></button></li>
                            <li><button className='btn btn-primary my-2 text-white btn-outline border border-2 rounded-full shadow-lg'><Link to="/dashboard/addproduct">Add Product</Link></button></li>
                            <li><button className='btn btn-primary my-2 text-white btn-outline border border-2 rounded-full'><Link to="/dashboard/manage">Manage Product</Link></button></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;