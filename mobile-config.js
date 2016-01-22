App.info({
  id: 'com.yappie.todo',
  name: 'Yappie Todo',
  description: 'Sample app for managing to-dos',
  author: 'Steven Yap',
  email: 'stevenyap@futureworkz.com',
  website: 'http://www.futureworkz.com'
});

// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png'
// });
//
// App.launchScreens({
//   'iphone': 'splash/Default~iphone.png',
//   'iphone_2x': 'splash/Default@2x~iphone.png'
// });

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
