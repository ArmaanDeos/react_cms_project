// Business Logistics

export var customerArr = [];  //store customer details

// Add Customer 
export function addCustomer(id, name, address, mobile) {
    let customer = {
        id: id,
        name: name,
        address: address,
        mobile: mobile
    }
    // push this object into customer array
    customerArr.push(customer);
    // console.log(customerArr) // only to check the data is stored in array or not
}

// Search Customer
export function searchCustomer(id) {
    // customerArr.find(e => e.id == id)
    let cus = customerArr.find(e => e.id === id);
    return cus;
    // for (let cus of customerArr) {
    //     if (cus.id === id) {
    //         return cus
    //     }
    // }
}


// Delete Customer
export function deleteCustomer(id) {

    // by using splice method we delete elements from an custArr;
    for (let i = 0; i < customerArr.length; i++) {
        if (customerArr[i].id === id) {
            customerArr.splice(0, 1)
            return "Customer Deleted Sucessfully!"
        }
    }
    return "Id not Matched"

}

// Modify Customer

// export function modifyCustomer(id) {
//     // 1. Find with the provided id
//     let cus = customerArr.findIndex((e) => e.id === id);
//     let modifyCus = { ...customerArr[cus], isComplete: true };
//     let newModCus = [...customerArr];
//     newModCus[customerArr] = modifyCus;
// }

// export function modifyCustomer(id, name, address, mobile) {
//     let customer = {
//         id: id,
//         name: name,
//         address: address,
//         mobile: mobile,
//     }
//     customerArr.shift(customer)
// }