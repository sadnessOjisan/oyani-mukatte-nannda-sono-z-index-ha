// @flow
import * as React from "react";
import styled from "styled-components";
import { black } from "../constants/color";

export default (props: Props) => {
  const { children, color, className, disable, size } = props;
  return (
    <DefaultTextStyle color={color} className={className || ""} size={size}>
      {children}
    </DefaultTextStyle>
  );
};

const DefaultTextStyle = styled.span`
  font-size: ${props => (props.size ? props.size : 16)}px;
  color: ${props => (props.color ? props.color : black)};
`;
