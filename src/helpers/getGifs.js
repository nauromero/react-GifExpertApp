export const getGifs = async (category) => {
	const apiKey = 'jlm4ReXopYJ6VMCAwGMmU4edecRk1kqy';
	const resp = await fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=${apiKey}`);
	const { data } = await resp.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};
