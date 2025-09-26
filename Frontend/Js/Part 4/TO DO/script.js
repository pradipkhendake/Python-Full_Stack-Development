let array = []

while (true) {
    let req = prompt("Enter Which OPeration You Want to perform");

    if (req == "quite") {
        console.log("Quitting From the app...");
        break;
    }
    else if (req == "add") {
        let added = prompt("Enter Which item you have to add");
        array.push(added);
        console.log("Item Added Successfully..");
    }

    else if (req == "view") {
        console.log("----------------")
        array.forEach(a =>{console.log(a)})
    }

}