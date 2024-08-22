import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';

const trainers = [
    { id: 1, name: 'Hugo Marelize', specialty: 'Training Specialist', age: 34, location: 'Eco Park' },
    { id: 2, name: 'Alex Johnson', specialty: 'Training Specialist', age: 29, location: 'Eco Park' },
    { id: 3, name: 'Maria Smith', specialty: 'Master Trainer', age: 40, location: 'Highveld' },
    { id: 4, name: 'Irene Stevens', specialty: 'Certified Trainer', age: 28, location: 'Irene' },
];

const TrainerCard = ({ trainer }) => (
    <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        <View style={styles.cardContent}>
            <Text style={styles.specialty}>{trainer.specialty}</Text>
            <Text style={styles.name}>{trainer.name}</Text>
            <Text style={styles.details}>{trainer.specialty}</Text>
            <Text style={styles.details}>Age: {trainer.age}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Request booking</Text>
            </TouchableOpacity>
            <Text style={styles.location}>{trainer.location}</Text>
        </View>
    </View>
);

const ScheduleTrainerScreen = () => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Schedule a Personal Trainer</Text>
            <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Training Specialist</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Master Trainer</Text></TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Certified Trainer</Text></TouchableOpacity>
        </View>
        {trainers.map(trainer => <TrainerCard key={trainer.id} trainer={trainer} />)}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchBar: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    filterButton: {
        backgroundColor: '#d9534f',
        padding: 10,
        borderRadius: 20,
    },
    filterButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
    },
    specialty: {
        backgroundColor: '#d9534f',
        color: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#777',
    },
    button: {
        backgroundColor: '#d9534f',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginTop: 10,
    },
});

export default ScheduleTrainerScreen;
