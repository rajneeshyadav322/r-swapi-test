import { motion } from 'framer-motion'
import './index.css'
import { Typography } from '@mui/material'

const CharacterCard = ({ character }) => {

    return (
        <motion.div className='card'
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.25 },
            }}>
            <img src={character?.image} className='character-img' />
            <Typography className='character-name'>
                {character.name}
            </Typography>
        </motion.div>
    )
}

export default CharacterCard