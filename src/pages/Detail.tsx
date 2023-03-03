import axios from 'axios'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { ICountry } from '../types/types'

const Detail: React.FC = () => {
  const [country, setCountry] = useState<ICountry>()
  const { name } = useParams()

  const fetchCountry = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${name}?fields=name,capital,flags,population,region,alpha3Code`
      )
      setCountry(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchCountry()
  }, [])

  console.log(country)

  return (
    <Container>
      <span>{country.name}</span>
    </Container>
  )
}

export default Detail
