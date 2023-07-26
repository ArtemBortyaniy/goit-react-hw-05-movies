import { Form, Input, Button } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ onSumbit }) => {
  const [queryParam, setQueryParam] = useState('');

  const handleInputChange = e => {
    setQueryParam(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    onSumbit(form.elements.films.value);
    setQueryParam('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <label>
        <Input
          name="films"
          type="text"
          value={queryParam}
          onChange={handleInputChange}
          required
        />
      </label>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
