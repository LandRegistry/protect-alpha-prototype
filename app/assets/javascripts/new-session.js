/* Add session item to for multiple address searches */


/* dashboard rules */



/* this is where we are getting the returned items from the session */
let firstAddressToFirstProperty = sessionStorage.getItem('firstAdressToFirstProperty');
let secondAddressToFirstProperty = sessionStorage.getItem('secondAddressToFirstProperty');
let thirdAddressToFirstProperty = sessionStorage.getItem('thirdAddressToFirstProperty');
let firstEmailToFirstProperty = sessionStorage.getItem('firstEmailToFirstProperty');
let secondEmailToFirstProperty = sessionStorage.getItem('secondEmailToFirstProperty');
let firstTelephoneToFirstProperty = sessionStorage.getItem('firstTelephoneToFirstProperty');
let secondTelephoneToFirstProperty = sessionStorage.getItem('secondTelephoneToFirstProperty');
let firstAdressToSecondProperty = sessionStorage.getItem('firstAdressToSecondProperty');
let secondAddressToSecondProperty = sessionStorage.getItem('secondAddressToSecondProperty');
let thirdAddressToSecondProperty = sessionStorage.getItem('thirdAddressToSecondProperty');
let firstEmailToSecondProperty = sessionStorage.getItem('firstEmailToSecondProperty');
let secondEmailToSecondProperty = sessionStorage.getItem('secondEmailToSecondProperty');
let firstTelephoneToSecondProperty = sessionStorage.getItem('firstTelephoneToSecondProperty');
let secondTelephoneToSecondProperty = sessionStorage.getItem('secondTelephoneToSecondProperty');
console.log('hello there');

/* FIRST PROPERTY */
/* checks what the returned item is */
if (secondAddressToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-address-to-first-property').classList.add('hidden');
    /* assigns the item to the hidden <span> */
    let itemToUpdate = document.querySelector('.second-address-for-first-property');
    /* reveals the hidden <span> */
    itemToUpdate.classList.remove('hidden');
    /* reveals the next add button */
    document.querySelector('.add-third-address-to-first-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-second-address-of-first-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-second-address-of-first-property').classList.remove('hidden');
}
if (thirdAddressToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-third-address-to-first-property').classList.add('hidden');
    /* assigns the item to the hidden <span> */
    let itemToUpdate = document.querySelector('.third-address-for-first-property');
    /* reveals the hidden <span> */
    itemToUpdate.classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-third-address-of-first-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-third-address-of-first-property').classList.remove('hidden');
    /* hide the email and telephone options because we have reached 3 */
    document.querySelector('.email-row').classList.add('hidden');
    document.querySelector('.phone-row').classList.add('hidden');
}
if (firstEmailToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-first-email-to-first-property').classList.add('hidden');
    /* reveals the next add buutton */
    document.querySelector('.add-second-email-to-first-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-first-email-of-first-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-first-email-of-first-property').classList.remove('hidden');
}
if (secondEmailToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-email-to-first-property').classList.add('hidden');
    /* reveal the corresponding change and delete buttons */
    document.querySelector('.change-second-email-of-first-property').classList.remove('hidden');
    document.querySelector('.delete-second-email-of-first-property').classList.remove('hidden');
    /* hide the telephone options because we have reached 3 */
    document.querySelector('.phone-row').classList.add('hidden');
    /* hide the add address button options because we have reached 3 */
    document.querySelector('.add-second-address-to-first-property').classList.add('hidden');
    document.querySelector('.add-third-address-to-first-property').classList.add('hidden');
}
if (firstTelephoneToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-first-telephone-to-first-property').classList.add('hidden');
    /* reveals the next add buutton */
    document.querySelector('.add-second-telephone-to-first-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-first-telephone-of-first-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-first-telephone-of-first-property').classList.remove('hidden');
}
if (secondTelephoneToFirstProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-telephone-to-first-property').classList.add('hidden');
    /* reveal the corresponding change and delete buttons */
    document.querySelector('.change-second-telephone-of-first-property').classList.remove('hidden');
    document.querySelector('.delete-second-telephone-of-first-property').classList.remove('hidden');
    /* hide the telephone options because we have reached 3 */
    document.querySelector('.email-row').classList.add('hidden');
    /* hide the add address button options because we have reached 3 */
    document.querySelector('.add-second-address-to-first-property').classList.add('hidden');
    document.querySelector('.add-third-address-to-first-property').classList.add('hidden');
}

/* click rules */
if (document.querySelector('.add-second-address-to-first-property') !== null) {
    document.querySelector('.add-second-address-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'second address to first property');
    }
}
if (document.querySelector('.add-third-address-to-first-property') !== null) {
    document.querySelector('.add-third-address-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'third address to first property');
    }
}
if (document.querySelector('.change-first-address-of-first-property') !== null) {
    document.querySelector('.change-first-address-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'first address of first property');
    }
}
if (document.querySelector('.change-second-address-of-first-property') !==null ) {
    document.querySelector('.change-second-address-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second address of first property')
    }
}
if (document.querySelector('.change-third-address-of-first-property') !== null) {
    document.querySelector('.change-third-address-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change third address of first property')
    }
}
if (document.querySelector('.add-first-email-to-first-property') !== null) {
    document.querySelector('.add-first-email-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add first email to first property')
    }
}
if (document.querySelector('.add-second-email-to-first-property') !== null) {
    document.querySelector('.add-second-email-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add second email to first property')
    }
}
if (document.querySelector('.change-first-email-of-first-property') !== null) {
    document.querySelector('.change-first-email-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first email of first property')
    }
}
if (document.querySelector('.change-second-email-of-first-property') !== null) {
    document.querySelector('.change-second-email-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second email of first property')
    }
}
if (document.querySelector('.add-first-telephone-to-first-property') !== null) {
    document.querySelector('.add-first-telephone-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add first telephone to first property')
    }
}
if (document.querySelector('.add-second-telephone-to-first-property') !== null) {
    document.querySelector('.add-second-telephone-to-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add second telephone to first property')
    }
}
if (document.querySelector('.change-first-telephone-of-first-property') !== null) {
    document.querySelector('.change-first-telephone-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first telephone of first property')
    }
}
if (document.querySelector('.change-second-telephone-of-first-property') !== null) {
    document.querySelector('.change-second-telephone-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second telephone of first property')
    }
}

/* SECOND PROPERTY */
/* checks what the returned item is */
if (secondAddressToSecondProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-address-to-second-property').classList.add('hidden');
    /* assigns the item to the hidden <span> */
    let itemToUpdate = document.querySelector('.second-address-for-second-property');
    /* reveals the hidden <span> */
    itemToUpdate.classList.remove('hidden');
    /* reveals the next add button */
    document.querySelector('.add-third-address-to-second-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-second-address-of-second-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-second-address-of-second-property').classList.remove('hidden');
}
if (thirdAddressToSecondProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-third-address-to-second-property').classList.add('hidden');
    /* assigns the item to the hidden <span> */
    let itemToUpdate = document.querySelector('.third-address-for-second-property');
    /* reveals the hidden <span> */
    itemToUpdate.classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-third-address-of-second-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-third-address-of-second-property').classList.remove('hidden');
    /* hide the email and telephone options because we have reached 3 */
    document.querySelector('.email-row-second-property').classList.add('hidden');
    document.querySelector('.phone-row-second-property').classList.add('hidden');
}
if (firstEmailToSecondProperty === 'yes') {
    console.log("The message is " + firstEmailToSecondProperty)
    /* hides the add corresponding add button */
    document.querySelector('.add-first-email-to-second-property').classList.add('hidden');
    /* reveals the next add buutton */
    document.querySelector('.add-second-email-to-second-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-first-email-of-second-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-first-email-of-second-property').classList.remove('hidden');
}
if (secondEmailToSecondProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-email-to-second-property').classList.add('hidden');
    /* reveal the corresponding change and delete buttons */
    document.querySelector('.change-second-email-of-second-property').classList.remove('hidden');
    document.querySelector('.delete-second-email-of-second-property').classList.remove('hidden');
    /* hide the telephone options because we have reached 3 */
    document.querySelector('.phone-row-second-property').classList.add('hidden');
    /* hide the add address button options because we have reached 3 */
    document.querySelector('.add-second-address-to-second-property').classList.add('hidden');
    document.querySelector('.add-third-address-to-second-property').classList.add('hidden');
}
if (firstTelephoneToSecondProperty === 'yes') {
    console.log('first telephone to first property');
    /* hides the add corresponding add button */
    document.querySelector('.add-first-telephone-to-second-property').classList.add('hidden');
    /* reveals the next add buutton */
    document.querySelector('.add-second-telephone-to-second-property').classList.remove('hidden');
    /* reveals the corresponding change button */
    document.querySelector('.change-first-telephone-of-second-property').classList.remove('hidden');
    /* reveals the corresponding delete button */
    document.querySelector('.delete-first-telephone-of-second-property').classList.remove('hidden');
}
if (secondTelephoneToSecondProperty === 'yes') {
    /* hides the add corresponding add button */
    document.querySelector('.add-second-telephone-to-second-property').classList.add('hidden');
    /* reveal the corresponding change and delete buttons */
    document.querySelector('.change-second-telephone-of-second-property').classList.remove('hidden');
    document.querySelector('.delete-second-telephone-of-second-property').classList.remove('hidden');
    /* hide the telephone options because we have reached 3 */
    document.querySelector('.email-row-second-property').classList.add('hidden');
    /* hide the add address button options because we have reached 3 */
    document.querySelector('.add-second-address-to-second-property').classList.add('hidden');
    document.querySelector('.add-third-address-to-second-property').classList.add('hidden');
}

/* click rules */
if (document.querySelector('.add-second-address-to-second-property') !== null) {
    document.querySelector('.add-second-address-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'second address to second property');
    }
}
if (document.querySelector('.add-third-address-to-second-property') !== null) {
    document.querySelector('.add-third-address-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'third address to second-property');
    }
}
if (document.querySelector('.change-first-address-of-first-property') !== null) {
    document.querySelector('.change-first-address-of-first-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first address of first property');
    }
}
if (document.querySelector('.change-first-address-of-second-property') !== null) {
    document.querySelector('.change-first-address-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first address of second property');
    }
}
if (document.querySelector('.change-second-address-of-second-property') !==null ) {
    document.querySelector('.change-second-address-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second address of second property')
    }
}
if (document.querySelector('.change-third-address-of-second-property') !== null) {
    document.querySelector('.change-third-address-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change third address of second property')
    }
}
if (document.querySelector('.add-first-email-to-second-property') !== null) {
    document.querySelector('.add-first-email-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add first email to second property')
    }
}
if (document.querySelector('.add-second-email-to-second-property') !== null) {
    document.querySelector('.add-second-email-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add second email to second property')
    }
}
if (document.querySelector('.change-first-email-of-second-property') !== null) {
    document.querySelector('.change-first-email-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first email of second property')
    }
}
if (document.querySelector('.change-second-email-of-second-property') !== null) {
    document.querySelector('.change-second-email-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second email of second property')
    }
}
if (document.querySelector('.add-first-telephone-to-second-property') !== null) {
    document.querySelector('.add-first-telephone-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add first telephone to second property')
    }
}
if (document.querySelector('.add-second-telephone-to-second-property') !== null) {
    document.querySelector('.add-second-telephone-to-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'add second telephone to second property')
    }
}
if (document.querySelector('.change-first-telephone-of-second-property') !== null) {
    document.querySelector('.change-first-telephone-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change first telephone of second property')
    }
}
if (document.querySelector('.change-second-telephone-of-second-property') !== null) {
    document.querySelector('.change-second-telephone-of-second-property').onclick = function() {
        sessionStorage.setItem('item-to-update', 'change second telephone of second property')
    }
}