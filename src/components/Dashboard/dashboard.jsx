import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [breeds, setBreeds] = useState([]);
    const [dogdata, setDogData] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [rehome, setRehome] = useState([]);

    // const [userId, setUserId] = useState(0); // Initialize userId with the appropriate initial value or fetch it from an API

    // var sentRehome1 = () => {
    //     // Replace 'your_user_id' with the actual user ID you want to send the email to
    //     const userId = 4;
    
    //     axios.post(`https://specialdog.online/api/email/${userId}`)
    //       .then(response => {
    //         console.log(response.data); // Email sent successfully message
    //       })
    //       .catch(error => {
    //         console.error('Error sending email:', error);
    //       });
    //   };


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        axios.get('https://specialdog.online/api/token')
        .then(response => {
            const token = response.data;
            // console.log(response.data)
            
            // Make a subsequent GET request to the API with the bearer token
            axios.get('https://specialdog.online/api/breeds', {
                headers: {
                    Authorization: `Bearer ${token}` // Properly interpolated token using backticks
                }
            })
            .then((response) => {
                setBreeds(response.data);
            })
            .catch((error) => console.error('Error fetching breeds', error));

            // Make a subsequent GET request to the API with the bearer token
            axios.get('https://specialdog.online/api/dogdata', {
                headers: {
                    Authorization: `Bearer ${token}` // Properly interpolated token using backticks
                }
            })
            .then((response) => {
                setDogData(response.data);
            })
            .catch((error) => console.error('Error fetching dog data', error));

            // Make a subsequent GET request to the API with the bearer token
            axios.get('https://specialdog.online/api/applicants', {
                headers: {
                    Authorization: `Bearer ${token}` // Properly interpolated token using backticks
                }
            })
            .then((response) => {
                setApplicants(response.data);
            })
            .catch((error) => console.error('Error fetching applicants', error));

            // Make a subsequent GET request to the API with the bearer token
            axios.get('https://specialdog.online/api/rehome', {
                headers: {
                    Authorization: `Bearer ${token}` // Properly interpolated token using backticks
                }
            })
            .then((response) => {
                setRehome(response.data);
                // console.log(response.data)
            })
            .catch((error) => console.error('Error fetching rehome', error));

        })
        .catch(error => {
            // Handle the token request error
            console.error(error);
        });
    };
    
    useEffect(() => {
        // Create DataTable after fetching data
        if (breeds.length > 0) {
            if (!$.fn.DataTable.isDataTable('#myTable')) {
                let table = new DataTable('#myTable', {
                pageLength: 5,
                lengthMenu: [5, 10, 25, 50, 100],
                responsive: true
                });
            }
        }
    
        if (dogdata.length > 0) {
            if (!$.fn.DataTable.isDataTable('#myTable1')) {
                let table1 = new DataTable('#myTable1', {
                pageLength: 3,
                lengthMenu: [3, 5, 10, 25, 50, 100],
                responsive: true
                });
            }
        }
    
        if (applicants.length > 0) {
            if (!$.fn.DataTable.isDataTable('#myTable2')) {
                let table2 = new DataTable('#myTable2', {
                pageLength: 5,
                lengthMenu: [5, 10, 25, 50, 100],
                responsive: true
                });
            }
        }

        if (rehome.length > 0) {
            if (!$.fn.DataTable.isDataTable('#myTable3')) {
                let table3 = new DataTable('#myTable3', {
                pageLength: 5,
                lengthMenu: [5, 10, 25, 50, 100],
                responsive: true
                });
            }
        }

    }, [breeds, dogdata, applicants, rehome]);
    
    // ADD DOG BREED

    const addDogBreed = () => {
        // Show SweetAlert with an input field when the "Add Dog Breed" button is clicked
        Swal.fire({
            title: 'Add Dog Breed',
            html: `
                <input type="text" id="breedName" className="swal2-input" placeholder="Enter Breed Name">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Add Breed',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                const breedName = document.getElementById('breedName').value;
                if (!breedName.trim()) {
                // Show an error message if the input field is empty
                    setBreeds([...breeds, response.data]);
                    Swal.fire({
                        title: 'Error',
                        text: 'Please enter a valid breed name.',
                        icon: 'error',
                });
                } else {
                // Make the API call to add the breed to your database
                
                axios.get('https://specialdog.online/api/token')
                .then(response => {
                    const token = response.data;

                    // Make a subsequent request to the API with the bearer token
                    axios.post('https://specialdog.online/api/breeds', { name: breedName }, {
                        headers: {
                            Authorization: `Bearer ${token}` // Added backticks to properly interpolate the token
                        }
                    })
                    .then((response) => {
                    setBreeds([...breeds, response.data]);
                    // If the request is successful, show a success message
                    Swal.fire({
                        title: 'Breed Added!',
                        text: `The dog breed "${breedName}" has been added successfully.`,
                        icon: 'success',
                    });
                    })
                    .catch((error) => {
                    // If there's an error with the API call, show an error message
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to add the breed. Please try again later.',
                        icon: 'error',
                    });
                    });
                })
                .catch(error => {
                    // Handle the token request error
                    console.error(error);
                });

                
                }
            }
        });
    };

    // UPDATE DOG BREED

    const editDogBreed = (id, currentName) => {
        // console.log('Received breed ID:', id);
        // console.log('Current breed name:', currentName);
        Swal.fire({
            title: 'Update Breed Name',
            html: `
                Enter New Name <input type="text" id="breedName" className="swal2-input" placeholder="Update Breed Name" value="${currentName || ''}">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Update Breed Name',
            cancelButtonText: 'Cancel',
            }).then((result) => {
            if (result.isConfirmed) {
                const updatedBreedName = document.getElementById('breedName').value;
                if (!updatedBreedName.trim()) {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter a valid breed name.',
                    icon: 'error',
                });
                } else {
                // Make the API call to update the breed name in your database
                // console.log('Breed ID to update:', id);

                axios.get('https://specialdog.online/api/token')
                    .then((response) => {
                    const token = response.data;

                    axios.put(`https://specialdog.online/api/breeds/${id}`, { name: updatedBreedName }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        })
                        .then((response) => {
                        // If the request is successful, show a success message
                        Swal.fire({
                            title: 'Breed Name Updated!',
                            text: `The dog breed name has been updated to "${updatedBreedName}" successfully.`,
                            icon: 'success',
                        });
                        // Update the breeds state with the updated breed name
                        setBreeds((prevBreeds) =>
                            prevBreeds.map((breed) => (breed.id === id ? { ...breed, name: updatedBreedName } : breed))
                        );
                        })
                        .catch((error) => {
                        // If there's an error with the API call, show an error message
                        Swal.fire({
                            title: 'Error',
                            text: 'Failed to update the breed name. Please try again later.',
                            icon: 'error',
                        });
                        });
                    })
                    .catch((error) => {
                    // Handle the token request error
                    console.error(error);
                    });
                }
            }
        });
    };
    
    // DELETE DOG BREED

    const deleteDogBreed = (id) => {
        // Show SweetAlert confirmation before deleting the breed
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this breed!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            closeOnConfirm: false,
        }).then((result) => {
            if (result.isConfirmed) {
            // Make the API call to delete the breed from the database

            axios.get('https://specialdog.online/api/token')
                .then((response) => {
                const token = response.data;

                axios
                    .delete(`https://specialdog.online/api/breeds/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    })
                    .then(() => {
                    // If the request is successful, show a success message
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The breed has been deleted successfully.',
                        icon: 'success',
                    });
                    // Update the breeds state by filtering out the deleted breed
                    setBreeds((prevBreeds) => prevBreeds.filter((breed) => breed.id !== id));
                    })
                    .catch((error) => {
                    // If there's an error with the API call, show an error message
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to delete the breed. Please try again later.',
                        icon: 'error',
                    });
                    });
                })
                .catch((error) => {
                // Handle the token request error
                console.error(error);
                });
            }
        });
    };
    
    // ADD DOG DATA

    const addDogData = () => {
        // Show SweetAlert with input fields when the "Add Dog Data" button is clicked
        Swal.fire({
            title: 'Add Dog Data',
            html: `
            <input type="text" id="dogDataName" class="swal2-input" placeholder="Enter Dog Name">
            <input type="text" id="dogDataDescription" class="swal2-input" placeholder="Enter Dog Description">
            <input type="number" id="dogDataAge" class="swal2-input" placeholder="Enter Dog Age">
            <input type="text" id="dogDataSex" class="swal2-input" placeholder="Enter Dog Sex">
            <input type="text" id="dogDataBreedId" class="swal2-input" placeholder="Enter Dog Breed Id">
            <input type="text" id="dogDataImgUrl" class="swal2-input" placeholder="Enter Dog Img Url">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Add Dog Data',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
            const dogName = document.getElementById('dogDataName').value;
            const dogDescription = document.getElementById('dogDataDescription').value;
            const dogAge = document.getElementById('dogDataAge').value;
            const dogSex = document.getElementById('dogDataSex').value;
            const dogBreedId = document.getElementById('dogDataBreedId').value;
            const dogImgUrl = document.getElementById('dogDataImgUrl').value;

            // Perform validation for required fields (e.g., dogName, dogBreedId)
            if (!dogName.trim() || !dogBreedId.trim()) {
                // Show an error message if the required fields are empty
                Swal.fire({
                title: 'Error',
                text: 'Please enter valid values for dog name and breed ID.',
                icon: 'error',
                });
            } else {
                // Make the API call to add the dog data to your database
                axios.get('https://specialdog.online/api/token')
                .then((response) => {
                    const token = response.data;

                    axios
                    .post('https://specialdog.online/api/dogdata', {
                        name: dogName,
                        description: dogDescription,
                        age: dogAge,
                        sex: dogSex,
                        breedId: dogBreedId,
                        imageUrl: dogImgUrl,
                    }, {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        // If the request is successful, show a success message
                        Swal.fire({
                        title: 'Dog Data Added!',
                        text: `The dog data for "${dogName}" has been added successfully.`,
                        icon: 'success',
                        });
                        // Update the dog data state with the added dog data
                        setDogData([...dogdata, response.data]);
                    })
                    .catch((error) => {
                        // If there's an error with the API call, show an error message
                        Swal.fire({
                        title: 'Error',
                        text: 'Failed to add the dog data. Please try again later.',
                        icon: 'error',
                        });
                    });
                })
                .catch((error) => {
                    // Handle the token request error
                    console.error(error);
                });
            }
            }
        });
    };


    // UPDATE DOG DATA

    const editDogData = (id, currentName, currentDescription, currentAge, currentSex, currentBreedId, currentImgUrl) => {
        // console.log(id);
        // console.log(currentName);
        Swal.fire({
            title: 'Update Dog Data',
            html: `
                Enter Dog Name <input type="text" id="dogDataName" className="swal2-input" placeholder="Update Dog Name" value="${currentName || ''}"> <br>
                Enter Dog Description <input type="text" id="dogDataDescription" className="swal2-input" placeholder="Update Dog Description" value="${currentDescription || ''}"> <br>
                Enter Dog Age <input type="number" id="dogDataAge" className="swal2-input" placeholder="Update Dog Age" value="${currentAge || ''}"> <br>
                Enter Dog Sex
                    <select id="dogDataSex" className="swal2-input">
                        <option value="male" ${currentSex === 'male' ? 'selected' : ''}>Male</option>
                        <option value="female" ${currentSex === 'female' ? 'selected' : ''}>Female</option>
                    </select>
                    <br>
                Enter Breed Id <input type="number" id="dogDataBreedId" className="swal2-input" placeholder="Update Breed ID" value="${currentBreedId || ''}"> <br>
                Enter Dog URL <input type="text" id="dogDataImgUrl" className="swal2-input" placeholder="Update Dog Img Url" value="${currentImgUrl || ''}">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Update Dog Data',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
            const updatedDogName = document.getElementById('dogDataName').value;
            const updatedDogDescription = document.getElementById('dogDataDescription').value;
            const updatedDogAge = document.getElementById('dogDataAge').value;
            const updatedDogSex = document.getElementById('dogDataSex').value;
            const updatedBreedId = document.getElementById('dogDataBreedId').value;
            const updatedDogImgUrl = document.getElementById('dogDataImgUrl').value;

            // Perform validation for required fields (e.g., updatedDogName, updatedBreedId)
            if (!updatedDogName.trim() || !updatedBreedId.trim()) {
                // Show an error message if the required fields are empty
                Swal.fire({
                title: 'Error',
                text: 'Please enter valid values for dog name and breed ID.',
                icon: 'error',
                });
            } else {
                // Make the API call to update the dog data in your database
                // console.log(' ID to update:', id);

                axios.get('https://specialdog.online/api/token')
                .then((response) => {
                    const token = response.data;

                    axios
                    .put(`https://specialdog.online/api/dogdata/${id}`, {
                        name: updatedDogName,
                        description: updatedDogDescription,
                        age: updatedDogAge,
                        sex: updatedDogSex,
                        breedId: updatedBreedId,
                        imageUrl: updatedDogImgUrl,
                    }, {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((response) => {
                        // If the request is successful, show a success message
                        Swal.fire({
                        title: 'Dog Data Updated!',
                        text: `The dog data for "${updatedDogName}" has been updated successfully.`,
                        icon: 'success',
                        });
                        // Update the dog data state with the updated dog data
                        setDogData((prevDogData) =>
                        prevDogData.map((dog) => (dog.id === id ? { ...dog, name: updatedDogName, description: updatedDogDescription, age: updatedDogAge, sex: updatedDogSex, breedId: updatedBreedId, imageUrl: updatedDogImgUrl } : dog))
                        );
                    })
                    .catch((error) => {
                        // If there's an error with the API call, show an error message
                        Swal.fire({
                        title: 'Error',
                        text: 'Failed to update the dog data. Please try again later.',
                        icon: 'error',
                        });
                    });
                })
                .catch((error) => {
                    // Handle the token request error
                    console.error(error);
                });
            }
            }
        });
    };

    // DELETE DOG DATA

    const deleteDogData = (id) => {
        // Show SweetAlert confirmation before deleting the breed
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this dog data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            closeOnConfirm: false,
        }).then((result) => {
            if (result.isConfirmed) {
            // Make the API call to delete the dog data from the database
            axios.get('https://specialdog.online/api/token')
                .then((response) => {
                const token = response.data;

                axios.delete(`https://specialdog.online/api/dogdata/${id}`, {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                })
                    .then(() => {
                    // If the request is successful, show a success message
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The dog data has been deleted successfully.',
                        icon: 'success',
                    });
                    // Update the dog data state by filtering out the deleted dog data
                    setDogData((prevDogData) => prevDogData.filter((dogdata) => dogdata.id !== id));
                    })
                    .catch((error) => {
                    // If there's an error with the API call, show an error message
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to delete the dog data. Please try again later.',
                        icon: 'error',
                    });
                    });
                })
                .catch((error) => {
                // Handle the token request error
                console.error(error);
                });
            }
        });
    };

    

    // UPDATE APPLICANTS INFORMATION

    const editAppInfo = (id, currentFirstName, currentLastName, currentStreet, currentCity, currentProvince, currentPhoneNum, currentEmail, currentMonthInc, currentDogName) => {
        // console.log(id);
        // console.log(currentFirstName);
        
        // const [currentZipCode, setZipcode] = useState('');
        
        Swal.fire({
            title: 'Update Applicant Information',
            html: `
            Enter First name <input type="text" id="appInfoFirstName" className="swal2-input" placeholder="Update First name" value="${currentFirstName || ''}"> <br>
            Enter Last name <input type="text" id="appInfoLastName" className="swal2-input" placeholder="Update Last name" value="${currentLastName || ''}"> <br>
            Enter Street <input type="text" id="appInfoStreet" className="swal2-input" placeholder="Update Street Address" value="${currentStreet || ''}"> <br>
            Enter City <input type="text" id="appInfoCity" className="swal2-input" placeholder="Update City Address" value="${currentCity || ''}"> <br>
            Enter Province <input type="text" id="appInfoProvince" className="swal2-input" placeholder="Update Province Address" value="${currentProvince || ''}"> <br>
            Enter Phone number <input type="number" id="appInfoPhoneNum" className="swal2-input" placeholder="Update Phone number" value="${currentPhoneNum || ''}"> <br>
            Enter Email <input type="text" id="appInfoEmail" className="swal2-input" placeholder="Update Email" value="${currentEmail || ''}"> <br>
            Enter Monthly Income <input type="number" id="appInfoMonthInc" className="swal2-input" placeholder="Update Monthly Income" value="${currentMonthInc || ''}"> <br>
            Enter Dog Name <input type="text" id="appInfoDogName" className="swal2-input" placeholder="Update Dog name" value="${currentDogName || ''}"> <br>
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Update Applicant Info',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
            const firstName = document.getElementById('appInfoFirstName').value;
            const lastName = document.getElementById('appInfoLastName').value;
            const street = document.getElementById('appInfoStreet').value;
            const city = document.getElementById('appInfoCity').value;
            const province = document.getElementById('appInfoProvince').value;
            const phoneNum = document.getElementById('appInfoPhoneNum').value;
            const email = document.getElementById('appInfoEmail').value;
            const monthlyIncome = document.getElementById('appInfoMonthInc').value;
            const dogName = document.getElementById('appInfoDogName').value;

            // Perform validation for required fields (e.g., firstName, dogName)
            if (!firstName.trim() || !dogName.trim()) {
                // Show an error message if the required fields are empty
                Swal.fire({
                title: 'Error',
                text: 'Please enter valid values for first name and dog name.',
                icon: 'error',
                });
            } else {
                // Make the API call to update the applicant data in your database
                // console.log('ID to update:', id);

                axios.get('https://specialdog.online/api/token')
                .then((response) => {
                    const token = response.data;
                    // console.log(firstName);
                    

                    axios.put(`https://specialdog.online/api/applicants/${id}`, {
                    firstName: firstName,
                    lastName: lastName,
                    street: street,
                    city: city,
                    province: province,
                    phoneNum: phoneNum,
                    email: email,
                    monthlyIncome: monthlyIncome,
                    dogName: dogName,
                    }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    })
                    .then((response) => {
                        // If the request is successful, show a success message
                        Swal.fire({
                        title: 'Applicant Data Updated!',
                        text: `The applicant data for "${firstName}" has been updated successfully.`,
                        icon: 'success',
                        });
                        // Update the applicants state with the updated applicant data
                        setApplicants((prevApplicants) =>
                        prevApplicants.map((applicant) => (applicant.id === id ? { ...applicant, firstName, lastName, street, city, province, phoneNum, email, monthlyIncome, dogName } : applicant))
                        );
                    })
                    .catch((error) => {
                        // If there's an error with the API call, show an error message
                        Swal.fire({
                        title: 'Error',
                        text: 'Failed to update the applicant data. Please try again later.',
                        icon: 'error',
                        });
                    });
                })
                .catch((error) => {
                    // Handle the token request error
                    console.error(error);
                });
            }
            }
        });
    };

    // DELETE APPLICANTS INFORMATION

    const deleteAppInfo = (id) => {
        // console.log(id);
        // Show SweetAlert confirmation before deleting the applicant data
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this applicant data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            closeOnConfirm: false,
        }).then((result) => {
            if (result.isConfirmed) {
            // Make the API call to delete the applicant data from the database

            axios.get('https://specialdog.online/api/token')
                .then((response) => {
                const token = response.data;

                axios.delete(`https://specialdog.online/api/applicants/${id}`, {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                })
                    .then(() => {
                    // If the request is successful, show a success message
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The applicant data has been deleted successfully.',
                        icon: 'success',
                    });
                    // Update the applicants state by filtering out the deleted data
                    setApplicants((prevApplicants) => prevApplicants.filter((applicant) => applicant.id !== id));
                    })
                    .catch((error) => {
                    // If there's an error with the API call, show an error message
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to delete the applicant data. Please try again later.',
                        icon: 'error',
                    });
                    });
                })
                .catch((error) => {
                // Handle the token request error
                console.error(error);
                });
            }
        });
    };

    // ADD REHOME DATA
    
    const addDRehomeData = () => {
        // Show SweetAlert with input fields when the "Add Dog Data" button is clicked
        Swal.fire({
            title: 'Add Rehome Data',
            html: `
            <input type="text" id="rehomeFrstname" className="swal2-input" placeholder="Enter Firstname">
            <input type="text" id="rehomeLastname" className="swal2-input" placeholder="Enter Lastname">
            <input type="text" id="rehomeAddress" className="swal2-input" placeholder="Enter Address">
            <input type="number" id="rehomePhonenumber" className="swal2-input" placeholder="Enter Phonenumber">
            <input type="email" id="rehomeEmail" className="swal2-input" placeholder="Enter Email">
            <input type="text" id="rehomeSocialmedia" className="swal2-input" placeholder="Enter Social media">
            <input type="text" id="rehomeDogname" className="swal2-input" placeholder="Enter Dog name">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Add Rehome Data',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                const rehomeFirstname = document.getElementById('rehomeFrstname').value;
                const rehomeLastname = document.getElementById('rehomeLastname').value;
                const rehomeAddress = document.getElementById('rehomeAddress').value;
                const rehomePhonenumber = document.getElementById('rehomePhonenumber').value;
                const rehomeEmail = document.getElementById('rehomeEmail').value;
                const rehomeSocialmedia = document.getElementById('rehomeSocialmedia').value;
                const rehomeDogname = document.getElementById('rehomeDogname').value;

            // Perform validation for required fields (e.g., rehomeDogname, rehomeDogBreedId)
            if (!rehomeFirstname.trim() || !rehomeDogname.trim()) {
                // Show an error message if the required fields are empty
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter valid values for dog name and breed ID.',
                    icon: 'error',
                });
            } else {
                // Make the API call to add the rehome data to your database
                axios.get('https://specialdog.online/api/token')
                    .then((response) => {
                        const token = response.data;

                        axios
                        .post('https://specialdog.online/api/rehome', {
                            firstname: rehomeFirstname,
                            lastname: rehomeLastname,
                            address: rehomeAddress,
                            phonenumber: rehomePhonenumber,
                            email: rehomeEmail,
                            socialmedia: rehomeSocialmedia,
                            selectedname: rehomeDogname
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        })
                        .then((response) => {
                            // If the request is successful, show a success message
                            Swal.fire({
                                title: 'Rehome Data Added!',
                                text: `The rehome data for "${rehomeDogname}" has been added successfully.`,
                                icon: 'success',
                            });
                            // Update the rehome data state with the added rehome data
                            setRehome([...rehome, response.data]);
                    })
                    .catch((error) => {
                        // If there's an error with the API call, show an error message
                        Swal.fire({
                        title: 'Error',
                        text: 'Failed to add the dog data. Please try again later.',
                        icon: 'error',
                        });
                    });
                })
                .catch((error) => {
                    // Handle the token request error
                    console.error(error);
                });
            }
            }
        });
    };

    // UPDATE REHOME DATA

    const editRehome = (id, currentFirstname, currentLastname, currentAddress, currentPhoneNumber, currentEmail, currentSocialMedia, currentSelectedDog) => {
        // console.log(id);
        // console.log(currentFirstname);
        Swal.fire({
            title: 'Update Rehome Data',
            html: `
                Enter Firstname <input type="text" id="RehomeFirstname" className="swal2-input" placeholder="Update Firstname" value="${currentFirstname || ''}"> <br>
                Enter Lastname <input type="text" id="RehomeLastname" className="swal2-input" placeholder="Update Lastname" value="${currentLastname || ''}"> <br>
                Enter Address <input type="text" id="RehomeAddress" className="swal2-input" placeholder="Update Address" value="${currentAddress || ''}"> <br>
                Enter Phone number <input type="number" id="RehomePhonenumber" className="swal2-input" placeholder="Update Phone number" value="${currentPhoneNumber || ''}"> <br>
                Enter Email <input type="email" id="RehomeEmail" className="swal2-input" placeholder="Update Email" value="${currentEmail || ''}"> <br>
                Enter Social Media <input type="text" id="RehomeSocialmedia" className="swal2-input" placeholder="Update Social Media" value="${currentSocialMedia || ''}"> <br>
                Enter Selected Dog <input type="text" id="RehomeSelectedDog" className="swal2-input" placeholder="Update Selected Dog" value="${currentSelectedDog || ''}">
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Update Rehome Data',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedFirstname = document.getElementById('RehomeFirstname').value;
                const updatedLastname = document.getElementById('RehomeLastname').value;
                const updatedAddress = document.getElementById('RehomeAddress').value;
                const updatedPhonenumber = document.getElementById('RehomePhonenumber').value;
                const updatedEmail = document.getElementById('RehomeEmail').value;
                const updatedSocialmedia = document.getElementById('RehomeSocialmedia').value;
                const updatedSelectedDog = document.getElementById('RehomeSelectedDog').value;
    
                // Perform validation for required fields (e.g., updatedFirstname)
                if (!updatedFirstname.trim()) {
                    // Show an error message if the required fields are empty
                    Swal.fire({
                        title: 'Error',
                        text: 'Please enter a valid value for Firstname.',
                        icon: 'error',
                    });
                } else {
                    // Make the API call to update the rehome data in your database
                    axios.get('https://specialdog.online/api/token')
                        .then((response) => {
                            const token = response.data;
    
                            axios
                                .put(`https://specialdog.online/api/rehome/${id}`, {
                                    firstname: updatedFirstname,
                                    lastname: updatedLastname,
                                    address: updatedAddress,
                                    phonenumber: updatedPhonenumber,
                                    email: updatedEmail,
                                    socialmedia: updatedSocialmedia,
                                    selectedname: updatedSelectedDog,
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                    },
                                })
                                .then((response) => {
                                    // If the request is successful, show a success message
                                    Swal.fire({
                                        title: 'Rehome Data Updated!',
                                        text: `The rehome data for "${updatedFirstname}" has been updated successfully.`,
                                        icon: 'success',
                                    });
                                    // Update the rehome data state with the updated rehome data
                                    setRehome((prevRehome) =>
                                        prevRehome.map((data) => (data.id === id ? { ...data, firstname: updatedFirstname, lastname: updatedLastname, address: updatedAddress, phonenumber: updatedPhonenumber, email: updatedEmail, socialmedia: updatedSocialmedia, selectedname: updatedSelectedDog } : data))
                                    );
                                })
                                .catch((error) => {
                                    // If there's an error with the API call, show an error message
                                    Swal.fire({
                                        title: 'Error',
                                        text: 'Failed to update the rehome data. Please try again later.',
                                        icon: 'error',
                                    });
                                });
                        })
                        .catch((error) => {
                            // Handle the token request error
                            console.error(error);
                        });
                }
            }
        });
    };
    
    // DELETE REHOME DATA

    const deleteRehome = (id) => {
        // console.log(id);
        // Show SweetAlert confirmation before deleting the rehome data
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this rehome data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Make the API call to delete the rehome data from the database
                axios.get('https://specialdog.online/api/token')
                    .then((response) => {
                        const token = response.data;
    
                        axios.delete(`https://specialdog.online/api/rehome/${id}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        })
                            .then(() => {
                                // If the request is successful, show a success message
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'The rehome data has been deleted successfully.',
                                    icon: 'success',
                                });
                                // Update the rehome state by filtering out the deleted data
                                setRehome((prevRehome) => prevRehome.filter((rehomeData) => rehomeData.id !== id));
                            })
                            .catch((error) => {
                                // If there's an error with the API call, show an error message
                                Swal.fire({
                                    title: 'Error',
                                    text: 'Failed to delete the rehome data. Please try again later.',
                                    icon: 'error',
                                });
                            });
                    })
                    .catch((error) => {
                        // Handle the token request error
                        console.error(error);
                    });
            }
        });
    };
    

    // SENT REHOME

    const sentRehome = () => {
        // Show SweetAlert success message
        Swal.fire({
            title: 'Email sent!',
            // text: 'You clicked the button!',
            icon: 'success',
        });
    };

    return (
        <main id='dashboardContainer'>

            {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-5 mt-5 text-center" id="ex1" role="tablist">

        <div className="col-lg-3 col-md-6 col-12 ">

            <li className="nav-item bs" role="presentation">
                <a
                    className="nav-link active "
                    id="ex3-tab-1"
                    data-mdb-toggle="pill"
                    href="#ex3-pills-1"
                    role="tab"
                    aria-controls="ex3-pills-1"
                    aria-selected="true"
                >
                    Breeds
                </a>
            </li>
        </div>
        
        <div className="col-lg-3 col-md-6 col-12">
            <li className="nav-item bs" role="presentation">
                <a
                    className="nav-link "
                    id="ex3-tab-2"
                    data-mdb-toggle="pill"
                    href="#ex3-pills-2"
                    role="tab"
                    aria-controls="ex3-pills-2"
                    aria-selected="false"
                >
                    Dog Data
                </a>
            </li>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <li className="nav-item bs" role="presentation">
                <a
                    className="nav-link "
                    id="ex3-tab-3"
                    data-mdb-toggle="pill"
                    href="#ex3-pills-3"
                    role="tab"
                    aria-controls="ex3-pills-3"
                    aria-selected="false"
                >
                    Applicants
                </a>
            </li>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <li className="nav-item bs" role="presentation">
                <a
                    className="nav-link"
                    id="ex3-tab-4"
                    data-mdb-toggle="pill"
                    href="#ex4-pills-4"
                    role="tab"
                    aria-controls="ex3-pills-4"
                    aria-selected="false"
                >
                    Rehome
                </a>
            </li>
        </div>
    </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content" id="ex2-content">
                <div
                    className="tab-pane fade show active"
                    id="ex3-pills-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                >
                    <section className="row">
                        <div className="col-12">
                            <h2>Breeds</h2>
                            <div>
                            <table id="myTable" className="display wrap" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Actions</th>
                                        </tr>                 
                                    </thead>
                                    <tbody>
                                        {breeds.map((breed) => (
                                            <tr key={breed.id} >
                                            <th scope="row">{breed.id}</th>
                                            <td>{breed.name}</td>
                                            <td>
                                                <span className='btn btn-sm btn-success' onClick={() => editDogBreed(breed.id, breed.name)}><i className="fas fa-edit"></i></span>
                                                <span className='btn btn-sm btn-danger ms-2 'onClick={() => deleteDogBreed(breed.id)}><i className="fas fa-trash"></i></span>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div id='tableLowBtn'>
                                    <span className='btn btn-success' onClick={addDogBreed}><i className="fa-solid fa-plus"> Add Dog Breed</i></span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="tab-pane fade"
                    id="ex3-pills-2"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-2"
                >
                    <section className="row">
                        <div className="col-12">
                        <h2>Dog Data</h2>
                                <div>
                                <table id="myTable1" className="display wrap" style={{width:'100%'}}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Sex</th>
                                                <th scope="col">Breed Id</th>
                                                <th scope="col">imageUrl</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dogdata.map((dog) => (
                                                <tr key={dog.id}>
                                                <th scope="row">{dog.id}</th>
                                                <td>{dog.name}</td>
                                                <td>{dog.description}</td>
                                                <td>{dog.age}</td>
                                                <td>{dog.sex}</td>
                                                <td>{dog.breedId}</td>
                                                <td>{dog.imageUrl}</td>
                                                <td>
                                                    <span className='btn btn-sm btn-success' onClick={() => editDogData(dog.id, dog.name, dog.description, dog.age, dog.sex, dog.breedId, dog.imageUrl)}>
                                                        <i className="fas fa-edit"></i>
                                                    </span>
                                                    <span className='btn btn-sm btn-danger ms-2' onClick={() => deleteDogData(dog.id)}>
                                                        <i className="fas fa-trash"></i>
                                                    </span>
                                                </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div id='tableLowBtn'>
                                        <span className='btn btn-success' onClick={addDogData}><i className="fa-solid fa-plus">Add Dog Data</i></span>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="tab-pane fade"
                    id="ex3-pills-3"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-3"
                >
                    <section className="row">
                        <div className="col-12">
                        <h2>Applicants Information</h2>
                            <div>
                            <table id="myTable2" className="display wrap" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">Street</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Province</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Monthly Income</th>
                                            <th scope="col">Have you adopt here before?</th>
                                            <th scope="col">Dog Name</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applicants.map((applicant) => (
                                            <tr key={applicant.id}>
                                            <th scope="row">{applicant.id}</th>
                                            <td>{applicant.firstname}</td>
                                            <td>{applicant.lastname}</td>
                                            <td>{applicant.street}</td>
                                            <td>{applicant.city}</td>
                                            <td>{applicant.province}</td>
                                            <td>{applicant.phonenumber}</td>
                                            <td>{applicant.email}</td>
                                            <td>{applicant.monthlyincome}</td>
                                            <td>{applicant.haveyouadoptfromherebefore}</td>
                                            <td>{applicant.dogname}</td>
                                            
                                            <td>
                                                {/* <span className='btn btn-sm btn-success' onClick={() => editAppInfo(applicant.id, applicant.firstname, applicant.lastname, applicant.street, applicant.city, applicant.province, applicant.phonenumber, applicant.email, applicant.monthlyincome, applicant.dogname)}>
                                                    <i className="fas fa-edit"></i>
                                                </span> */}
                                                <span className='btn btn-sm btn-danger' onClick={() => deleteAppInfo(applicant.id)}>
                                                    <i className="fas fa-trash"></i>
                                                </span>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div id='tableLowBtn'>
                                        {/* <span className='btn btn-success' onClick={addAppInfo}><i className="fa-solid fa-plus"> Add Applicant</i></span> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="tab-pane fade"
                    id="ex4-pills-4"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-4"
                >
                    <section className="row">
                        <div className="col-12">
                        <h2>Rehome</h2>
                            <div>
                            <table id="myTable3" className="display wrap" style={{width:'100%'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone number</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Social Media</th>
                                            <th scope="col">Selected Dog</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rehome.map((rehome) => (
                                            <tr key={rehome.id}>
                                            <th scope="row">{rehome.id}</th>
                                            <td>{rehome.firstname}</td>
                                            <td>{rehome.lastname}</td>
                                            <td>{rehome.address}</td>
                                            <td>{rehome.phonenumber}</td>
                                            <td>{rehome.email}</td>
                                            <td>{rehome.socialmedia}</td>
                                            <td>{rehome.selectedname}</td>
                                            <td>
                                                {/* <span className='btn btn-sm btn-success' onClick={() => editRehome(rehome.id, rehome.firstname, rehome.lastname, rehome.address, rehome.phonenumber, rehome.email, rehome.socialmedia, rehome.selectedname)}>
                                                    <i className="fas fa-edit"></i>
                                                </span> */}
                                                <span className='btn btn-sm btn-success' onClick={() => sentRehome()}>
                                                <i className="fa-solid fa-envelope"></i>
                                                </span>
                                                <span className='btn btn-sm btn-danger ms-2'  onClick={() => deleteRehome(rehome.id)}>
                                                    <i className="fas fa-trash"></i>
                                                </span>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* <div id='tableLowBtn'>
                                    <span className='btn btn-success' onClick={addDRehomeData}><i className="fa-solid fa-plus">Add Rehome Data</i></span>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <!-- Pills content --> */}

        </main>
    );
};

export default Dashboard;
