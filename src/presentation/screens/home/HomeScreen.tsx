import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Productos" onPress={() => navigate('Products')}/>

      <PrimaryButton label="Configuración" onPress={() => navigate('Settings')}/>
    </View>
  );
};
