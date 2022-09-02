import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
    height: '100%',
  },
  textInput: {
    padding: 5,
    backgroundColor: '#eee',
    color: '#000',
    marginVertical: 5,
  },

  // Results styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {
    color: 'black',
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 110,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },

  // Drawing the line, near the inputs
  circle1: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 30,
    left: -7,
    borderRadius: 50,
  },
  circle2: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 90,
    left: -7,
    borderRadius: 50,
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 35,
    left: -5,
  },
});

export default styles;