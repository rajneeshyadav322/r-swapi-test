import { Box, Dialog, DialogTitle, Divider, Grid, IconButton, Typography } from '@mui/material';
import './index.css'
import useFetch from '../../utils/hooks/useFetch';
import { useEffect } from 'react';
import { formatDate } from '../../utils/formatDate';


const Character = ({ details, handleClose }) => {

  const open = Boolean(details)

  const { data: homeWorld, handleFetch } = useFetch()

  useEffect(() => {
    handleFetch(details?.homeworld)
  }, [details])

  return (
    <Dialog fullWidth open={open} onClose={handleClose} >
      <DialogTitle display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant='subtitle1'>
          {details?.name}
        </Typography>
        <IconButton size='small' onClick={handleClose} >
          ✕
        </IconButton>
      </DialogTitle>
      <Divider />
      <Grid container p={3} >
        <Grid item xs={5}>
          <img src={details?.image} />
        </Grid>
        <Grid item xs={7}>
          <Box className="info">
            <Typography variant='body2' width={120} >Added on</Typography>
            <Typography variant='body2'>{formatDate(details.created)}</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Birth Year</Typography>
            <Typography variant='body2'>{details.birth_year}</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Height</Typography>
            <Typography variant='body2'>{details.height} m</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Mass</Typography>
            <Typography variant='body2'>{details.mass} kg</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >No. of films</Typography>
            <Typography variant='body2'>{details.films.length}</Typography>
          </Box>


          <Box my={1}>
            <Divider />
          </Box>
          <Typography variant="body1" mb={0.5}>Homeworld details</Typography>
          <Box className="info">
            <Typography variant='body2' width={120} >Name</Typography>
            <Typography variant='body2'>{homeWorld?.name}</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Terrain</Typography>
            <Typography variant='body2'>{homeWorld?.terrain}</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Climate</Typography>
            <Typography variant='body2'>{homeWorld?.climate}</Typography>
          </Box>
          <Box className="info">
            <Typography variant='body2' width={120} >Residents</Typography>
            <Typography variant='body2'>{homeWorld?.residents.length}</Typography>
          </Box>

        </Grid>
      </Grid>
    </Dialog >
  )
}

export default Character