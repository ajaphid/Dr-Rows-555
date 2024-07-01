import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D4C41',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: '#6D4C41',
    marginBottom: 20,
    textAlign: 'center',
  },
  lotus: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  headshot: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D2691E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#6D4C41',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  video: {
    width: width * 0.9,
    height: height * 0.4,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  stepsContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  stepText: {
    fontSize: 18,
    color: '#6D4C41',
    marginBottom: 10,
  },
});

export default styles;
