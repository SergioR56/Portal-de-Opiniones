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
        type='search'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button disabled={loading}>Buscar</button>
    </form>
  );
};

PostSearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostSearchForm;
