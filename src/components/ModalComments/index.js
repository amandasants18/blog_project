import React from "react";
import { Title4 } from "../../styles/Modal.styles";
import {
  Background,
  CloseModal,
  ModalContent,
  ModalWrapper,
} from "../../styles/Modal.styles";
import { Description } from "../../styles/Post.styled";

export const ModalComments = ({ isOpen, dataComments, setOpen }) => {
  if (isOpen) {
    return (
      <Background>
        <ModalWrapper showModal={isOpen} dataComments={dataComments}>
          <ModalContent>
            {dataComments.map((comments) => {
              return (
                <>
                  <Title4>{comments.name}</Title4>
                  <Description>{comments.body}</Description>
                </>
              );
            })}
          </ModalContent>

          <CloseModal onClick={() => setOpen(false)}></CloseModal>
        </ModalWrapper>
      </Background>
    );
  }

  return null;
};
