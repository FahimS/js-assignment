// .....................................................................

// 1. Convert Radian to Degree

function radianToDegree(radian) {
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree;
}
let result = radianToDegree(25);
result = result.toFixed(2);
console.log(result);

// .....................................................................

// 2. Check whether the given file name is a javaScript file or not

function isJavaScriptFile(fileName) {
    const extension = fileName.split('.').pop();
    if (extension === 'js') {
        // console.log('true');
        return true;
    } else {
        // console.log('false');
        return false;
    }
}
const fileExtension = isJavaScriptFile('assignment.js.png');
console.log(fileExtension);

// .....................................................................

// 3. Calculate the total oil price that I have to pay

function oilPrice(degelQuantity, petrolQuantity, octenQuantity) {
    let degelPrice = 114;
    let petrolPrice = 130;
    let octenPrice = 135;

    const cost = (degelPrice * degelQuantity) + (petrolPrice * petrolQuantity) + (octenPrice * octenQuantity);
    return cost;
}
const totalCost = oilPrice(30, 20, 10);
console.log(totalCost);

// .......................................................................

// 4. Public Bus Fare

function publicBusFare(person) {
    let privateBusCapasity = 50;
    let microCapasity = 11;
    let busFair = 0;

    if (typeof person == 'number') {
        if (person % 50 != 0) {
            const extraPassengerOfBus = person % 50;
            if (extraPassengerOfBus % 11 != 0) {
                const extraPassengerOfMicro = extraPassengerOfBus % 11;
                if (extraPassengerOfMicro != 0) {
                    busFair = extraPassengerOfMicro * 250;
                    return busFair;
                }
            }
        }
    }
    else {
        console.log('Provide only number');
    }
}
const totalBusFair = publicBusFare(50);
console.log(totalBusFair);

// ..........................................................................

// 5. Find Best Friend

const friend1 = { name: 'abul', friend: 'babul' };
const friend2 = { name: 'babul', friend: 'abul' };

function isBestFriend(friend1, friend2) {

    if (friend1.name == friend2.friend && friend1.friend == friend2.name) {
        return true;
    }
    else {
        return false;
    }
}
const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);