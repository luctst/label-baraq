import React from "react";
import { Container } from "../styles/Container";
import styled from "styled-components";

const SCHeader = styled(Container)``;

export default function () {
  return (
    <SCHeader as="header">
      <h1>Hello</h1>
    </SCHeader>
  );
}
