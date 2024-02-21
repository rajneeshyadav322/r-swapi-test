const useDebounce = (func, time = 1000) => {
  
  let timer;

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, time)
  }
}

export default useDebounce;