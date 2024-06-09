// src/components/Record.tsx
import { Trail } from '@/src/types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TrailProps {
  trail: Trail;
}

const TrailHistoryComp = ({trail} : TrailProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name} numberOfLines={1}>{trail.name}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{trail.created.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}</Text>
        <Text style={styles.distance}>3.12km</Text>
        <Text style={styles.duration}>5시간 30분</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#d3e4cd',
    borderRadius: 15,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    width: '100%',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey',
  },
  location: {
    fontSize: 16,
    color: 'grey',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  distance: {
    fontSize: 14,
  },
  duration: {
    fontSize: 14,
  },
});

export default TrailHistoryComp;