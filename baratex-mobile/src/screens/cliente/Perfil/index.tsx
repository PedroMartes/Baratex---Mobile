import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import { PerfilStackParamList } from '../../../types';
import { styles } from './styles';

type NavigationProp = NativeStackNavigationProp<PerfilStackParamList, 'PerfilHome'>;

interface PerfilScreenProps {
  onLogout?: () => void;
}

export const PerfilScreen: React.FC<PerfilScreenProps> = ({ onLogout }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Meu Perfil</Text>

        <Card style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>PS</Text>
          </View>
          <Text style={styles.name}>Pedro Silva</Text>
          <Text style={styles.email}>pedro.silva@fatec.sp.gov.br</Text>
          <Text style={styles.cpf}>CPF: ***.456.789-**</Text>
        </Card>

        <Card>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('MeusVeiculos')}>
            <Text style={styles.menuItem}>🚗 Meus Veículos Cadastrados (2)</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('FormasPagamento')}>
            <Text style={styles.menuItem}>💳 Formas de Pagamento</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Notificacoes')}>
            <Text style={styles.menuItem}>🔔 Notificações</Text>
          </TouchableOpacity>
        </Card>

        <Button 
          title="Sair da Conta" 
          variant="outline" 
          style={styles.logoutButton} 
          onPress={onLogout} 
        />
      </View>
    </SafeAreaView>
  );
};