module.exports =  function(api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            "@": "./src",
          }
        }
      ],
      [
        "module:react-native-dotenv", 
        {
          "moduleName": "react-native-dotenv", 
          "path": ".env", 
          "blocklist": null,
          "allowlist": null,
          "safe": true,
          "allowUndefined": true
        }
     ]
    ]
  }
};
