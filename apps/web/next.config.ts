/** @type {import('next').NextConfig} */

const { withExpo } = require("@expo/next-adapter");

interface WebpackConfig {
  resolve: {
    alias: { [key: string]: string };
    extensions: string[];
  };
}

interface NextConfig {
  reactStrictMode: boolean;
  transpilePackages: string[];
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "ui",
  ],
  webpack: (config: WebpackConfig): WebpackConfig => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
        "react-native-web/dist/cjs/modules/AssetRegistry",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = withExpo(nextConfig);
