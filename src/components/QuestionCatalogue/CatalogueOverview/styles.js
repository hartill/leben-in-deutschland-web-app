import styled from '@emotion/styled'
import { theme } from '../../../theme'

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
    background-color: ${theme.colors.blue};
    opacity: 1;
  }
`

export { QuestionBoxInnerInner }
