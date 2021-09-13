import React from 'react';
import { Image, Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.title}</Text>
      <Image
        style={gStyle.thumbnail}
        source={{ uri: route.params.thumbnail }}
      />
    </View>
  );
}
