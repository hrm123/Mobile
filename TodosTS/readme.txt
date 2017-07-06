'npm run start:android'  - to start project in emulator or phone. When you change any tsx file compile in another terminal using npm run tsc and then double type rr in phone to reload.
'npm run tsc' - to compile typescript files into javasccript
cd android && ./gradlew clean && ./gradlew assembleRelease - to overcome any strange issues with app
npm test (or) yarn test - to run the specs or test in the app