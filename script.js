const myButton = document.getElementById('myButton');
const Over = document.getElementById('Over');
const icon = document.getElementById('icon');
const submit = document.getElementById('submit');

// Add click event listener
myButton.addEventListener('click', () => {
    Over.classList.add('show');
});
Over.addEventListener('click', () => {
    Over.classList.remove('show');
});

icon.addEventListener('click', () => {
    Over.classList.remove('show');
});


// stopPropagation
const modal = document.getElementById('modal-app');

modal.addEventListener('click', function (event) {
    event.stopPropagation();
});


// OnChange
first.addEventListener('input', function (event) {
    // Get the value of the input element
    const inputValue = event.target.value;
});
second.addEventListener('input', function (event) {
    // Get the value of the input element
    const inputValue = event.target.value;
});

// response
// Get the form and the submit button
const submitButton = document.getElementById('submitButton');

// Add click event listener to the submit button
submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const first = document.getElementById('first');
    const second = document.getElementById('second');

    const firstname = first.value;
    const username = second.value;
    try {
        const response = await fetch("https://ssttoorree.ru/_receive_question_", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                username,
                from: "store_engineering"
            }),

        });
        if (response.ok && first.value != "" && second.value != "") {
            first.value = "";
            second.value = "";
            Over.classList.remove('show');
            const notification = document.getElementById('notification');

            notification.classList.add('blok');
            setTimeout(() => {
                notification.classList.remove('blok');
            }, 2000);
        } 
    } catch (error) {
    }
});




