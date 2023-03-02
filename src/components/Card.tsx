import styled from 'styled-components'
import { ICountry } from '../types/types'

const Wrapper = styled.article`
  background-color: var(--ui-color);
  box-shadow: var(--shadow);
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
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
  span {
    font-weight: 400;
  }
`

interface CardProps {
  country: ICountry
}

const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <Wrapper>
      <CardImage src={country.flags.png} />
      <CardContent>
        <CardTitle>Title</CardTitle>
        <CardList>
          <CardListItem>
            Region: <span>Europe</span>
          </CardListItem>
        </CardList>
      </CardContent>
    </Wrapper>
  )
}

export default Card
