import { Button } from 'react-native-paper';
import { disconnectButtonStyle } from './disconnectButtonStyle';

export default function DisconnectButton() {
  return (
    <Button

        style={disconnectButtonStyle.button}
        labelStyle={disconnectButtonStyle.text}
        >
  Desconectar da conta
</Button>
  );
}