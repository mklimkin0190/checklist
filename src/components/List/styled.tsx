import styled from 'styled-components'
import { Colors } from '../../constants'

export const Container = styled.div`
  padding: 0 32px 32px 32px;
  border-radius: 8px;
  color: ${Colors.text};
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: calc(100% - 20px);
`

export const TitleBox = styled.div`
  padding: 15px 0;
  margin: 12px 0;
  font-weight: 600;
`

export const Table = styled.div`
  border: 1px solid ${Colors.dark};
  border-radius: 6px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export const Items = styled.div`
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid ${Colors.dark};
  height: 20px;
`
