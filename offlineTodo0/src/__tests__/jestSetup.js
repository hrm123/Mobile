/**
 * Created by Ramm on 7/4/2017.
 */
jest.mock('Linking', function () {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn()
    };
});
