import React from "react";
import {
  Background,
  CloseModal,
  ModalContent,
  ModalWrapper,
  Title,
  TitleUser,
} from "../../styles/Modal.styles";

export const Modal = ({ isOpen, usersData, setOpen }) => {
  if (isOpen) {
    return (
      <Background>
        <ModalWrapper showModal={isOpen}>
          <ModalContent>
            <TitleUser>User Information: </TitleUser>
            <Title>Name: {usersData.name} </Title>
            <Title>Username: {usersData.username} </Title>
            <Title>Street: {usersData.address.street} </Title>
            <Title>Suite: {usersData.address.suite} </Title>
            <Title>Zipcode: {usersData.address.zipcode} </Title>
            <Title>Phone: {usersData.phone} </Title>
            <Title>Website: {usersData.website} </Title>
            <Title>Company: {usersData.company.name} </Title>
          </ModalContent>

          <CloseModal onClick={() => setOpen(false)}></CloseModal>
        </ModalWrapper>
      </Background>
    );
  }

  return null;
};
