import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormasPagamentoScreen } from '../screens/cliente/FormasPagamento';
import { MeusVeiculosScreen } from '../screens/cliente/MeusVeiculos';
import { NotificacoesScreen } from '../screens/cliente/Notificacoes';
import { PerfilScreen } from '../screens/cliente/Perfil';
import { PerfilStackParamList } from '../types';

const Stack = createNativeStackNavigator<PerfilStackParamList>();

export const PerfilNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PerfilHome" component={PerfilScreen} />
      <Stack.Screen name="MeusVeiculos" component={MeusVeiculosScreen} />
      <Stack.Screen name="FormasPagamento" component={FormasPagamentoScreen} />
      <Stack.Screen name="Notificacoes" component={NotificacoesScreen} />
    </Stack.Navigator>
  );
};