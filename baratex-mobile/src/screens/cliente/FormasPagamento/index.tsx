import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import { theme } from '../../../config/theme';
import { styles } from './styles';

export const FormasPagamentoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerNav}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={20} color={theme.colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Formas de Pagamento</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>CARTÕES CADASTRADOS</Text>

        <Card style={styles.paymentCard}>
          <View style={styles.cardIconBox}>
            <Ionicons name="card-outline" size={22} color={theme.colors.primary} />
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentTitle}>Mastercard **** 4321</Text>
            <Text style={styles.paymentSub}>Expira em 08/28</Text>
          </View>
          <View style={styles.defaultTag}>
            <Text style={styles.defaultTagText}>Padrão</Text>
          </View>
        </Card>

        <Card style={styles.paymentCard}>
          <View style={styles.cardIconBox}>
            <Ionicons name="card-outline" size={22} color={theme.colors.textSecondary} />
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentTitle}>Visa **** 8890</Text>
            <Text style={styles.paymentSub}>Expira em 11/26</Text>
          </View>
        </Card>

        <Text style={styles.sectionTitle}>OUTRAS FORMAS DE PAGAMENTO</Text>

        <Card style={styles.paymentCard}>
          <View style={[styles.cardIconBox, { backgroundColor: '#DCFCE7' }]}>
            <Ionicons name="qr-code-outline" size={22} color={theme.colors.success} />
          </View>
          <View style={styles.paymentInfo}>
            <Text style={styles.paymentTitle}>Pix Instantâneo</Text>
            <Text style={styles.paymentSub}>Aprovação imediata na oficina</Text>
          </View>
        </Card>

        <Button
          title="+ Adicionar Novo Cartão"
          variant="outline"
          style={styles.addButton}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};