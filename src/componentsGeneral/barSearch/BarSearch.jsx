import React, { useState } from 'react';
import { SearchGeneral } from './BarSearchStyle';

const BarSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // Enviar el término de búsqueda actualizado al componente padre (Certification)
    onSearch(value);
  };

  return (
    <>
      <SearchGeneral>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleChange}
        />
        <button>
          <img
            src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689604814/LIVE/Im%C3%A1genes/Icons/lupa_vx8efk.png"
            alt="Search Icon"
            width={20}
          />
        </button>
      </SearchGeneral>
    </>
  );
};

export default BarSearch;
