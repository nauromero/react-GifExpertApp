import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGif('Evangelion');

	return (
		<>
			<h3>{category || 'evangelion'}</h3>

			{loading && <p>Loading</p>}

			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
