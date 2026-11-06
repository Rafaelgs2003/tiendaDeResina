// Validación de formularios de IMAGIN3D (contacto, login y registro).
// No hay servidor todavía: si el formulario es válido se muestra un aviso.
(function () {
    "use strict";

    var formularios = document.querySelectorAll("form.needs-validation");

    formularios.forEach(function (form) {
        var pass = form.querySelector("#password");
        var repetir = form.querySelector("#password2");

        // Comprueba que las dos contraseñas coincidan (solo en registro)
        function comprobarContrasenas() {
            if (!pass || !repetir) return;
            repetir.setCustomValidity(
                repetir.value !== pass.value ? "Las contraseñas no coinciden" : ""
            );
        }

        if (pass && repetir) {
            pass.addEventListener("input", comprobarContrasenas);
            repetir.addEventListener("input", comprobarContrasenas);
        }

        form.addEventListener("submit", function (evento) {
            evento.preventDefault();
            comprobarContrasenas();

            if (!form.checkValidity()) {
                evento.stopPropagation();
                form.classList.add("was-validated");
                return;
            }

            var aviso = form.querySelector(".form-aviso");
            if (aviso) {
                aviso.hidden = false;
                aviso.focus();
            }
            form.reset();
            form.classList.remove("was-validated");
        });
    });
})();
