import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import catalogtSlice from '../../../store/reducers/catalogReduxer';
import styles from "./SearchCart.module.scss"

const Search = () => {

    const [showInput, setshowInput] = useState(true);
    const [textSearch, settextSearch] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onClick = () => {
        if (!textSearch) {
            setshowInput(!showInput);
        }
        if(textSearch) {
            dispatch(catalogtSlice.actions.addQuerySearch(textSearch))            
            settextSearch("")
            setshowInput(true)
            navigate('./catalog')
        }        
    }

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        settextSearch(e.target.value)
    }

    return (
        <>
            {showInput ?
                <div className={styles.search}>
                    <SearchIcon onClick={() => onClick()} style={{ color: 'rgba(0, 0, 0, .5)' }} fontSize='large' />
                </div>
                :
                <div className={styles.input_search}>
                    <input placeholder="Поиск" onChange={(e) => onchange(e)} type="text" value={textSearch}/>
                    <SearchIcon onClick={() => onClick()} style={{ color: 'rgba(0, 0, 0, .5)' }} fontSize='large' />
                </div>
            }


        </>
    )
}

export default Search