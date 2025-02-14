import React from 'react'



interface FilterSearchProps {
    searchTerm: string; 
    setSearchTerm: (term: string) => void;  

}

function FilterSearch ({ searchTerm, setSearchTerm }: FilterSearchProps) {
  return (
    <input className='inputStyle'
    type="text"
    placeholder="İsme göre ara..."  
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} 
    />
  )
}

export default FilterSearch