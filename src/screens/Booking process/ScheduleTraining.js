import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ScheduleTrainingScreen = () => {
    const [selectedType, setSelectedType] = useState('Private');

    return (
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.locationButton}>
                <Text style={styles.locationText}>Select training location</Text>
                <FontAwesome name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.trainingTypeSection}>
                <Text style={styles.trainingTypeLabel}>Select Type of Training</Text>
                <View style={styles.trainingTypeButtons}>
                    <TouchableOpacity
                        style={[styles.trainingTypeButton, selectedType === 'Private' && styles.selectedButton]}
                        onPress={() => setSelectedType('Private')}
                    >
                        <Text style={[styles.trainingTypeButtonText, selectedType === 'Private' && styles.selectedButtonText]}>
                            Private
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.trainingTypeButton, selectedType === 'Semi Private' && styles.selectedButton]}
                        onPress={() => setSelectedType('Semi Private')}
                    >
                        <Text style={[styles.trainingTypeButtonText, selectedType === 'Semi Private' && styles.selectedButtonText]}>
                            Semi Private
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.navigationButtons}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
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
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    locationText: {
        fontSize: 16,
        color: '#777',
    },
    trainingTypeSection: {
        marginTop: 20,
    },
    trainingTypeLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    trainingTypeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    trainingTypeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d9534f',
    },
    trainingTypeButtonText: {
        fontSize: 16,
        color: '#d9534f',
    },
    selectedButton: {
        backgroundColor: '#d9534f',
    },
    selectedButtonText: {
        color: 'white',
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
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

export default ScheduleTrainingScreen;
