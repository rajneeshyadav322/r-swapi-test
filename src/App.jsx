import useFetch from './utils/hooks/useFetch'
import Search from './components/search/Search'
import { Box, CircularProgress, Grid, Pagination, Typography } from '@mui/material'
import CharacterCard from './components/character-card/CharacterCard'
import React, { useEffect, useMemo, useState } from 'react'
import Character from './components/character/Character'


function App() {

  const { data, error, loading, handleFetch } = useFetch()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [characterDetails, setCharacterDetails] = useState(null)

  const characters = useMemo(() => {
    return data?.results?.map((char, ind) => ({ ...char, image: `https://picsum.photos/200/300?${ind}` }))
  }, [data])

  const handleCharacter = (details) => {
    setCharacterDetails(details)
  }

  const count = data?.count ? data?.count / 10 : 1;

  const handlePageChange = (e, p) => {
    setPage(p)
  }

  useEffect(() => {
    const params = {
      page: page,
      search: search,
    }

    handleFetch("/people", params)
  }, [page, search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleClose = () => {
    setCharacterDetails(null)
  }


  return (
    <Grid container alignItems={"center"} my={4} flexDirection={"column"}>
      <Box width={250}>
        <Search handleSearch={handleSearch} />
      </Box>

      <Box display={"flex"} justifyContent={"center"}>

        {
          loading ?
            <Box minHeight={"70vh"} display={"flex"} alignItems={"center"}>
              <CircularProgress />
            </Box>
            :
            <Grid container spacing={4} width={"80vw"} minHeight={"70vh"} mt={4} >
              {
                error !== null
                  ?
                  <Typography variant="h5" textAlign={"center"} width="100%">{error?.message} !</Typography>
                  :
                  ( 
                    characters?.length === 0
                    ?
                    <Typography variant="h5" textAlign="center" width="100%">No Data Found!</Typography>
                    :
                    characters?.map((char, ind) =>
                      <Grid key={char.name} xs={12} md={3} item onClick={() => handleCharacter(char)}>
                        <CharacterCard character={char} />
                      </Grid>
                    )
                  )
                }
            </Grid>
        }
      </Box >

      <Box mt={3}>
        <Pagination count={Math.ceil(count)} onChange={handlePageChange} color='primary' />
      </Box>

      {
        characterDetails &&
        <Character details={characterDetails} handleClose={handleClose} />
      }
    </Grid >
  )
}

export default App
