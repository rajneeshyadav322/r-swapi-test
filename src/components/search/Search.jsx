import './index.css'
import { motion } from "framer-motion"
import useDebounce from '../../utils/hooks/useDebounce'

const Search = ({ handleSearch }) => {

  const debouncedSearch = useDebounce(handleSearch)

  return (
    <motion.div className='search'>
      <input placeholder='Search ...' onChange={debouncedSearch} />
    </motion.div>
  )
}

export default Search