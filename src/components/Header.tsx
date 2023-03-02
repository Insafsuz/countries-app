import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { FiMoon, FiSun } from 'react-icons/fi'

const HeaderEl = styled.header`
  padding: 28px 0;
  background-color: var(--ui-color);
  box-shadow: var(--shadow);
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  font-weight: 800;
`

const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  span {
    margin-left: 15px;
    text-transform: capitalize;
  }
`

const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeIcon onClick={toggleTheme}>
            {theme === 'dark' ? <FiMoon size={22} /> : <FiSun size={22} />}
            <span>{theme} Theme</span>
          </ThemeIcon>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
