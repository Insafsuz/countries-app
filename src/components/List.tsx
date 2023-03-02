import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

interface ListProps {
  children: React.ReactNode
}

const List: React.FC<ListProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default List
