import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

const ScheduleTrainingDateScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const times = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM'];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="bars" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Schedule Training</Text>
            </View>
            <View style={styles.profileSection}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                <Text style={styles.profileName}>Hugh Marelize</Text>
                <Text style={styles.profileStatus}>Semi Private</Text>
            </View>
            <Text style={styles.slotLabel}>Nearest Hogo Marelize slots</Text>
            <Calendar
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                }}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#d9534f' },
                }}
                theme={{
                    todayTextColor: '#d9534f',
                    arrowColor: '#d9534f',
                }}
                style={styles.calendar}
            />
            <View style={styles.timesSection}>
                {times.map((time) => (
                    <TouchableOpacity
                        key={time}
                        style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
                        onPress={() => setSelectedTime(time)}
                    >
                        <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>
                            {time}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.viewCalendarText}>View Calendar</Text>
            <View style={styles.navigationButtons}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d9534f',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    profileSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    profileStatus: {
        color: '#777',
        marginTop: 5,
    },
    slotLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    calendar: {
        marginTop: 10,
    },
    timesSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 20,
    },
    timeButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    selectedTimeButton: {
        backgroundColor: '#d9534f',
    },
    timeText: {
        fontSize: 14,
        color: '#777',
    },
    selectedTimeText: {
        color: 'white',
    },
    viewCalendarText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9534f',
        textAlign: 'center',
        marginVertical: 20,
    },
    backButton: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 16,
        color: '#777',
    },
    nextButton: {
        padding: 15,
        backgroundColor: '#d9534f',
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default ScheduleTrainingDateScreen;
