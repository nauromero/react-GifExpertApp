import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['']);

	// const handleAdd = () => {
	// 	// con el operador spread extraigo las categorias y agrego una nueva
	// 	setCategories([...categories, 'Verga']);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;

// jlm4ReXopYJ6VMCAwGMmU4edecRk1kqy
