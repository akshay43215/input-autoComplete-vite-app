import React, { useState } from 'react'
import { Suggestion } from '../Suggestion/Suggestion'

const AutoComplete = ({data}) => {
    const[suggestion, setSuggestion]=useState([])
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const[isActive, setIsActive]=useState(false)
    const [value , setValue] = useState('')
    console.log(data);

    const handleClick= (e)=> {
        const {value}=e.target.value
        setValue(value)
        setIsActive(false)
        console.log(value);
    }
    const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
          if (suggestionIndex === 0) {
            return;
          }
          setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
          if (suggestionIndex - 1 === suggestion.length) {
            return;
          }
          setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
          setValue(suggestion[suggestionIndex]);
          setSuggestionIndex(0);
          setIsActive(false);
        }
      }
      
    const handleChange = (e)=> {
        const query = e.target.value.toLowerCase()
        setValue(query)
        if(query.length>1) {
            const filteredSugg = data.filter(
                (itm)=> itm.toLowerCase().indexOf(query) > -1)
        setSuggestion(filteredSugg)
        setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
   

  return (
    <div className="autocomplete">
        <input type="text" 
         value={value}
         onChange={handleChange}
         onKeyDown={handleKeyDown}
        />
        {isActive && <Suggestion suggestions={suggestion} handleClick={handleClick} suggestionIndex={suggestionIndex}/>}
    </div>
  )
}

export default AutoComplete