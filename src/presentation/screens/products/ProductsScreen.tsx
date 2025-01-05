import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
];

export const ProductsScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Productos</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigate('Product', { id: item.id, name: item.name })}
            label={item.name}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>

      <PrimaryButton label="Ajustes" onPress={() => navigate('Settings')}/>
    </View>
  );
};
