import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { getGames } from '../api';
import { gStyle } from '../styles/style';
import { MaterialIcons } from '@expo/vector-icons';

export default function Main({ navigation }) {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);

  const handleChange = (text) => {
    setValue(text);
  };

  const loadScene = (item) => {
    navigation.navigate('FullInfo', item);
  };

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  useEffect(() => {
    setFilteredGames(games.filter(game => game.title.toLowerCase().includes(value.toLowerCase())));
  }, [value]);

  return (
    <SafeAreaView style={gStyle.main}>
      <TextInput
        value={value}
        style={gStyle.input}
        onChangeText={handleChange}
        placeholder="Поиск игры..."
      />
      <MaterialIcons
        style={gStyle.clearButton}
        onPress={() => setValue('')}
        name="clear"
        size={24}
        color="black"
      />
      <Text style={gStyle.title}>Игры</Text>
      <FlatList
        data={filteredGames}
        renderItem={({ item }) => <TouchableOpacity
          onPress={() => loadScene(item)}
        >
          <Text style={gStyle.list}>{item.title}</Text>
        </TouchableOpacity>}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
}
