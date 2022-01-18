import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  display: block;
  padding: 0 7px 0 7px;
  line-height: 1.5;
  color: #212529;
  background-color: #fcf8eb;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
`;

export const FormBtn = styled.button.attrs({ type: "submit" })`
  display: block;
  margin-top: 20px;
  margin-left: 210px;
  padding: 4px;
  width: 90px;
  border-radius: 5px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: #f0f8ff;
  background: linear-gradient(
    120deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(2, 0, 36, 1) 20%,
    rgba(2, 0, 36, 1) 80%,
    rgba(0, 191, 233, 1) 100%
  );

  transition: all 250ms ease-out;

  &:hover {
    color: #020024;
    background: linear-gradient(
      120deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 212, 255, 1) 20%,
      rgba(0, 191, 233, 1) 80%,
      rgba(2, 0, 36, 1) 100%
    );
  }
`;
