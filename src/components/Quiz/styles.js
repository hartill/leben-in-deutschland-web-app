import styled from '@emotion/styled'

const QuizContainer = styled.div`
  min-width: 15rem;
  max-width: 42rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 42rem) {
    height: 100%;
    justify-content: space-between;
  }
`

const DisplayImageText = styled.div`
  cursor: pointer;
  color: #555;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  &:hover {
    color: #222;
  }
`

const Milk = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  z-index: 100000;

  img {
    max-width: 100%;
  }
`

export { QuizContainer, DisplayImageText, Milk }
