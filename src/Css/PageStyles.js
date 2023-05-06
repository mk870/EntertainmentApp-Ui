import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.hasError ? "center" : "start")};
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  padding-bottom: 20px;
  gap: 15px;
`;