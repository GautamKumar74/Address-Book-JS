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

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let isDuplicate = this.contacts.some(
            existingContact => existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
        );

        if (isDuplicate) {
            console.log("Duplicate contact found. Contact not added.");
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added:", contact.toString());
    }

    sortByName() {
        this.contacts.sort((a, b) => {
            let nameA = a.firstName.toLowerCase() + " " + a.lastName.toLowerCase();
            let nameB = b.firstName.toLowerCase() + " " + b.lastName.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        console.log("\nSorted Contacts by Name:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Test Cases
let addressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "Cityname", "Statename", "123456", "9876543210", "john.doe@example.com");
    let contact2 = new Contact("Jane", "Smith", "456 Elm St", "NewCity", "NewState", "654321", "9123456789", "jane.smith@example.com");
    let contact3 = new Contact("Alice", "Brown", "789 Oak St", "Cityname", "AnotherState", "789456", "9012345678", "alice.brown@example.com");
    let contact4 = new Contact("Bob", "White", "321 Pine St", "NewCity", "NewState", "123789", "9112233445", "bob.white@example.com");

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    addressBook.addContact(contact4);
} catch (error) {
    console.error(error.message);
}

addressBook.sortByName();
