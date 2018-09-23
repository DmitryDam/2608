import React from 'react';
import './Form.css';


const Form = ({ deleteById }) => {
	let form = null;
	let input = null;

	const onFormSubmit = (evt) => {

		evt.preventDefault();
		deleteById(input.value);

		form.reset();
	}

	return (
		<form className="SearchForm" onSubmit={onFormSubmit} ref={node => (form = node)}>
			<input className="SearchForm__input" placeholder="Delete by ID..." type="text" ref={node => (input = node)} />
			<button type="submit">submit</button>
		</form>		
	);
}

export default Form;