import Select from 'react-select'
import styled from 'styled-components'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: object) => ({
      ...provided,
      backgroundColor: 'var(--ui-color)',
      color: 'var(--text-color)',
      borderRadius: '5px',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided: object, state: any) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--text-color)',
      backgroundColor: state.isSelected ? 'var(--bg-color)' : 'var(--ui-color)',
    }),
  },
})`
  width: 200px;
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--text-color) !important;
  }
  & > div[id] {
    background-color: var(--ui-color);
  }
`
