
var myForm = document.getElementById('myForm');
let formValues = [];
myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    formValues.push({
        firstName: myForm.firstName.value,
        lastName: myForm.lastName.value,
        address: myForm.address.value,
        pincode: myForm.pincode.value,
        gender: myForm.gender.value,
        food: myForm.food.value,
        country: myForm.country.value,
        state: myForm.state.value
    })
    iterateTableData(formValues);
    myForm.reset();
})

function iterateTableData(values) {
    var tbody = '';
    values.forEach(value=>{
        tbody += "<tr>";
        tbody += `<td> ${value.firstName} </td>`;
        tbody += `<td> ${value.lastName} </td>`;
        tbody += `<td> ${value.address} </td>`;
        tbody += `<td> ${value.pincode} </td>`;
        tbody += `<td> ${value.gender} </td>`;
        tbody += `<td> ${value.food} </td>`;
        tbody += `<td> ${value.country} </td>`;
        tbody += `<td> ${value.state} </td> </tr>`;
    });
    var tableData = document.getElementById('table-data');
    tableData.innerHTML = tbody;
}