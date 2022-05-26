import { React, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

// import DeleteModal from './DeleteModal';
import UserRow from './UserRow';

const Users = () => {
    // const [deleteUser, setDeleteUser] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='m-5'>
            <h1 className='text-2xl text-blue-900'>All Users : {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}

                            ></UserRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Users;