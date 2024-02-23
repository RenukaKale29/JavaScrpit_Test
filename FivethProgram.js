const companyEmployees = {
    staff: [
        {
            empId: 1,
            fullName: "John Doe",
            jobTitle: "Web Developer",
            department: "IT",
            contactInfo: {
                emailAddress: "john.doe@example.com",
                phoneNumber: "+1234567890"
            }
        },
        {
            empId: 2,
            fullName: "Jane Smith",
            jobTitle: "Marketing Specialist",
            department: "Marketing",
            contactInfo: {
                emailAddress: "jane.smith@example.com",
                phoneNumber: "+1987654321"
            }
        },
        
    ]
};

console.log(companyEmployees.staff[0].fullName); 
console.log(companyEmployees.staff[1].contactInfo.emailAddress); 
