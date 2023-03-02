import React, { useState } from 'react';
import styled from 'styled-components'
import userProfileIcon from '../img/user-profile-icon.svg';
import GoogleMap from './GoogleMap';

console.log(process.env)

const Container = styled.div`
  margin-top: 30px;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;


const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;

const Username = styled.p`
  margin: 8px 0;
`;

const ShowInfoButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: #0077ff;
  margin-left: auto;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 500;
`;

const InfoItem = styled.div`
  margin-bottom: 16px;
`;

const InfoLabel = styled.p`
  margin: 0;
  font-weight: bold;
  margin-right: 8px;
`;

const InfoValue = styled.p`
  margin: 0;
`;


const UserBottom = styled.div`
  padding: 10px 30px 20px 10px;
`

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Redirect = styled.a`
    text-decoration: none;
    color:#0077ff;
    margin-right: 16px;
    &:hover {
    color:#006fee;
  }
`

const User = ({user}) => {

  const [displayInfo, setDisplayInfo] = useState(false);

  const handleInfoClick = () => {
    setDisplayInfo(!displayInfo);


  };
  return (
<Container >
  
<UserInfo>
<UserHeader>
        <ProfilePicture src={userProfileIcon} />
        <div>
          <Name>{user.name}</Name>
          <Username>@{user.username}</Username>
        </div>

      </UserHeader>
  <UserBottom>
          <Label >Email:</Label>
          <Redirect href={`mailto:${user.email}`} target="_blank">{user.email}</Redirect>
          <Label>Phone:</Label>
          <Redirect href={`tel:${user.phone}`} target="_blank">{user.phone}</Redirect>
          <Label>Website:</Label>
          <Redirect href={`http://${user.website}`} target="_blank">{user.website}</Redirect>
  </UserBottom>

</UserInfo>
<ShowInfoButton onClick={handleInfoClick} >{displayInfo ? 'Hide Info -' : 'Show Info +'}</ShowInfoButton>
      {displayInfo && (
  <InfoBlock> 
      <InfoItem>
        <InfoHeader>Company</InfoHeader>
          <InfoLabel>Name:</InfoLabel>
          <InfoValue>{user.company.name}</InfoValue>
          <InfoLabel>Catchphrase:</InfoLabel>
          <InfoValue>{user.company.catchPhrase}</InfoValue>
          <InfoLabel>BS:</InfoLabel>
          <InfoValue>{user.company.bs}</InfoValue>
      </InfoItem>

      <InfoItem>
      <div>
        <InfoHeader>Address</InfoHeader>

          <InfoLabel>Street:</InfoLabel>
          <InfoValue>{user.address.street}</InfoValue>
          <InfoLabel>Suite:</InfoLabel>
          <InfoValue>{user.address.suite}</InfoValue>
          <InfoLabel>City:</InfoLabel>
          <InfoValue>{user.address.city}</InfoValue>
          <InfoLabel>Zipcode:</InfoLabel>
          <InfoValue>{user.address.zipcode}</InfoValue>
          <InfoLabel>Latitude & Longitude:</InfoLabel>
          <InfoValue>{user.address.geo.lat} & {user.address.geo.lng}</InfoValue>
          <GoogleMap center={{lat: user.address.geo.lat/1, lng: user.address.geo.lng/1}} zoom={2} />
        </div>
        </InfoItem>

      </InfoBlock>
            )}
    </Container>
  )
}

export default User