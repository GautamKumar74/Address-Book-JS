class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        let addressPattern = /^[a-zA-Z0-9 ]{4,}$/;
        let zipPattern = /^[0-9]{6}$/;
        let phonePattern = /^[0-9]{10}$/;
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!namePattern.test(firstName)) throw new Error("Invalid First Name");
        if (!namePattern.test(lastName)) throw new Error("Invalid Last Name");
        if (!addressPattern.test(address)) throw new Error("Invalid Address");
        if (!addressPattern.test(city)) throw new Error("Invalid City");
        if (!addressPattern.test(state)) throw new Error("Invalid State");
        if (!zipPattern.test(zip)) throw new Error("Invalid Zip");
        if (!phonePattern.test(phoneNumber)) throw new Error("Invalid Phone Number");
        if (!emailPattern.test(email)) throw new Error("Invalid Email");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

// Test Cases
try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "Cityname", "Statename", "123456", "9876543210", "john.doe@example.com");
    console.log("Valid Contact Added:", contact1);
} catch (error) {
    console.error(error.message);
}

try {
    let contact2 = new Contact("jo", "Doe", "123", "Cty", "St", "1234", "98765", "john.doe@com");
    console.log("Valid Contact Added:", contact2);
} catch (error) {
    console.error(error.message);
}
