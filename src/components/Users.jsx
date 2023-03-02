import React, { useState, useEffect } from 'react';
import User from './User';
import styled from 'styled-components'


const Container = styled.div``;

const Users = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setJsonData(data))
        .catch(error => console.error(error));
    }, []);

    if (!jsonData) {
      return <div>Loading...</div>;
    }
  return (
    <Container>
        {jsonData.map((user)=>(
            <User user={user} key={user.id}/>
        ))}
    </Container>
  )
}

export default Users