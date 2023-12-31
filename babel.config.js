module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@tamagui/babel-plugin'],
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
          'screens/*': './screens/*',
          'redux/*': './redux/*',
          'navigation/*': './navigation/*',
          'providers/*': './providers/*',
        },
      },
    ],
  ],
};
