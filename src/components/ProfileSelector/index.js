import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  profile: any
};
export default class Auth extends Component<Props> {
  render() {
    const { profile } = this.props;

    return (
      <View>
        <Image
          style={styles.image}
          source={profile.avatar}/>
        <Text>
          Guest name: {profile.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white"
  }
});
