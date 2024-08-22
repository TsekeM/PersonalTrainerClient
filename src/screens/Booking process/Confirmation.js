import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const sessions = [
    {
        id: 1,
        date: '12 March',
        time: '6:15 to 7:15',
        type: 'Semi Private - Group of 4',
    },
    {
        id: 2,
        date: '12 March',
        time: '6:15 to 7:15',
        type: 'Semi Private - Group of 4',
    },
    {
        id: 3,
        date: '12 March',
        time: '6:15 to 7:15',
        type: 'Semi Private - Group of 4',
    },
];

const ConfirmationScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [payfastVisible, setPayfastVisible] = useState(false);

    const handleCancelPress = () => {
        setModalVisible(true);
    };

    const handleConfirmCancel = () => {
        setModalVisible(false);
        // Add the logic to cancel the booking here
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handlePayPress = () => {
        setPayfastVisible(true);
    };

    const handleClosePayfast = () => {
        setPayfastVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="bars" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Confirmation</Text>
            </View>
            <View style={styles.locationSection}>
                <Text style={styles.sectionLabel}>Location</Text>
                <TouchableOpacity style={styles.locationButton}>
                    <Text style={styles.locationText}>567 Mqantsa section, Tembisa 1632</Text>
                    <FontAwesome name="chevron-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.sessionsSection}>
                <Text style={styles.sectionLabel}>Sessions</Text>
                {sessions.map((session) => (
                    <View key={session.id} style={styles.sessionCard}>
                        <View style={styles.sessionDate}>
                            <Text style={styles.sessionDateText}>{session.date}</Text>
                        </View>
                        <View style={styles.sessionDetails}>
                            <Text style={styles.sessionTitle}>Hugh Marelize</Text>
                            <Text style={styles.sessionTime}>
                                <FontAwesome name="clock-o" size={14} color="#777" /> {session.time}
                            </Text>
                            <Text style={styles.sessionType}>{session.type}</Text>
                            <TouchableOpacity>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.totalSection}>
                <Text style={styles.grandTotalLabel}>Grand Total</Text>
                <Text style={styles.grandTotalAmount}>R700</Text>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancelPress}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.payButton} onPress={handlePayPress}>
                    <Text style={styles.payButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for cancel confirmation */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Are you sure you want to cancel your booking?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButtonNo} onPress={handleCloseModal}>
                                <Text style={styles.modalButtonText}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtonYes} onPress={handleConfirmCancel}>
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal for PayFast payment */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={payfastVisible}
                onRequestClose={handleClosePayfast}
            >
                <View style={styles.payfastContainer}>
                    <View style={styles.payfastHeader}>
                        <TouchableOpacity onPress={handleClosePayfast}>
                            <FontAwesome name="times" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <WebView
                        source={{
                            html: `
                                <form action=" https://sandbox.payfast.co.za​/eng/process" method="post">
                                    <input type="hidden" name="merchant_id" value="10000100">
                                    <input type="hidden" name="merchant_key" value="46f0cd694581a">
                                    <input type="hidden" name="return_url" value="https://www.example.com/success">
                                    <input type="hidden" name="cancel_url" value="https://www.example.com/cancel">
                                    <input type="hidden" name="notify_url" value="https://www.example.com/notify">
                                    <input type="hidden" name="amount" value="700.00">
                                    <input type="hidden" name="item_name" value="Test Product">
                                    <input type="submit" value="Proceed to PayFast">
                                </form>
                            `,
                        }}
                        style={{ marginTop: 20 }}
                    />
                </View>
            </Modal>
        </ScrollView>
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
    sectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    locationSection: {
        marginBottom: 20,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
    },
    locationText: {
        fontSize: 16,
        color: '#777',
    },
    sessionsSection: {
        marginBottom: 20,
    },
    sessionCard: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
    },
    sessionDate: {
        backgroundColor: '#d9534f',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    sessionDateText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    sessionDetails: {
        flex: 1,
    },
    sessionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sessionTime: {
        fontSize: 14,
        color: '#777',
        marginVertical: 5,
    },
    sessionType: {
        fontSize: 14,
        color: '#777',
    },
    editText: {
        color: '#d9534f',
        fontWeight: 'bold',
        marginTop: 5,
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    grandTotalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    grandTotalAmount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    cancelButton: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#777',
    },
    payButton: {
        padding: 15,
        backgroundColor: '#d9534f',
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
    },
    payButtonText: {
        fontSize: 16,
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButtonNo: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    modalButtonYes: {
        backgroundColor: '#d9534f',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 16,
        color: '#777',
    },
    payfastContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    payfastHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
});

export default ConfirmationScreen;