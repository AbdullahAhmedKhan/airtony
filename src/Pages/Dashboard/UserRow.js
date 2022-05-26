import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../hooks/useAdmin';

const UserRow = ({ user, refetch, index }) => {
    const { _id, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://fathomless-reaches-02788.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    const handleDelete = id => {

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary rounded-full">Make Admin</button>}
            </td>
            <td>


                <label for="delete-modal" onClick={() => handleDelete(_id)} class="btn btn-xs btn-error rounded-full">Remove User</label>
            </td>

        </tr>
    );
};

export default UserRow;