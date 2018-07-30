/* dashboard rules */

let multiplePropertyCheck = sessionStorage.getItem('multiplePropertyToAdd');
    console.log(multiplePropertyCheck);
    /*if (multiplePropertyCheck === 'no') {
      document.querySelector('.multi-property-table').classList.add('hidden');
    }*/

/* this is where we are checking the returned items */
let firstAddressToFirstProperty = sessionStorage.getItem('firstAdressToFirstProperty');
let secondAddressToFirstProperty = sessionStorage.getItem('secondAddressToFirstProperty');
let thirdAddressToFirstProperty = sessionStorage.getItem('thirdAddressToFirstProperty');
let firstEmailToFirstProperty = sessionStorage.getItem('firstEmailToFirstProperty');
let secondEmailToFirstProperty = sessionStorage.getItem('secondEmailToFirstProperty');
let firstPhoneToFirstProperty = sessionStorage.getItem('firstPhoneToFirstProperty');
let secondPhoneToFirstProperty = sessionStorage.getItem('secondPhoneToFirstProperty');
let firstAdressToSecondProperty = sessionStorage.getItem('firstAdressToSecondProperty');
let secondAddressToSecondProperty = sessionStorage.getItem('secondAddressToSecondProperty');
let thirdAddressToSecondProperty = sessionStorage.getItem('thirdAddressToSecondProperty');
let firstEmailToSecondProperty = sessionStorage.getItem('firstEmailToSecondProperty');
let secondEmailToSecondProperty = sessionStorage.getItem('secondEmailToSecondProperty');
let firstPhoneToSecondProperty = sessionStorage.getItem('firstPhoneToSecondProperty');
let secondPhoneToSecondProperty = sessionStorage.getItem('secondPhoneToSecondProperty');
console.log('hello there');

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







/* click rules */
document.querySelector('.add-second-address-to-first-property').onclick = function() {
    sessionStorage.setItem('item-to-update', 'second address to first property');
}
document.querySelector('.add-third-address-to-first-property').onclick = function() {
    sessionStorage.setItem('item-to-update', 'third address to first property');
}
document.querySelector('.change-first-address-of-first-property').onclick = function() {
    sessionStorage.setItem('item-to-update', 'first address of first property');
  }
document.querySelector('.change-second-address-of-first-property').onclick = function() {
    sessionStorage.setItem('item-to-update', 'change second address of first property')
}