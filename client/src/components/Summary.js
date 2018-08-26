import React from "react";
import styled from "styled-components";
import {formatBytes} from "../utils/helper"

const Container = styled.div`
  border-top: 3px solid #d8d8d8;
  padding: 20px 15px;
`;

const StyledP = styled.p`
  font-size: 1.6rem;
  color: #75858e;
  margin: 0 0 10px;
`;

export default ({files, totalSize}) => {
    return (
        <Container>
            <StyledP>{`Total Files: ${files}`}</StyledP>
            <StyledP>{`Total Filesize: ${formatBytes(totalSize, 2)}`}</StyledP>
        </Container>
    );
};
