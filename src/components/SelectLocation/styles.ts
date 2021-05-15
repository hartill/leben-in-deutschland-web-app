import styled from '@emotion/styled'
import chevron from './../../svg/icon-chevron.svg'
import { theme } from '../../theme'

const SelectLocationContainer = styled.div`
  width: 100%;
  min-width: ${theme.size.minColumnWidth};
  max-width: ${theme.size.maxColumnWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0px 15px;

  .selectLocation {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 1rem;
  }

  .selectLocation select {
    flex-basis: 100%;
    border-radius: 0;
    background: ${theme.colors.midGrey} url(${chevron}) 95% 50% no-repeat;
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: 1rem;
    padding: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border: none;
  }

  .selectLocation option:checked,
  .selectLocation option:hover {
    background: ${theme.colors.midGrey};
  }
`

export { SelectLocationContainer }
