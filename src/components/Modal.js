import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { airblue } from "../constants/color";
import zIndex from "../constants/z-index";

const Modal = props => {
  const { onClose, children } = props;
  return (
    <Overlay>
      <Container>
        <Header>
          {props.onClose && (
            <Text color={airblue} onClick={onClose}>
              閉じる
            </Text>
          )}
          <Text size={20}>{props.title}</Text>
        </Header>
        {children}
      </Container>
    </Overlay>
  );
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${zIndex.modal};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 8px;
`;

const Header = styled.div`
  height: 52px;
  text-align: center;
  padding: 16px;
  border-bottom: solid 1px gray;
`;

const CloseLink = styled(Text)`
  cursor: pointer;
  float: left;
`;

export default Modal;
