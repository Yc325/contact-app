import React, { useState, useEffect } from 'react';
import User from './User';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

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
      <Fade top distance='10%' duration='1500'>
        {jsonData.map((user)=>(
            <User user={user} key={user.id}/>
        ))}
      </Fade>

    </Container>
  )
}

export default Users