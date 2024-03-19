/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'prosapac.com', 'web.prosapac.com', 'i0.wp.com']
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
