import path from 'path';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    // Type guard for config.resolve
    if (config.resolve) {
      // Ensure alias is an object type and not an array
      config.resolve.alias = config.resolve.alias || {};

      // Explicitly type the alias to avoid errors
      (config.resolve.alias as { [key: string]: string })['@'] = path.resolve(process.cwd(), 'src');
    }

    return config;
  },
};

export default nextConfig;
