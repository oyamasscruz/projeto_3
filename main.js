$(document).ready(function() {

$.validator.addMethod("containsTwoNames", 
function(value, element) {
    let names = value.trim().split(/\s+/);
    return names.length >= 2;
},"Por favor, insira pelo menos dois nomes.");


$('#phone').mask('(00) 00000-0000');

$('form').validate({
        rules: {
            name: {
                minlength: 3,
                required: true,
                containsTwoNames: true
            },
            phone: {
                required: true,
                phoneUS: true
            }
        },
        messages: {
            name: {
                minlength: "Por favor, insira pelo menos 3 caracteres.",
                containsTwoNames: "Por favor, inisira pelo menos dois nomes",
                required: "Este campo é obrigatório"
            },
            phone: {
                required: "Este campo é obrigatório"
            },
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        },
    });
});