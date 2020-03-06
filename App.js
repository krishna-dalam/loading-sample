import React from "react";
import { StyleSheet, View, Image } from "react-native";
import LoadingIcon from "./LoadingIcon";

//We are using class component for App because we are using state object
class App extends React.Component {
  constructor(props) {
    super(props);

    //state object holding
    // isLoading - if true displays LoadingIcon else disappears
    // imageUrl  - to hold third party url which provides random dog pictures
    this.state = {
      isLoading: true,
      imageURL: null
    };
  }

  //As soon as App component mounts we are fetching the image.
  //LoadingIcon will display till the image loads
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        this.setState({
          isLoading: false,
          imageURL: jsonResponse.message
        });
      })
      .catch(error => {
        console.log("Error loading dog data: " + error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <LoadingIcon isLoading={this.state.isLoading} />
        <Image
          source={{ uri: this.state.imageURL }}
          style={{ width: 350, height: 300 }}
        />
      </View>
    );
  }
}

// Styling the container which is View
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
