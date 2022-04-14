import React from 'react'

export const Header = ({ changeLanguage }) => {
   return (
      <div>
         <button onClick={() => changeLanguage("uz")}>uz</button>
         <button onClick={() => changeLanguage("en")}>en</button>
      </div>
   )
}
