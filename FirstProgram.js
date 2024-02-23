const printMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: Grilled Chicken Sandwich");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu: Spaghetti Aglio e Olio");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: Veggie Stir-Fry");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Caesar Salad");
            break;
        case 'friday':
            console.log("Friday's Menu: Fish Tacos");
            break;
        case 'saturday':
            console.log("Saturday's Menu: BBQ Ribs");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Pancakes");
            break;
        default:
            console.log("Invalid day entered.");
    }
}

printMenu('Sunday'); 
printMenu('Friday'); 
printMenu('Tuesday'); 
printMenu('Invalid Day'); 
