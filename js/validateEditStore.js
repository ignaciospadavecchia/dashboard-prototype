    
    let validation = true;

    // On Form submit : 
    // 1. Gather input.
    // 2. Call validateVoidForm() to check if the forms is void.
    // 3. Return user feedback and onsunmit = " True || False". 
    function onValidate(validation) {
        
        let nombre = document.getElementById("nombre").value;           console.log(nombre);
        let apellidos = document.getElementById("apellidos").value;     console.log(apellidos);
        let edad = document.getElementById("edad").value;               console.log(edad);
        let checkbox = document.getElementById("checkboxId").checked;   console.log(checkbox);

        let validated = validateVoidForm(nombre, apellidos, edad, password1, password2, checkbox, validation);
        
        console.log(validation);

        return validated;
    }

    // Call validateVoidForm() to check if the forms is void.
    function validateVoidForm(nombre, apellidos, edad, password1, password2, checkbox, validation) {

        nombre = nombre.trim();
        apellidos = apellidos.trim();
        edad = edad.trim();
        password1 = password1.trim();
        password2 = password2.trim();

        if (nombre.length == 0) {
            document.getElementById("informId").innerHTML = "Por favor indica tu nombre..   ";
                        validation = false;
        } else if (apellidos.length == 0) {
            document.getElementById("informId").innerHTML = "Por favor indica tu/s apellido/s..";
                        validation = false;
        } else if (edad.length == 0) {
            document.getElementById("informId").innerHTML = " Por favor indique su edad ..";
                        validation = false;
        } else if (password1.length == 0) {
            document.getElementById("informId").innerHTML = " Por favor indique una contraseña ..";
                        validation = false;
        } else if (password2.length == 0) {
            document.getElementById("informId").innerHTML = " Por favor repita su contraseña ..";
                        validation = false;
        } else if (checkbox == false) {
            document.getElementById("informId").innerHTML = " Por favor indique que no ha comprendiido nuestros Términos y Condiciones ..";
                        validation = false;
        } 
        console.log(validation);
        return validation;
    }

 // Validates user name/s and gives feedback.
    function onValidateName(nombre) {
        nombre = nombre.trim();
        if (nombre == null || nombre.length == 0 || nombre == undefined) {
            document.getElementById("informId").innerHTML = "Por favor completa tu nombre..";
                        validation = false;
        } else {
            document.getElementById("informId").innerHTML = " ";
            validation = false;
        }
    }

    // Validates user Surname/s and gives feedback.
    function onValidateSurnames(apellidos, validation) {
        apellidos = apellidos.trim();
        if (apellidos == null || apellidos.length == 0 || apellidos == undefined) {
            document.getElementById("informId").innerHTML = "";
            validation = false;
        } else {
            document.getElementById("informId").innerHTML = " ";
            validation = false;
        }
    }

    // Validates wether if the input isNaN or if the user is under aged and gives feedback.
    function onValidateAge(edad, validation) {
        edad = edad.trim();
        if (edad < 18) {
            document.getElementById("informId").innerHTML = "";
            validation = false;
        } else if (isNaN(edad)) {
            document.getElementById("informId").innerHTML = "Debe indicar su edad mediante un número.";
            validation = false;
        }
    }

   