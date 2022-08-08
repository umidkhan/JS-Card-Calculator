let a = document.querySelectorAll('.card');
let b = document.querySelectorAll('.sum');
let jami = document.querySelector('.jami');

let currency = 0;
a.forEach(bittasi => {
    bittasi.addEventListener('click', (e) => {
        if(bittasi.classList.contains('active')) {
           bittasi.classList.remove('active');


        } else {
            bittasi.classList.add('active');
            let sum = bittasi.children[1].children[1].textContent.replace('$', '0');
            let sumNumber = parseInt(sum);
            currency += sumNumber;
            jami.innerHTML = '$' + currency;
            console.log(sumNumber)
        }
    });
});




