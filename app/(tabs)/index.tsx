import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {

  const mostrarAlerta = () => {
    Alert.alert("Mensagem", "Bem-vindo ao meu aplicativo!");
  };

  return (
    <View style={styles.container}>

      <Image
        source={require("@/assets/images/foto.jpg")}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        Mailson Marques
      </Text>

      <Text style={styles.curso}>
        Sistemas para Internet
      </Text>

      <Text style={styles.frase}>
        "Persista e insista, o resultado virá!"
      </Text>

      <View style={styles.botao}>
        <Button
          title="Clique aqui"
          onPress={mostrarAlerta}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },

  curso: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },

  frase: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 20,
    color: "#666",
  },

  botao: {
    marginTop: 10,
    width: "60%",
  }

});
