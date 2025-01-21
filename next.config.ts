// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['localhost', '10.10.40.145'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://10.10.40.145:8010/pds/:path*'
//       }
//     ]
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', '10.10.40.145'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    return [
      {
        source: '/api/counselor/:path*',
        destination: 'http://localhost:4000/api/v1/counselor/:path*'
      },
      {
        source: '/api/:path*',
        destination: 'http://10.10.40.145:8010/pds/:path*'
      }
    ]
  }
};

export default nextConfig;