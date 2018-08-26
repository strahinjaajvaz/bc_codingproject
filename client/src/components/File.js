import React, { Component } from "react";
import styled from "styled-components";

import { formatBytes } from "../utils/helper";

const Container = styled.div`
  display: flex;
  margin: 20px;
  margin-left: 40px;
`;

const FileContainer = styled.div`
  position: relative;
  height: 50px;
  width: 40px;
  background-color: #75858e;
  display: inline-block;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    height: 12px;
    width: 12px;
    border: 2px solid white;
  }

  &::after {
    content: "";
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    background-color: white;
    position: absolute;
    bottom: -8px;
    right: -8px;
  }

  div {
    height: 5px;
    width: 26px;
    background-color: white;
    position: absolute;
    top: 25px;
    right: 7px;

    &::before {
      content: "";
      height: 5px;
      width: 26px;
      position: absolute;
      top: -10px;
      right: 0px;
      background-color: white;
    }

    &::after {
      content: "";
      height: 5px;
      width: 12px;
      position: absolute;
      top: 10px;
      left: 0px;
      background-color: white;
    }
  }
`;

const FileName = styled.p`
  font-size: 1.6rem;
  color: #75858e;
  display: inline-block;
  margin-left: 30px;

  span {
    padding-left: 10px;
    font-size: 1.2rem;
  }
`;

export default class extends Component {
  componentDidMount() {
    this.props.incrementFileCount();
    this.props.updateFileSize(this.props.data.size);
  }
  render() {
    const {name, size} = this.props.data;

    return (
      <Container>
        <FileContainer>
          <div />
        </FileContainer>
        <FileName>
          {name}
          <span>{formatBytes(size)}</span>
        </FileName>
      </Container>
    );
  }
}
