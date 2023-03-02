import { useEffect, useState } from 'react'

import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import Card from '../components/Card'
import List from '../components/List'
import { Container } from '../components/Container'
import { CustomSelect } from '../components/CustomSelect'
import axios from 'axios'

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0 40px 0;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--ui-color);
  box-shadow: var(--shadow);
  padding: 16px 8px 16px 20px;
  min-width: 280px;
  border-radius: 5px;
`

const Input = styled.input.attrs({
  placeholder: 'Search for a country...',
})`
  margin-left: 30px;
  outline: none;
  border: none;
  background-color: var(--ui-color);
  width: 100%;
  color: var(--text-color);
  padding: 0px 20px 0px 0px;
`

const Home: React.FC = () => {
  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ]

  const [countries, setCountries] = useState([])

  console.log(countries)

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        'https://restcountries.com/v2/all?fields=name,capital,flags,population,region,alpha3Code'
      )
      setCountries(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      <Container>
        <Menu>
          <InputContainer>
            <FiSearch size={18} />
            <Input />
          </InputContainer>
          <CustomSelect options={options} placeholder='Filter by Region' />
        </Menu>
        <List>
          {countries.map((country, i) => (
            <Card key={i} country={country} />
          ))}
        </List>
      </Container>
    </>
  )
}

export default Home
