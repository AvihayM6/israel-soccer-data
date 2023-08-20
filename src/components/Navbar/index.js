import styled from 'styled-components'
import { ReactComponent as IsraelFlag } from '../../icons/israel-flag.svg'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
/* import Select from '@mui/material/Select' */
import {Select} from '../Generic/Select'


const NavbarWrapper = styled.div`
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1.1rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: white;
  font-weight: 100;
`
const IconNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
`
const SiteTitle = styled.div`
  margin-left: 10px;
`
const MenuItems = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
`
const HeaderItem = styled(Link)`
  margin-right: 40px;
  cursor: pointer;
  padding: 0 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #A0BFE0;
    border-radius: 5px;
  }
  &:active {
    background-color: #7895CB;
    transition: 0.4s;
    border-radius: 5px;
  }
  &:last-child {
    margin-right: 10px;
    &:hover, &:active {
      background-color: transparent;
    }
  }
  &:visited {
    color: #fff;
  }
`
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

export const Navbar = ({season, setSeason}) => {

  return (
    <NavbarWrapper>
      <IconNavbarWrapper>
        <IsraelFlag />
        <SiteTitle>
          Israel soccer data
        </SiteTitle>
        <MenuItems>
          <HeaderItem to='/'>
            <Img src='https://media-1.api-sports.io/football/leagues/383.png' alt="league-logo" />
            <span>Ligat Ha'al</span>
          </HeaderItem>
          <HeaderItem to='/liga-leumit'>
            <Img src='https://media-1.api-sports.io/football/leagues/382.png' alt="league-logo" />
            <span>Liga Leumit</span>
          </HeaderItem>
          <HeaderItem>
            {/* <FormControl sx={{
                margin: 1,
                minWidth: 120,
                color: 'white',
              }}
              size="small">
              <InputLabel 
                id="demo-simple-select-label"
                sx={{
                  color: 'white',
                }}>
                Season
              </InputLabel>
              <Select labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={season}
                      label="Season"
                      onChange={(e) => {setSeason(e.target.value)}}
                      sx={{
                        'color': 'white',
                        '&:before': {
                          'borderColor': 'white',
                        },
                        '&:after': {
                          'borderColor': 'white',
                        },
                        '& svg': {
                          fill: 'white',
                        },
                      }}>
                <MenuItem value={'2023'}>
                  2023-2024
                </MenuItem>
                <MenuItem value={'2022'}>2022-2023</MenuItem>
                <MenuItem value={'2021'}>2021-2022</MenuItem>
              </Select>
            </FormControl> */}
            <Select season={season} setSeason={setSeason}/>
          </HeaderItem>
        </MenuItems>
      </IconNavbarWrapper>
    </NavbarWrapper>
  )
}