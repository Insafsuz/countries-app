import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ICountry } from '../types/types'

const Wrapper = styled.article`
  background-color: var(--ui-color);
  box-shadow: var(--shadow);
  border-radius: 10px;
`

const CardImage = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 10px 10px 0px 0px;
`

const CardContent = styled.div`
  padding: 16px 24px 32px;
`

const CardTitle = styled.h3`
  font-weight: 800;
  margin: 0px 0px 16px 0px;
`

const CardList = styled.ul``

const CardListItem = styled.li`
  font-size: 14px;
  font-weight: 800;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  span {
    font-weight: 400;
  }
`

interface CardProps {
  country: ICountry
}

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <Link to={`country/${country.name}`}>
      <Wrapper>
        <CardImage src={country.flags.png} />
        <CardContent>
          <CardTitle>{country.name}</CardTitle>
          <CardList>
            <CardListItem>
              Population: <span>{country.population}</span>
            </CardListItem>
            <CardListItem>
              Region: <span>{country.region}</span>
            </CardListItem>
            <CardListItem>
              Capital: <span>{country.capital}</span>
            </CardListItem>
          </CardList>
        </CardContent>
      </Wrapper>
    </Link>
  )
}

export default Card
