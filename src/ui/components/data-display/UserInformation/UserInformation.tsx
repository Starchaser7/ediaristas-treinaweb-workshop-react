import React from 'react';
import {
  UserInformationContainer,
  UserDesc,
  UserName,
  AvatarStyled,
  RatingStyled,
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDesc>{description}</UserDesc>
    </UserInformationContainer>
  );
};

export default UserInformation;
