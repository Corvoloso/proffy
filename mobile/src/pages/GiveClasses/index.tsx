import React, { useCallback } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackgroundImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBackgroundImg}
        resizeMode="contain" style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web</Text>
      </ImageBackground>

      <RectButton
          onPress={handleNavigateBack}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Tudo bem
          </Text>
        </RectButton>
    </View>
  )
};

export default GiveClasses;
