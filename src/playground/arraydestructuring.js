const address = ['1212 South Bound Street', 'Tondo', 'Manila', '1740'];

// This matches the position of every array
const[street, city, state='New York', zipcode] = address;

const item = ['Coffee Blanca', '$2.00', '$3.00', '$4.00'];

const [ selected_item, small_price, medium_price, large_price] = item;


console.log(`A ${selected_item} cost ${large_price}.`);
console.log(`You are in ${city}, ${state}`);