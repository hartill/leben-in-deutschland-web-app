import styled from '@emotion/styled'
import { theme } from '../../../theme'

const AnswerOption = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0.85rem 0;
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: ${theme.colors.midFont};
  line-height: 1.2rem;

  &:hover {
    color: ${theme.colors.darkFont};
  }

  &.incorrectAnswer {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  }

  &.correctAnswer {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  }

  &.showCorrectAnswer {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  &.disabled {
    cursor: default;
  }

  &.disabled:hover {
    color: auto;
  }
`

const AnswerInput = styled.div`
  margin: 0 0.3rem 0 0.1rem;
  cursor: pointer;
  flex-shrink: 0;
`

export {
  AnswerOption,
  AnswerInput,
}
