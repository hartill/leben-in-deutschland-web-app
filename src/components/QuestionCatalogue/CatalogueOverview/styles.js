import styled from '@emotion/styled'

const QuestionBoxInnerInner = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.active {
    background-color: #11a6ce;
    opacity: 1;
  }
`

export { QuestionBoxInnerInner }
