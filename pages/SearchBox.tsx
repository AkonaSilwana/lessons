import {ChangeEvent, useState} from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import SearchBoxStyle from '../styles/SearchBoxStyles.module.css'
export interface SearchBoxProps {
    onSearch(term: string) :void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({onSearch}) => {
     const [value, setValue] = useState("")
    return(
        
           <form onSubmit={e =>{
            e.preventDefault();
            onSearch(value);
           }}>
            <div className={SearchBoxStyle["search-box"]}>
            <input
            type="text"
            placeholder="Search Lessons"
            value={value}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <button type='submit'><SearchIcon/></button>
            </div>
           </form>
           
    )
}

