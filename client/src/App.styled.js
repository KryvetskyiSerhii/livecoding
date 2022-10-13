import styled from "styled-components";

export const AppContainer = styled.div`
  width: 60vw;
  margin: 10vh auto 0px auto;
  border: 1px solid #000;
  min-height: 60vh;
`;

export const TasksBlock = styled.div`
  width: 45%;
  padding: 5px;
`;

export const TasksListStyled = styled.ul`
  list-style: none;
`;

export const TasksListItem = styled.li`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  border: 1px solid #000;
  border-radius: 10px;
`;

export const TasksText = styled.p``;
