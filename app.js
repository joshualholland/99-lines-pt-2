let friends = ['Joel', 'Kelsy', 'Daniel', 'Nitish', 'James']

// loop
for (i = 0; i < friends.length; i++) {
    let friend = friends[i]; {
        for (l = 99; l > 0; l--) {
            var minusOne = l - 1;
            if (l > 1) {
                console.log(l + "lines of code in the file," + l + "lines of code;" + friend + "strikes one out," + "clears it all out," + minusOne + "lines of code in the file")
            } else {
                console.log(l + "lines of code in the file," + l + "lines of code" + friend + "strikes one out," + "clears it all out," + "no more lines of code in the file.")
            }
        }
    }
};