//
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://10.10.40.145:8010/pds/:path*'
      }
    ]
  }
};

export default nextConfig;
