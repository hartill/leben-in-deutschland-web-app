import styled from '@emotion/styled'

const ExamNextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dd5152;
  cursor: pointer;
  border: none;
  padding: 0px;
  flex-shrink: 0;
  flex-basis: 50%;
  height: 100%;
  cursor: pointer;

  &.innactive {
    background-color: #23212b;
    cursor: default;
    opacity: 0.4;
  }
`

const ExamResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex-shrink: 0;
  height: 100%;
  background-color: #dd5152;
  cursor: pointer;
  border: none;
  padding: 0px;
  transition: background-color 0.3s;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`

export { ExamNextButton, ExamResetButton }
