import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../src/store/slices/UserSlices';

const UserData = () => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      <h3>User List</h3>
      <ul>
        {users.length > 0 ? (
          users.map((user, id) => (
            <ListItem key={id}>
              <UserName>{user}</UserName>
              <Button onClick={() => handleDelete(user.id)}>
                <MdDeleteForever className="delete-icon" />
              </Button>
            </ListItem>
          ))
        ) : (
          <ListItem>No users available</ListItem>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  color: black;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }
`;

const ListItem = styled.li`
  padding: 0.8rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4d4f;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #e60000;
  }

  .delete-icon {
    vertical-align: middle;
  }
`;

export default UserData;
