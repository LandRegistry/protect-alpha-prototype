
console.log("Hey there sexy");

var request = new XMLHttpRequest();
document.querySelector('.address-lookup-button').onclick = function() {
    var postcode = document.getElementById('postcode').value;
    request.open('GET', 'https://api.getAddress.io/find/' + postcode + '?api-key=' + gaKey, true);
    request.onload = function() {
        var data = JSON.parse(this.response);

        for (var i = 0; i < data.addresses.length; i++) {
            var option = document.createElement("option");
            var address = data.addresses[i];
            option.text = address;
            document.getElementById('address-selector').appendChild(option);
            console.log(data.addresses[i]);
        }
    }
    request.send();
}
