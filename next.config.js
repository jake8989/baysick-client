module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://drab-cyan-raven-shoe.cyclic.app/api/:path*',
			},
		];
	},
};
