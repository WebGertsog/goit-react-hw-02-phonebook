import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px;
`;

export const Wraper = styled.div`
  padding: 15px 25px;
  width: 300px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  color: #f0f8ff;
  background: linear-gradient(
    0deg,
    rgba(135, 206, 235, 1) 0%,
    rgba(0, 111, 193, 1) 54%
  );
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
