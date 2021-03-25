module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          helpers: './src/helpers',
          navigations: './src/navigations',
          services: './src/services',
          stores: './src/stores',
          styles: './src/styles',
        },
      },
    ],
  ],
};
