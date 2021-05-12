import styled from '@emotion/styled'

const HeaderContainer = styled.div`
  color: #fff;
  height: 3.75rem;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  background-color: #23212b;

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    @media screen and (max-width: 48rem) {
      font-size: 1rem;
    }
  }
`

const HeaderLeftSection = styled.div`
  box-sizing: border-box;
  flex: 0 0 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderCenterSection = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media screen and (max-width: 48rem) {
    padding: 0 0.5rem;
  }
`

const HeaderRightSection = styled.div`
  box-sizing: border-box;
  flex: 0 0 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
`

export { HeaderContainer, HeaderLeftSection, HeaderCenterSection, HeaderRightSection, IconContainer }
