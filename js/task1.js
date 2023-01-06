let amount = Number(prompt("Please enter your money", "You should have a lot of money..."))
var ticket = 500
var hotel = 250
var entartainments = 120
var all = (((ticket + hotel) * 10.900) + (entartainments * 12272.64))
if (amount > all) {
    alert("Oq yo'l, Alisher!")
    document.write("Oq yo'l, Alisher!")
    console.log("Oq yo'l, Alisher!")
} else {
    document.write("You don't have enough money!")
    alert("You don't have enough money!")
    console.log("You don't have enough money!")
}
