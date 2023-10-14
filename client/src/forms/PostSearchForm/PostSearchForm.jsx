import PropTypes from 'prop-types';

import { useState } from 'react';

import './PostSearchForm.css';

const PostSearchForm = ({ setSearchParams, loading }) => {
  const [keyword, setKeyword] = useState('');

  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams(new URLSearchParams({ keyword }));
      }}
    >
      <input 
        placeholder='Buscar...'
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button disabled={loading}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        Buscar
      </button>
    </form>
  );
};

PostSearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostSearchForm;
