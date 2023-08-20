import { useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@mui/material/Tooltip'

const SelectWrapper = styled.div`
  border: 1px solid #fff;
  padding: 5px 40px;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  width: 60%;
  letter-spacing: 0.10em;
  text-transform: none;
`
const SelectTrigger = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`
const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  text-align: center;
`
const Option = styled.li`
  padding: 8px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const Select = ({season, setSeason}) => {
  const options = [
    {
        season: '2023',
        representSeason: '2023-2024',
    },
    {
        season: '2022',
        representSeason: '2022-2023',
    },
    {
        season: '2021',
        representSeason: '2021-2022',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const handleOptionClick = (option) => {
    setSeason(option)
    setIsOpen(false)
  }
  
  return (
    <SelectWrapper onClick={() => setIsOpen(!isOpen)}>
      <Tooltip title="Select season">
        <SelectTrigger>
            {options.map(option => {
                if (option.season === season) return option.representSeason
            })}
        </SelectTrigger>
      </Tooltip>
      <OptionsList $isOpen={isOpen}>
          {options.map((option, index) => (
          <Option key={index} onClick={() => handleOptionClick(option.season)}>
              {option.representSeason}
          </Option>
          ))}
      </OptionsList>
    </SelectWrapper>
  )
}
