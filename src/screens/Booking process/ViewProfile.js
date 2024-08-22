import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const trainerProfile = {
    name: 'Hugh Marelize',
    status: 'Live',
    joined: 'Joined 1 week ago',
    bookingHistory: 50,
    reviews: { rating: 4.9, count: 96 },
    specialty: 'Master Trainer',
    experience: '2 years',
    specialization: 'Health, Nutritional Balance, & Fitness',
    description: 'Hugo Marelize here, your guide to integrating fitness and nutrition for optimal health. As a Certified Personal Trainer and Nutritionist, I believe in the power of combining exercise with healthy eating.',
    age: 32,
    gender: 'Male',
    address: '122 Valley Road, Pretoria',
    contact: '078 627 0859'
};

const ProfileScreen = () => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <FontAwesome name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.profileTitle}>Profile</Text>
        </View>
        <View style={styles.profileSection}>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.profileImage} />
            <Text style={styles.profileName}>{trainerProfile.name}</Text>
            <Text style={styles.profileStatus}>{trainerProfile.joined}</Text>
            <Text style={styles.liveStatus}>{trainerProfile.status}</Text>
        </View>
        <View style={styles.detailsSection}>
            <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>{trainerProfile.bookingHistory}</Text>
                <Text style={styles.detailsLabel}>Booking history</Text>
                <FontAwesome name="star" size={24} color="gold" />
                <Text style={styles.detailsText}>{trainerProfile.reviews.rating} ({trainerProfile.reviews.count} reviews)</Text>
            </View>
        </View>
        <View style={styles.infoSection}>
            <Text style={styles.specialty}>{trainerProfile.specialty}</Text>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Experience</Text>
                <Text style={styles.infoText}>{trainerProfile.experience}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Specialization</Text>
                <Text style={styles.infoText}>{trainerProfile.specialization}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Description</Text>
                <Text style={styles.infoText}>{trainerProfile.description}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Age</Text>
                <Text style={styles.infoText}>{trainerProfile.age} years</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Gender</Text>
                <Text style={styles.infoText}>{trainerProfile.gender}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoText}>{trainerProfile.address}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Contact Details</Text>
                <Text style={styles.infoText}>{trainerProfile.contact}</Text>
            </View>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    profileTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    profileSection: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    profileStatus: {
        color: '#777',
        marginTop: 5,
    },
    liveStatus: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: 5,
    },
    detailsSection: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailsText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailsLabel: {
        fontSize: 14,
        color: '#777',
    },
    infoSection: {
        padding: 20,
    },
    specialty: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 14,
        color: '#777',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
    },
});

export default ProfileScreen;
