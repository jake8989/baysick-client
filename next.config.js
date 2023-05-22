module.exports = {
	async headers() {
		return [
			{
				// Allow all requests from all origins
				source: '/(.*)',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					},
				],
			},
		];
	},
};
