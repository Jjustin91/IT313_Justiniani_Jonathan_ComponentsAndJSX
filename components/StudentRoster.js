import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import StudentCard from './StudentCard';

const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const toggleReverse = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Class Roster</Text>

      <Text style={styles.counter}>
        {`Total Active: ${students.length} students enrolled`}
      </Text>

      <TouchableOpacity style={styles.reverseButton} onPress={toggleReverse}>
        <Text style={styles.buttonText}>Reverse Roster Order</Text>
      </TouchableOpacity>

      <View style={styles.cardList}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'whitesmoke',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black',
    marginBottom: 4,
  },
  counter: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 16,
    fontWeight: '500',
  },
  reverseButton: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  cardList: {
    marginTop: 4,
  },
});