/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'prosapac.com']
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
