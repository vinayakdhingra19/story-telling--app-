import * as React from 'react'
import { Text, View } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Proflike Screen</Text>
            </View>
        )
    }
}
