import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function TabTwoScreen() {
    return(
    <View>
        <AntDesign name ="left" size={24} color="black" />
        <View style={styles.topButton}>
        <Text style={styles.title}>글쓰기</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    topButton: {
      width: 50,
      height: 20,
      backgroundColor: "#ffadad",
      borderRadius: 15,
      flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
      alignItems: 'center', // 세로 정렬
      paddingHorizontal: 10, // 수평 패딩 추가
    },
  });
  