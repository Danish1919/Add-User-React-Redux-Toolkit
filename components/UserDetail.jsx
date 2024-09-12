import React from 'react';
import DeleteAllUser from './DeleteAllUser';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addUser } from '../src/store/slices/UserSlices';
import UserData from './UserData';
import { dumydata } from '../src/Api'; // Dummy data

const UserDetail = () => {
  const dispatch = useDispatch();

  const adduser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="table-subtitle"></div>
          <button className="btn add-btn" onClick={() => adduser(dumydata())}>
            Add New User
          </button>
        </div>
        <ul>
          <UserData />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .table-subtitle {
    font-size: 1.8rem;
    font-weight: bold;
  }

  hr {
    margin-top: 1.5rem;
  }
`;

export default UserDetail;
