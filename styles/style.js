import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: '3%',
    marginBottom: '2%',
    fontSize: 20,
    fontFamily: 'mt-semi-bold',
    color: '#333',
    textAlign: 'center'
  },
  thumbnail: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  list: {
    color: '#333',
    textAlign: 'center',
    margin: '.8%'
  },
  search: {
    alignSelf: "flex-end",
    marginTop: -50,
    marginBottom: 20,
    zIndex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "baseline",
    height: 40,
    marginBottom: 50,
  },
  input: {
    borderBottomWidth: 1,
    marginHorizontal: '20%',
    borderBottomColor: '#333'
  },
  clearButton: {
    marginTop: -25,
    marginLeft: '75%'
  }
});
