
document.addEventListener('DOMContentLoaded', function () {
    const suggestionForm = document.getElementById('suggestionForm');
    const isAnonymousCheckbox = document.getElementById('isAnonymous');
    const armyNoInput = document.getElementById('armyNo');
    const rankInput = document.getElementById('rank');
    const usernameInput = document.getElementById('userName');
    const coyInput = document.getElementById('coy');
    const mobileNumberInput = document.getElementById('mobileNumber');
    const successMessageContainer = document.getElementById('successMessageContainer');
    var ErrorMessageContainer = document.getElementById('ErrorMessageContainer');
    const submitButton = document.getElementById('submitButton');
    const cancelButton = document.getElementById('cancelBtn');


    function clearPersonalDetails() {
        armyNoInput.value = '';
        rankInput.value = '';
        usernameInput.value = '';
        coyInput.value = '';
        mobileNumberInput.value = '';
    }


    isAnonymousCheckbox.addEventListener('change', function () {
        if (isAnonymousCheckbox.checked) {
            clearPersonalDetails();
        }
    });

    // suggestionForm.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const suggestion = document.getElementById('suggestion').value.trim();
    //     const armyNo = armyNoInput.value.trim();
    //     const rank = rankInput.value.trim();
    //     const username = usernameInput.value.trim();
    //     const coy = coyInput.value.trim();
    //     const mobileNumber = mobileNumberInput.value.trim();
    //     const isAnonymous = isAnonymousCheckbox.checked;

    //     console.log({
    //         suggestion: suggestion,
    //         armyNo: isAnonymous ? '' : armyNo,
    //         rank: isAnonymous ? '' : rank,
    //         username: isAnonymous ? '' : username,
    //         coy: isAnonymous ? '' : coy,
    //         mobileNumber: isAnonymous ? '' : mobileNumber,
    //         isAnonymous: isAnonymous
    //     });


    //     setTimeout(function () {
    //         suggestionForm.resetForm();
    //     }, 2000);
    // });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const armyNoInput = document.getElementById('armyNo');
        const mobileNumberInput = document.getElementById('mobileNumber');
        if (armyNoInput.value !== '' && mobileNumberInput.value !== '') {
            successMessageContainer.classList.add('show');
            suggestionForm.reset();
            setTimeout(() => {
                successMessageContainer.classList.remove('show');
            }, 5000);
        } else {
            ErrorMessageContainer = document.getElementById('ErrorMessageContainer');
            ErrorMessageContainer.classList.add('show');
            setTimeout(() => {
                ErrorMessageContainer.classList.remove('show');
            }, 5000);
        }
    });

    cancelButton.addEventListener('click', function (event) {

        event.preventDefault();
        cancel();
    });


    function cancel() {
        window.location.href = "login.html";
    }

});

document.getElementById('mobileNumber').addEventListener('keypress', function (e) {
    return isNumber(e);
}, false);

function isNumber(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}
