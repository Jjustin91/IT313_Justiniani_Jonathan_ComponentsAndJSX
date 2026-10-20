import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.studentName}>{name}</Text>
        {isFullLoad && <Text style={styles.badge}>Full Load</Text>}
      </View>
      <Text style={styles.infoText}>Course: {course}</Text>
      <Text style={styles.infoText}>Units Enrolled: {units}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  badge: {
    backgroundColor: 'lightgreen',
    color: 'darkgreen',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
  infoText: {
    fontSize: 14,
    color: 'dimgray',
    marginTop: 2,
  },
});