import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  border: solid #75858e;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: rotate(${({ open }) => (open ? "45" : "-45")}deg);
  transition: 0.25s transform ease-in;
`;

export default ({ open }) => <Arrow open={open} />;
