import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { airblue, navy } from "../constants/color";

const modalRoot = document.getElementById("tooltip-root");

class TooltipPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isClicked: false
    };
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  _handleHoverTooltip(e) {
    this.setState({
      isHovered: true
    });
    e.preventDefault();
  }

  _handleHoverOutTooltip(e) {
    this.setState({
      isHovered: false
    });
    e.preventDefault();
  }

  _renderBaloon(children) {
    const { color } = this.props;
    if (this.state.isHovered || this.state.isClicked) {
      return (
        <React.Fragment>
          <BaloonWrapper
            position={ReactDOM.findDOMNode(
              this.tooltip
            ).getBoundingClientRect()}
          >
            <BaloonPointer />
            <Baloon color={color}>
              <ContentText>{children}</ContentText>
            </Baloon>
          </BaloonWrapper>
        </React.Fragment>
      );
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Tooltip
          onMouseEnter={e => this._handleHoverTooltip(e)}
          onMouseLeave={e => this._handleHoverOutTooltip(e)}
          ref={node => (this.tooltip = node)}
        >
          ?
        </Tooltip>
        {ReactDOM.createPortal(this._renderBaloon(children), this.el)}
      </React.Fragment>
    );
  }
}
const ContentText = styled.span`
  font-size: 12px;
`;

const Tooltip = styled.div`
  width: 16px;
  height: 16px;
  color: white;
  border-radius: 16px;
  background-color: ${airblue};
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
`;

const BaloonWrapper = styled.div`
  position: absolute;
  left: ${props => props.position.left - 5}px;
  top: ${props => props.position.top + 20}px;
`;

const BaloonPointer = styled.span`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid ${props => (props.color ? props.color : navy)};
  z-index: 2; // 本当は必要ない
  position: absolute;
  top: 0px;
  left: 5px;
`;

const Baloon = styled.div`
  color: white;
  white-space: initial;
  background-color: ${props => (props.color ? props.color : navy)};
  width: 280px;
  padding: 12px;
  z-index: 2; // 本当は必要ない
  border-radius: 4px;
  text-align: left;
  line-height: 1.4;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 20px;
`;

export default TooltipPortal;
