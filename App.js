import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  let contador = 0;

  const incrementar = () => {
    contador++;
    console.log(`Valor de contador: ${contador}`); // Aqui vai incrementar, mas na UI não vai atualizar
    // Essa forma de concatenar string chama-se Template Literals (ou Template Strings)
  }

  // Inicializa o contadorState com 0
  // setContadorState é a função que atualiza o valor de contadorState
  const [contadorState, setContadorState] = useState(0);

  const incrementarAte10 = () => {
    setContadorState(prev => {
      if (prev < 10) {
        return prev + 1;
      }
      return 0;
    })
  }

  // const callBackFunctionDoUseEffect = () => {
  //   console.log('Executando função de limpeza do useEffect. Valor é: ', contadorState);
  // }

  // também poderia chamar uma função externa (callBackFunctionDoUseEffect) que faria a mesma coisa
  useEffect(() => {
    console.log('Executando useEffect. Valor é: ', contadorState);
  }, [contadorState]); // O array de dependências indica que o efeito deve ser executado sempre que contadorState mudar


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Text>O valor do contador é (sem atulizar UI): {contador}</Text>

          <Button title='Incrementar sem atualizar UI' onPress={incrementar} />

          {/* setContadorState recebe um novo valor para o estado contadorState.
              O React registra a alteração e re-renderiza o componente automaticamente,
              atualizando a UI com o novo valor.
           */}
          <Button title='Valor Fixo atualizando UI' onPress={() => setContadorState(10)} /> {/* Valor fixo */}
          <Button title='Incrementar atualizando UI' onPress={() => setContadorState(contadorState + 1)} /> {/* Valor dinâmico */}

          {/* Também é possível usar a forma de função para atualizar o estado */}
          <Button title='Incrementar atualizando UI (forma função)' onPress={() => setContadorState((prev) => { return prev + 1 })} /> {/* Valor dinâmico com arrow function verbose*/}
          <Button title='Incrementar atualizando UI (forma função)' onPress={() => setContadorState(prev => prev + 1)} /> {/* Valor dinâmico com arrow function compacta*/}

          {/* Incrementar utilizando função 'externa' */}
          <Button title='Incrementar com função externa' onPress={incrementarAte10} />

          <Text>O valor do contador é (ATUALIZANDO a UI): {contadorState}</Text>

        </View>

        <View style={styles.view2}>
          <Text>Exemplo de SafeAreaView alterando cor de fundo</Text>
        </View>
      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    flexBasis: 0,
  },
  view2: {
    flex: 1,
    flexBasis: 0,
    backgroundColor: 'lightblue',
  }
});
