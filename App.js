import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YES: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: "black",
          
      });
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2));
  };
  return (
    <ScrollView keyboardDismissMode="true" style={styles.container}>
      <SafeAreaView>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter a Value"
            placeholdeTextColor="#c1c1c1"
            value={inputValue}
            onChangeText={inputValue => setInputValue(inputValue)}></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map(currency => (
            <TouchableOpacity
              onPress={() => buttonPressed(currency)}
              key={currency}
              style={styles.converterButton}>
              <Text>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};  

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    padding: 10,
  },
  temp: {
    fontSize: 15,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    backgroundColor: '#0f4c75',
    color: 'white',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  
  },
});
