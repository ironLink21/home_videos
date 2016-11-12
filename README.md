# SETUP 
##your local environment
copy android/local.properties.example to android/local.properties
modify the 'sdk.dir = *< path to local android sdk>*'
    mac example: /Users/USERNAME/Library/Android/sdk
    linux example: /opt/Android/sdk - or where ever you have android sdk installed

# APP MOCKUPS
https://app.moqups.com/haleyrmanning@gmail.com/mdcLooPHcO/edit/activate/HobpbhyaTp

# RUN APP ON EMULATOR
for ios: react-native run-ios *you can only run this on mac, it will automatically start an iOS emulator*
for android: react-native run-android *you have to have an android emulator created and running first before this will work*
--setup an [android emulator](https://developer.android.com/studio/run/managing-avds.html)

# firebase stuff
Future modifications to database.rules.json will update Database Rules when you run
*firebase deploy*.

# FILE STRUCTURE
./android, ./ios - you don't usually need to modify content in these directories
index.android.js, index.ios.js - this is the inital place for the react-native build for specific platform
###*note: - you can add '.android.js or .ios.js' at the end of a component to specify that it's only used for that specific platform* 

```
app - this is where all the app code will live
 |
 |- index.js - this is the initial place where the app gets loaded
 |
 |- assets: - all assets, images, videos, sounds
 |
 |- config: - all relative paths and config files
 | 
 |- js:
     |- components: all components for different pages, views, etc.
     |
     |- constants: all components that are constant (header bar, footer bar, buttons, etc.)
     |
     |- json: any static json files
     |
     |- libs: custom libraries that have been written, however, most files here should be found in a npm package
     |
     |- routes: code for routing to different components for view transitions
```
