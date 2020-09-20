window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("btnScroll").style.display = "block";
    } else {
        document.getElementById("btnScroll").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function enviarDados() {
    const name = document.getElementById('name');
    const valueNome = name.value;

    const email = document.getElementById('email');
    const valueEmail = email.value;

    const password = document.getElementById('password');
    const valuePassword = password.value;

    fetch(`http://127.0.0.1:3000/api/users_cadastrados/cadastrar`, {
        method: 'POST',
        body: JSON.stringify({ nome: valueNome, email: valueEmail, password: valuePassword }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(function (data) {
            return data.json();
        })
        .then(function (newDate) {
            console.log(newDate);
        })
}

$("#form-head").validate({
    rules: {
        name: {
            required: true,
            maxlength: 100,
            minlength: 3
        },

        email: {
            required: true,
            maxlength: 100,
            minlength: 3
        },

        password: {
            required: true,
            minlength: 6,
            maxlength: 100
        }
    },
    messages: {
        name: {
            required: "* Por favor, informe seu nome",
            maxlength: jQuery.validator.format("* Seu nome não pode conter mais de {0} caracteres"),
            minlength: jQuery.validator.format("* Seu nome deve ter no mínimo {0} caracteres")
        },
        email: {
            required: "* Por favor, é necessário informar um email",
            email: "* É necessário ter @",
            maxlength: jQuery.validator.format("* Seu email não deve conter mais de {0} caracteres"),
            minlength: jQuery.validator.format("* Seu email deve ter no mínimo {0} caracteres")
        },
        password: {
            required: "* Por favor, informe uma senha",
            minlength: jQuery.validator.format("* A senha deve ter no mínimo {0} caracteres"),
            maxlength: jQuery.validator.format("* Sua senha não deve conter mais de {0} caracteres")
        }
    },
});
