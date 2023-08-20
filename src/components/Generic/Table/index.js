import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
  const TableDiv = styled.table`
  padding: 10px;
  margin: 10px 0;
  background-color: white;
`


export const Table = ({id, season}) => {
  const HOST = 'v3.football.api-sports.io'
  const API_KEY = '5880559602f815374e8df04169c4901c'
  const headers = {
    "x-rapidapi-host": HOST,
    "x-rapidapi-key": API_KEY,
  }
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchTable = async () => {
      try {
        const response = await axios.get(`https://v3.football.api-sports.io/standings?league=${id}&season=${season}`, headers)
        setData(response.data)
        console.log('response2', response.data)
      } catch(error) {
        console.log(error)
      }
    }
    fetchTable()
  }, [id, season])
  return (
    <TableWrapper>
      
    </TableWrapper>
  )
}