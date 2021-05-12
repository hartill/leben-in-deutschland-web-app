import styled from '@emotion/styled'
import chevron from './../../svg/icon-chevron.svg'

const SelectLocationContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0px 15px;

  .selectLocation {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 15rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .selectLocation select {
    flex-basis: 100%;
    border-radius: 0;
    background: #3e4651 url(${chevron}) 95% 50% no-repeat;
    cursor: pointer;
    color: #fff;
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
    background: #37b1e3;
  }
`

export { SelectLocationContainer }
