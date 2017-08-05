jest.mock('react-native-fabric', () => {
    return {
        Crashlytics: {
            crash: () => {},
        },
        Answers: {
            logCustom: () => {},
            logContentView: () => {},
        },
    }
});

jest.mock('react-native-device-info', () => {
    return {
    getUniqueID: jest.fn()
  }
});



