/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'prosapac.com', 'web.prosapac.com']
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
