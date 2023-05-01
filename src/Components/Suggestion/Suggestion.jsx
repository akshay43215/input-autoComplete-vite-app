import React from 'react'

export const Suggestion = ({suggestions,handleClick,suggestionIndex}) => {
  return (
    <div className="suggestions">
        <ul>
            {
                suggestions.map((suggestion,idx)=> {
                    return (
                        <li 
                        className={idx === suggestionIndex ? "active" : ""}
                        onClick={handleClick} key={idx}>
                            {suggestion}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
