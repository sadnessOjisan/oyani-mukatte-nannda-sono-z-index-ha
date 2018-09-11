import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { gray, airblue } from "../constants/color";
import zIndex from "../constants/z-index";

const modalRoot = document.getElementById("modal-root");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    const el = document.createElement("div");
    // const styledEl = el.setAttribute("style", "position:fixed");
    this.el = el;
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  _renderModal(children) {
    const { onClose, title } = this.props;
    return (
      <BackGround>
        <Container>
          <ModalHeader>
            {onClose && <CloseText onClick={onClose}>閉じる</CloseText>}
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          {children}
        </Container>
      </BackGround>
    );
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(this._renderModal(children), this.el);
  }
}

const BackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: ${zIndex.modal};
`;

const Container = styled.div`
  position: fixed;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background-color: white;
  border-radius: 0 0 8px 8px;
`;

const ModalHeader = styled.div`
  height: 52px;
  text-align: center;
  padding: 16px;
  border-bottom: solid 1px ${gray};
`;

const CloseText = styled.span`
  float: left;
  color: ${airblue};
  font-size: 16px;
  cursor: pointer;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
`;

export default ModalPortal;
