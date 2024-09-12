import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllUsers } from '../src/store/slices/UserSlices'; // Action renamed for clarity

import styled from'styled-components';  // Importing styled-components for styling the button  // Fixed the import path from 'react-bootstrap' to 'styled-components'

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllUsers()); // Clear the entire user list
  };

  return (
   <Wrapper>
      <button className="btn add-btn" onClick={handleDeleteAll}>
        Delete All Users
      </button>
   </Wrapper>
  );
};
const Wrapper = styled.section`

.btn{
margin-top: 20px;
}
`

export default DeleteAllUser;

