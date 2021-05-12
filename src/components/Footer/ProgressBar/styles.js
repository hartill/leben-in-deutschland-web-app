import styled from '@emotion/styled'

const UserProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  background-color: #23212b;
  color: #fff;
  height: 100%;

  .UserProgress {
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    background-color: #2CC990;
    height: 100%;
  }

  .Score {
    z-index: 1;
  }
`

export { UserProgressContainer }
