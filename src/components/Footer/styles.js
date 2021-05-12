import styled from '@emotion/styled'

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dd5152;
  cursor: pointer;
  border: none;
  padding: 0px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  flex-shrink: 0;
  flex-basis: 50%;
  height: 100%;
  cursor: pointer;
`

const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
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

export { NextButton, ResetButton }
