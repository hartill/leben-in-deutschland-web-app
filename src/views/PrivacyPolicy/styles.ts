import styled from '@emotion/styled'
import { theme } from '../../theme'

export const AppDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow-y: auto;
`

export const AppContent = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const AppContentInner = styled.div`
  flex: 1;
  color: #e6e6e6;
  max-width: 600px;
  padding: 1rem;
`
