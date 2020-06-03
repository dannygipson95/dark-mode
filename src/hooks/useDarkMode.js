import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

export function useDarkMode(){
   const [value, setValue] = useLocalStorage('darkMode', false)

    useEffect(()=>{
        if(value === false){
            document.body.classList.remove('dark-mode')
        } else {
            document.body.classList.add('dark-mode')
        }
    }, [value]) 

    return [value, setValue]
}


