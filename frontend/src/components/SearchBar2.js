import React from 'react'
import {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {motion} from "framer-motion"
import "./SearchBar.css"
import "../content_components/SkatersContent"
import { changeContent, changeMenuLoc, keyPressedSetTrue, keyPressedSetFalse, setShowSearchList} from '../slices/cwSelectSlice';




const SearchBar2 = ({data, setSearchResults}) => {
    const contentSelected = useSelector((state) => state.selector);

    const whichName = () => {
        if (contentSelected.showContent === 'videos'){
            return data.videos_name
        } else if (contentSelected.showContent === 'skaters'){
            return data.skaters_name
        } else if (contentSelected.showContent === 'company'){
            return data.companies_name
        }
    }

    const [initialNothing, setInitialNothing] = useState(true)
    const dispatch = useDispatch()
    
    const handleSearchChange = (e) => {
    if (!e.target.value || e.target.value === ' ') {
        dispatch(setShowSearchList(0))
        return setSearchResults([])
    }
    // make funct that takes data as input, returns data.comp/vid/mus/sk8r
    const resultsArray = data.filter(data => data.skaters_fname.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(resultsArray)
    if(resultsArray.length == 0){
        dispatch(setShowSearchList(0))
        return setSearchResults(resultsArray)
    }else{
        dispatch(setShowSearchList(1))
        return setSearchResults(resultsArray)
    }
    }


    
    return (
    <div id='searchbar-div'>
        <div className="searchInput">
        <motion.input type={"text"} 
        initial={{scale: 0}} animate={{
        scale: contentSelected.showContent ? 3:0}} placeholder={ "Search for " + contentSelected.content + "..."} onChange={handleSearchChange}>
        </motion.input>
        </div>
    </div>
    )
}

export default SearchBar2
