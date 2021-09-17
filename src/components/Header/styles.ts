import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--blue-light);
    padding: 0 2rem;
    height: 3rem;
    color: #fff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`