import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserInfo, setEditedUserInfo] = useState({
    name: 'Chưa cập nhật',
    username: 'Chưa cập nhật',
    email: 'Chưa cập nhật',
    phone: 'Chưa cập nhật',
    address: 'Chưa thêm vào',
  });
  const userInfo = useSelector((state) => state.user.user);


  useEffect(() => {
    if (userInfo) {
      setEditedUserInfo({
        name: userInfo.name || 'Chưa cập nhật',
        username: userInfo.username || 'Chưa cập nhật',
        email: userInfo.email || 'Chưa cập nhật',
        phone: userInfo.phone || 'Chưa cập nhật',
        address: userInfo.address || 'Chưa thêm vào',
      });
    }
  }, [userInfo]);

  const handleSave = async () => {
    // Assuming you have an API endpoint to update user information
    try {
      const response = await fetch(`http://192.168.180.108:9089/users/${userInfo.id}`, {
        method: 'PUT', // or 'POST' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers like authentication token etc.
        },
        body: JSON.stringify(editedUserInfo)
      });

      if (response.ok) {
        // Update the user info or handle success message if necessary
        // ...
        setIsEditing(false);
      } else {
        // Handle the error, show an error message or revert changes
        console.log('Error updating user information');
        // You might want to handle the error case with user-friendly messages
      }
    } catch (error) {
      console.error('Error:', error);
      // You might want to handle the error case with user-friendly messages
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[editedUserInfo]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Name: </Text>
              <TextInput
                style={styles.input}
                value={item.name}
                onChangeText={(text) => setEditedUserInfo({ ...item, name: text })}
                editable={isEditing}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}>Username: </Text>
              <TextInput
                style={styles.input}
                value={item.username}
                onChangeText={(text) => setEditedUserInfo({ ...item, username: text })}
                editable={isEditing}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}>Email: </Text>
              <TextInput
                style={styles.input}
                value={item.email}
                onChangeText={(text) => setEditedUserInfo({ ...item, email: text })}
                editable={isEditing}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}>Phone: </Text>
              <TextInput
                style={styles.input}
                value={item.phone}
                onChangeText={(text) => setEditedUserInfo({ ...item, phone: text })}
                editable={isEditing}
              />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.label}>Address: </Text>
              <TextInput
                style={styles.input}
                value={item.address}
                onChangeText={(text) => setEditedUserInfo({ ...item, address: text })}
                editable={isEditing}
              />
            </View>

            {isEditing ? (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 50,
  },
  label: {
    fontWeight: 'bold',
    width: width * 0.3,
    fontSize: 15,
  },
  info: {
    flex: 1,
    fontSize: 15,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  editText: {
    color: 'white',
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: width * 0.4,
  },
  saveText: {
    color: 'white',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: width * 0.4,
  },
  cancelText: {
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
