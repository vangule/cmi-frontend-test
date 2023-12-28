/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol : 'https',
				hostname : 'i.postimg.cc',
			},
			{
				protocol:'https',
				hostname:'source.unsplash.com',
			}
		],
	},
}

module.exports = nextConfig
