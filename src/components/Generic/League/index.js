import styled from 'styled-components'
import axios from 'axios'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {useState, useEffect} from 'react'
import {Table} from '../Table'

const LeagueWrapper = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`
const CaruselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const CaruselDiv = styled.div`
  width: 40%;
`
const CaruselImg = styled.img`
  width: 100px;
  height: 100px;
`

export const League = ({id, setLoading, season}) => {
  const YEAR = 2022
  const HOST = 'v3.football.api-sports.io'
  const API_KEY = '5880559602f815374e8df04169c4901c'
  const headers = {
    "x-rapidapi-host": HOST,
    "x-rapidapi-key": API_KEY,
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  const [data, setData] = useState(null)
  const [teams, setTeams] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://v3.football.api-sports.io/teams?season=2023&league=${id}`, headers)
        console.log('response.data', response.data)
        setData(response.data)
        setTeams(response.data.response)
        setLoading(false)
        /* const localTeams = [
            {
                "team": {
                    "id": 563,
                    "name": "Hapoel Beer Sheva",
                    "code": "HAP",
                    "country": "Israel",
                    "founded": 1949,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/563.png"
                },
                "venue": {
                    "id": 867,
                    "name": "Yaakov Turner Toto Stadium",
                    "address": "Etsel Street 2",
                    "city": "Beer Sheva",
                    "capacity": 16126,
                    "surface": "grass",
                    "image": "https://media-2.api-sports.io/football/venues/867.png"
                }
            },
            {
                "team": {
                    "id": 604,
                    "name": "Maccabi Tel Aviv",
                    "code": "MAC",
                    "country": "Israel",
                    "founded": 1906,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/604.png"
                },
                "venue": {
                    "id": 10592,
                    "name": "Bloomfield Stadium",
                    "address": "Ha-Tkuma Street",
                    "city": "Tel-Aviv",
                    "capacity": 29400,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/10592.png"
                }
            },
            {
                "team": {
                    "id": 657,
                    "name": "Beitar Jerusalem",
                    "code": "BEI",
                    "country": "Israel",
                    "founded": 1936,
                    "national": false,
                    "logo": "https://media-2.api-sports.io/football/teams/657.png"
                },
                "venue": {
                    "id": 866,
                    "name": "Teddi Malcha Stadium",
                    "address": "David Ayalon",
                    "city": "Jerusalem",
                    "capacity": 33500,
                    "surface": "grass",
                    "image": "https://media-2.api-sports.io/football/venues/866.png"
                }
            },
            {
                "team": {
                    "id": 2253,
                    "name": "Hapoel Haifa",
                    "code": "HAP",
                    "country": "Israel",
                    "founded": 1924,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/2253.png"
                },
                "venue": {
                    "id": 868,
                    "name": "Sammy Ofer Stadium",
                    "address": "2 Rothenberg Street",
                    "city": "Haifa",
                    "capacity": 30820,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/868.png"
                }
            },
            {
                "team": {
                    "id": 4195,
                    "name": "Maccabi Haifa",
                    "code": "MAC",
                    "country": "Israel",
                    "founded": 1913,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/4195.png"
                },
                "venue": {
                    "id": 868,
                    "name": "Sammy Ofer Stadium",
                    "address": "2 Rothenberg Street",
                    "city": "Haifa",
                    "capacity": 30820,
                    "surface": "grass",
                    "image": "https://media-2.api-sports.io/football/venues/868.png"
                }
            },
            {
                "team": {
                    "id": 4481,
                    "name": "Bnei Sakhnin",
                    "code": "BNE",
                    "country": "Israel",
                    "founded": 1991,
                    "national": false,
                    "logo": "https://media-1.api-sports.io/football/teams/4481.png"
                },
                "venue": {
                    "id": 3402,
                    "name": "Doha Stadium",
                    "address": "1 Sakhnin Boulevard",
                    "city": "Sakhnin",
                    "capacity": 8500,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/3402.png"
                }
            },
            {
                "team": {
                    "id": 4486,
                    "name": "Hapoel Katamon",
                    "code": "HAP",
                    "country": "Israel",
                    "founded": 2007,
                    "national": false,
                    "logo": "https://media-2.api-sports.io/football/teams/4486.png"
                },
                "venue": {
                    "id": 866,
                    "name": "Teddi Malcha Stadium",
                    "address": "David Ayalon",
                    "city": "Jerusalem",
                    "capacity": 33500,
                    "surface": "grass",
                    "image": "https://media-1.api-sports.io/football/venues/866.png"
                }
            },
            {
                "team": {
                    "id": 4488,
                    "name": "Hapoel Petah Tikva",
                    "code": "HAP",
                    "country": "Israel",
                    "founded": 1934,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/4488.png"
                },
                "venue": {
                    "id": 3408,
                    "name": "HaMoshava Stadium",
                    "address": "Em Hamoshavot Road 12",
                    "city": "Petach-Tikva",
                    "capacity": 12500,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/3408.png"
                }
            },
            {
                "team": {
                    "id": 4495,
                    "name": "Maccabi Petah Tikva",
                    "code": "MAC",
                    "country": "Israel",
                    "founded": 1912,
                    "national": false,
                    "logo": "https://media-2.api-sports.io/football/teams/4495.png"
                },
                "venue": {
                    "id": 3408,
                    "name": "HaMoshava Stadium",
                    "address": "Em Hamoshavot Road 12",
                    "city": "Petach-Tikva",
                    "capacity": 12500,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/3408.png"
                }
            },
            {
                "team": {
                    "id": 4500,
                    "name": "Hapoel Hadera",
                    "code": null,
                    "country": "Israel",
                    "founded": null,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/4500.png"
                },
                "venue": {
                    "id": 11941,
                    "name": "Netanya Stadium",
                    "address": "HaMehkar Street",
                    "city": "Netanya",
                    "capacity": 13610,
                    "surface": "grass",
                    "image": "https://media-2.api-sports.io/football/venues/11941.png"
                }
            },
            {
                "team": {
                    "id": 4501,
                    "name": "Hapoel Tel Aviv",
                    "code": "HAP",
                    "country": "Israel",
                    "founded": 1926,
                    "national": false,
                    "logo": "https://media-1.api-sports.io/football/teams/4501.png"
                },
                "venue": {
                    "id": 10592,
                    "name": "Bloomfield Stadium",
                    "address": "Ha-Tkuma Street",
                    "city": "Tel-Aviv",
                    "capacity": 29400,
                    "surface": "grass",
                    "image": "https://media-3.api-sports.io/football/venues/10592.png"
                }
            },
            {
                "team": {
                    "id": 4505,
                    "name": "Maccabi Netanya",
                    "code": "MAC",
                    "country": "Israel",
                    "founded": 1934,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/4505.png"
                },
                "venue": {
                    "id": 11941,
                    "name": "Netanya Stadium",
                    "address": "HaMehkar Street",
                    "city": "Netanya",
                    "capacity": 13610,
                    "surface": "grass",
                    "image": "https://media-2.api-sports.io/football/venues/11941.png"
                }
            },
            {
                "team": {
                    "id": 4507,
                    "name": "Ashdod",
                    "code": "MOA",
                    "country": "Israel",
                    "founded": 1999,
                    "national": false,
                    "logo": "https://media-1.api-sports.io/football/teams/4507.png"
                },
                "venue": {
                    "id": 3419,
                    "name": "Yud-Alef Stadium",
                    "address": "Ha-Histadrut Street 6",
                    "city": "Ashdod",
                    "capacity": 7980,
                    "surface": "grass",
                    "image": "https://media-1.api-sports.io/football/venues/3419.png"
                }
            },
            {
                "team": {
                    "id": 6186,
                    "name": "Maccabi Bnei Raina",
                    "code": null,
                    "country": "Israel",
                    "founded": null,
                    "national": false,
                    "logo": "https://media-3.api-sports.io/football/teams/6186.png"
                },
                "venue": {
                    "id": 4579,
                    "name": "Municipal Stadium",
                    "address": null,
                    "city": "Reineh",
                    "capacity": 2500,
                    "surface": "grass",
                    "image": "https://media-1.api-sports.io/football/venues/4579.png"
                }
            }
        ]
        console.log('localTeams', localTeams)
        setTeams(localTeams) */
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  return (
    <LeagueWrapper>
      <CaruselContainer>
        <CaruselDiv>
            <Carousel responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    infinite={true}
                    partialVisible={false}
                    arrows={false}>
            {teams?.map((teamPackage, index) => {
                return (
                  <CaruselImg className='carusel-images' key={index} src={teamPackage?.team?.logo} alt="logo" />
                )
                })}
            </Carousel>
        </CaruselDiv>
      </CaruselContainer>
      <Table id={id} season={season}/>
    </LeagueWrapper>
  )
}