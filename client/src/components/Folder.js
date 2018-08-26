import React, { Component } from "react";
import styled, { css } from "styled-components";
import FileType from "../components/File";
import MyContext from "../context/MyContext";
import Arrow from "./Arrow";

const FolderContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const FolderIcon = styled.div`
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  margin: 20px;
  perspective: 300px;

  background-color: #75858e;

  &::before {
    position: absolute;
    background-color: #75858e;
    display: block;
    top: -5px;
    content: "";
    height: 5px;
    width: 20px;
  }

  &::after {
    content: "";
    height: 50px;
    width: 50px;
    position: absolute;
    background-color: #75858e;
    display: block;
    content: "";
    transform: rotateX(${({ open }) => (open ? "-47deg" : "0")});
    transform-style: preserve-3d;
    transform-origin: 50% 100%;
    transition: 0.25s all ease-in;
    ${({ open }) =>
      open &&
      css`
        border: 1px solid white;
      `};
  }
`;

const FolderName = styled.p`
  display: inline-block;
  color: #75858e;
`;

// TODO: need to find a way to use auto and a fixed height while
// allowing for transition to still take effect.
const ChildrenContainer = styled.div`
  margin-left: 30px;
  align-self: none;
  ${({ open }) =>
    !open ? `max-height: 0px;` : `max-height: 2000px;`} overflow: hidden;
  transition: 0.25s all ease-in;
`;

class Folder extends Component {
  state = {
    open: false
  };

  render() {
    const { name } = this.props.data;
    return (
      <div>
        <FolderContainer
          onClick={() =>
            this.setState(prevState => ({ open: !prevState.open }))
          }
        >
          <Arrow open={this.state.open} />
          <FolderIcon open={this.state.open} />
          <FolderName>
            {name.substr(0, 1).toUpperCase() + name.slice(1, name.length)}
          </FolderName>
        </FolderContainer>
        <ChildrenContainer open={this.state.open}>
          {this.props.data.children.map((item, i) => {
            if (item.type === "folder") return <Folder key={i} data={item} />;
            return (
              <MyContext.Consumer key={i}>
                {({ addFile, updateTotalSize }) => (
                  <FileType
                    key={i}
                    data={item}
                    incrementFileCount={addFile}
                    updateFileSize={updateTotalSize}
                  />
                )}
              </MyContext.Consumer>
            );
          })}
        </ChildrenContainer>
      </div>
    );
  }
}

export default Folder;
