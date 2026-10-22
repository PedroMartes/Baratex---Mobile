import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../../../components/common/Card';
import { theme } from '../../../config/theme';
import { styles } from './styles';

const MOCK_NOTIFICACOES = [
  {
    id: '1',
    titulo: 'Agendamento Confirmado! 📅',
    mensagem: 'Auto Center Silva confirmou seu agendamento para 25/10 às 14:00.',
    tempo: 'Há 10 min',
    tipo: 'agendamento',
    lida: false,
  },
  {
    id: '2',
    titulo: 'Manutenção Registrada 🚗',
    mensagem: 'Troca de pastilhas adicionada com sucesso à sua Garagem Virtual.',
    tempo: 'Há 2 dias',
    tipo: 'garagem',
    lida: true,
  },
  {
    id: '3',
    titulo: 'Cupom de Desconto 🛠️',
    mensagem: 'Aproveite 15% OFF em troca de óleo neste fim de semana.',
    tempo: 'Há 5 dias',
    tipo: 'promo',
    lida: true,
  },
];

export const NotificacoesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerNav}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={20} color={theme.colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={MOCK_NOTIFICACOES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'notifications-outline';
            let bgIcon = '#EFF6FF';
            let colorIcon = theme.colors.primary;

            if (item.tipo === 'agendamento') {
              iconName = 'calendar';
              bgIcon = '#DCFCE7';
              colorIcon = theme.colors.success;
            } else if (item.tipo === 'garagem') {
              iconName = 'shield-checkmark';
              bgIcon = '#FEF3C7';
              colorIcon = theme.colors.warning;
            }

            return (
              <Card style={styles.notificationCard}>
                <View style={[styles.iconBox, { backgroundColor: bgIcon }]}>
                  <Ionicons name={iconName} size={20} color={colorIcon} />
                </View>
                <View style={styles.notificationContent}>
                  <View style={styles.notifHeader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.notifTitle}>{item.titulo}</Text>
                      {!item.lida && <View style={styles.unreadDot} />}
                    </View>
                    <Text style={styles.notifTime}>{item.tempo}</Text>
                  </View>
                  <Text style={styles.notifMessage}>{item.mensagem}</Text>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};