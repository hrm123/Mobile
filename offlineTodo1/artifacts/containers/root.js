import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/common-styles.js';
class Root extends Component {
    renderIf(condition, content) {
        if (condition) {
            return content;
        }
        else {
            return null;
        }
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.body })));
    }
}
export default Root;
//# sourceMappingURL=root.js.map