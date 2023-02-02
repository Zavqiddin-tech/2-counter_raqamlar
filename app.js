let number = document.querySelector('.number')
let btns = document.querySelectorAll('.btn')

let son = 0
btns.forEach((btn) => {
    btn.onclick = (e) => {

        let styles = e.currentTarget.classList
        if (styles.contains('minus')) {
            son--
            console.log(son);
        } else if (styles.contains('plus')) {
            son++
            console.log(son);
        } else {
            son = 0
        }
        number.textContent = son
        
        
        if (son > 0) {
            number.style.color = 'green'
        }
        if (son < 0) {
            number.style.color = 'red'
        } 
        if (son == 0) {
            number.style.color = 'black'
        }
    }
})