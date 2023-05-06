import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-left:${(props)=>props.size ==="large"?"10px":"auto"};
`

export const grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-wrap:wrap;
  width: 99%;
  gap:10px;
`;