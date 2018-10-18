let friends = ['Joel', 'Kelsy', 'Daniel', 'Nitish', 'James']
let btn = document.createElement('button');
let btnText = document.createTextNode('sing');
btn.append(btnText);
document.body.appendChild(btn);
btn.addEventListener('click', function () {
    // choose friend and display to page
    // for (i=0; i<friends.length; i++) {
    //     let div = document.createElement('div');
    //     div.classList.add('friends');
    //     let h3 = document.createElement('h3');
    //     let h3Text = document.createTextNode(`${friends[i]}`);
    //     h3.append(h3Text);
    //     div.appendChild(h3);
    //     document.body.appendChild(div);
    // };




    for (i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let div = document.createElement('div');
        div.classList.add('friends');
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(`${friends[i]}`);
        h3.append(h3Text);
        let p = document.createElement('p');
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
        for (l = 99; l > 0; l--) {
            var minusOne = l - 1;
            if (l > 1) {
                console.log(l + "lines of code in the file," + l + "lines of code;" + friend + "strikes one out," + "clears it all out," + minusOne + "lines of code in the file")
            } else {
                console.log(l + "lines of code in the file," + l + "lines of code" + friend + "strikes one out," + "clears it all out," + "no more lines of code in the file.")
            }
        }
    };
})
// loop
