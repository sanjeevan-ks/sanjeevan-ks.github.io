(function () {
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    })
    
})();


const scriptURL = 'https://script.google.com/macros/s/AKfycbx2VRln6sozuaDqLUibannJgGFQOq6r7XOfyeIwT8_lMNIhUbw4XjVig3loQVImf-4/exec'
const form = document.forms['Contact-us']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})

    .then(response => {
        form.reset()
        console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))
})
