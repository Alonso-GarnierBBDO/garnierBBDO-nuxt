<template>
    <section class="formulario">
        <h4>Aplicá aquí :)</h4>
        <form action="" v-on:submit.prevent="(e : Event) => sendCV(e)">

            <section>
                <label for="name">
                    <p>Nombre</p>
                    <input v-model="form.name" type="text" id="name" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="last_name">
                    <p>Apellidos</p>
                    <input v-model="form.lastName" type="text" id="last_name" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="email">
                    <p>Correo electrónico</p>
                    <input v-model="form.email" type="email" id="email" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="linkedin">
                    <p>Linkedin (Opcional)</p>
                    <input v-model="form.linkedin" type="url" id="linkedin">
                </label>
                <span class="error"></span>
            </section>

            <section>   
                <label for="portafolio_folder">
                    <p>Portafolio o carpeta (Opcional)</p>
                    <input v-model="form.portafolio" type="url" id="portafolio_folder">
                </label>
                <span class="error"></span>
            </section>

            <label class="cvContainer" for="cv">
                <section>
                    <h4>cv / portafolio</h4>
                    <strong>compatibles: pdf, doc, docx, txt and rtf</strong>
                    <span class="nameFile"></span>
                    <span class="error"></span>
                </section>
                <BootstrapIcon class="close" name="paperclip"/>
                <input @change="changeFIle" type="file" id="cv" accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, text/plain, text/rtf">
            </label>

            <button type="submit" class="send" :disabled="disabledElement">
                {{button}}
                <BootstrapIcon class="arrow" name="arrow-right"/>
                <span class="loader"></span>
            </button>

            <span class="allError">{{ error }}</span>

        </form>
        <section v-if="openModal" class="modal" v-on:click="showModal()">
            <section class="content" v-on:click="(e) => e.stopPropagation()">
                <img src="../../assets/img/volcan_logo.svg" class="logo_volcan" alt="Logo del premio volcan">
                <button class="close" v-on:click="showModal()">
                    <BootstrapIcon class="arrow" name="x-lg"/>
                </button>
                <section>
                    <h2>¡Felicidades, su solicitud se envió con éxito!</h2>
                    <p>Si su perfil coincide con la vacante pronto nos pondremos con contacto.</p>
                    <button v-on:click="showModal()">Aceptar y cerrar</button>
                </section>
            </section>
        </section>
    </section>
</template>


<script lang="ts">
    // import postWord from '@/hooks/api';

    export default{
        props: {
            title: String,
        },
        data() {
            return {
                send : true as boolean,
                form: {
                    file: null as HTMLInputElement | null,
                    name: null as string | null,
                    lastName: null as string | null,
                    email: null as string | null,
                    linkedin: null as string | null,
                    portafolio: null as string | null,
                },
                error: '',
                button: 'Enviá tu aplicación',
                disabledElement: false,
                openModal: false,
            }
        },
        methods: {

            showModal(){

                this.openModal = false;
                document.body.style.overflow = 'auto';

            },

            alingMenu(){

                const labelsParagraph : NodeListOf<HTMLParagraphElement> = document.querySelectorAll('label p');
                
                    labelsParagraph.forEach( ( e : HTMLParagraphElement ) => {

                    const heightParagrah : number = e.offsetHeight;
                    const labelElement : HTMLLabelElement = e.parentElement as HTMLLabelElement;
                    const parentLabelElement : HTMLElement = labelElement.parentElement as HTMLElement;
                    const inputElement : HTMLInputElement | null | undefined = labelElement.querySelector('input');

                    if(inputElement){

                        const heightInput = inputElement.offsetHeight;
                        const topParagraph = (heightParagrah / 2) + ( heightInput / 2) - 8 ;
                        e.style.top = `${(topParagraph - 6) / 2}px`

                        inputElement.onfocus = () => {

                            e.style.top = `${0 - (heightParagrah) + 5}px`;
                            labelElement.style.marginTop = '30px';
                            e.classList.add('focus')

                        }

                        inputElement.onblur = () => {

                            if(inputElement.value.length == 0){
                                e.style.top = `${(topParagraph - 6) / 2}px`
                                labelElement.style.marginTop = '0px';
                                e.classList.remove('focus')
                            }

                        }

                        inputElement.oninput = () => {

                            this.validateInput(inputElement, parentLabelElement)

                        }

                    }
                    

                })
                

            },

            isValidEmail(value : string){

                const reg : RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                if(value.match(reg)) return true;

                return false;

            },

            isValidURL(value : string){

                const url_reg = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
                var without_regex = new RegExp("^([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

                if(url_reg.test(value) || without_regex.test(value)){
                    return true;
                }

                return false;

            },

            validateInput(inputElement : HTMLInputElement, parentLabelElement : HTMLElement){

                const value : string = inputElement.value;
                const elementError : HTMLElement = parentLabelElement.querySelector('.error') as HTMLElement;

                if(inputElement.required){

                    if(inputElement.getAttribute('type') == 'email'){
                        
                            if(value.length){

                                if(this.isValidEmail(value)){
                                    elementError.innerHTML = '';
                                } else {
                                    elementError.innerHTML = 'Correo electrónico invalido';
                                }

                            }else{
                                elementError.innerHTML = inputElement.validationMessage;
                            }

                    }else{


                        elementError.innerHTML = inputElement.validationMessage;

                    }

                }else {

                    if(inputElement.getAttribute('type') == 'url'){

                        if(value.length){

                            if(!this.isValidURL(value)){
                                elementError.innerHTML = 'URL no valida';
                            }else{
                                elementError.innerHTML = '';    
                            }

                        }else{
                            elementError.innerHTML = '';
                        }

                    }

                }

            },

            sendCV(e : Event){

                e.preventDefault();
                this.send = true;

                const container : HTMLElement = document.querySelector('.cvContainer') as HTMLElement;
                const inputFile : HTMLInputElement = container.querySelector('input') as HTMLInputElement;
                const errorFile : HTMLSpanElement = container.querySelector('.error') as HTMLSpanElement;

                if(!inputFile?.value.length){
                    this.send = false;
                    errorFile.innerHTML = 'El CV es requerido';
                    this.error = 'Algunos items estan incorrectos';
                }else{
                    
                    if(this.form.name?.length && this.form.lastName && this.form.email && this.form.file){

                        this.sendForm();
                        this.error = '';

                    }else{
                        this.error = 'Algunos items estan incorrectos';
                    }

                }
                

            },

            async sendForm(){

                if(this.form.file?.files?.length && this.form.name && this.form.lastName && this.form.email){

                    const selectedFile  = this.form.file.files[0];
                    const fileExtension = selectedFile.name.split('.').pop();
                    const uniqueFileName = this.generateUniqueName() + "." + fileExtension;


                    // Crear un nuevo objeto File con el nombre aleatorio y con el tipo del archivo
                    const updatedFile = new File([selectedFile], uniqueFileName, {
                        type: selectedFile.type,
                    });

                    const formData : FormData = new FormData();

                    formData.append('name', this.form.name);
                    formData.append('last_name', this.form.lastName);
                    formData.append('email', this.form.email);

                    if(this.form.linkedin){
                        formData.append('linkedin', this.form.linkedin);
                    }

                    if(this.form.portafolio){
                        formData.append('portafolio', this.form.portafolio);
                    }

                    // Aqui adjuntamos el resto de datos
                    if(this.title){
                        formData.append("puesto", this.title);
                    }else {
                        formData.append("puesto", '');
                    }
                    
                    formData.append("cv", updatedFile);

                    const inputs : NodeListOf<HTMLInputElement> = document.querySelectorAll("form input");

                    inputs.forEach( e => {
                        e.disabled = true;
                    });

                    this.disabledElement = true;
                    this.button = 'Enviando aplicación';


                    // const response = await postWord(formData);

                    const response = 200;

                    inputs.forEach( e => {
                        e.disabled = false;
                    });

                    this.disabledElement = false;
                    this.button = 'Enviá tu aplicación';


                    if(response == 200){

                        const inputNameFile : HTMLSpanElement = document.querySelector('.nameFile') as HTMLSpanElement;
                        inputNameFile.innerHTML = '';
                        this.error = "";
                        this.openModal = true;
                        document.body.style.overflow = 'hidden';

                        inputs.forEach( e => {

                            const parentElement : HTMLLabelElement = e.parentElement as HTMLLabelElement;
                            const childElement : HTMLParagraphElement | null = parentElement.querySelector('p');

                            parentElement.style.marginTop = '0px';

                            if(childElement){
                                childElement.classList.remove('focus');
                            }



                            e.value = '';
                            
                        });

                        this.form.name = '';
                        this.form.lastName = '';
                        this.form.email = '';
                        this.form.linkedin = '';
                        this.form.portafolio = '';

                        this.alingMenu();



                    }else{
                        this.error = "Ocurrió un error al  enviar su solicitud, por favor inténtelo más tarde.";
                        this.openModal = false;
                    }


                }else{
                    this.error = 'Algunos items estan incorrectos';
                }

            },

            changeFIle(e : Event){

                const input : HTMLInputElement = e.target as HTMLInputElement;
                const parentElement = input.parentElement;
                const inputNameFile : HTMLSpanElement = parentElement?.querySelector('.nameFile') as HTMLSpanElement;
                const errorFile : HTMLSpanElement = parentElement?.querySelector('.error') as HTMLSpanElement;

                if(input.files?.length){

                    const file = input.files[0];
                    const nameFile : string = file.name as string;
                    let reader = new FileReader();

                    reader.addEventListener('load', () => {

                        // Validamos la extencion del file, ademas validamos si el archivo pesa menos de 1MB
                        if (
                            (file.type == "application/pdf" ||
                            file.type ==
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                            file.type == "application/msword" ||
                            file.type == "text/plain" ||
                            file.type == "text/rtf") &&
                            file.size <= 1236724
                        ) {
                            // Aqui le colocamos el nombre de archivo
                            inputNameFile.innerHTML = nameFile;
                            errorFile.innerHTML = '';
                            this.form.file = input;
                            this.error = '';

                        } else if (file.size > 1236724) {
                            // Si el file entra aqui signica que el archivo pesa mas de 1MB

                            inputNameFile.innerHTML = '';
                            errorFile.innerHTML = 'El archivo no puede pesar más de 1MB';
                            this.form.file = null;

                        } else {
                            // Aqui el archivo entra si la extension no es valida entonces le indicamos al usuairo
                            // Entonces le cambiamos el color a rojo y le indicamos usuario

                            inputNameFile.innerHTML = '';
                            errorFile.innerHTML = 'Este archivo no es permitido';
                            this.form.file = null;

                        }

                    }, false);

                    if(file){
                        reader.readAsDataURL(file);
                    }
                    

                }   
                
            },

            generateUUID() {
                // Aqui retornamos el nuevo nombre
                // xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx => Esto son los caractres que seran reemplazados por el nuevo nombre
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (c) {
                    // Aqui calculamos el nuevo nombre con datos randoms
                    const r = (Math.random() * 16) | 0,
                        v = c === "x" ? r : (r & 0x3) | 0x8;
                    // Retornamos el string con un nuevo dato random
                    return v.toString(16);
                    }
                );
            },

                // Con esta funcion generamos el nombre aleatorio del file

            generateUniqueName() {
                // Obtemos el tiempo actual para indicar el nuevo nombre
                const timestamp = new Date().getTime();
                // Obtebemos el nombre en ramdom
                const randomId = Math.floor(Math.random() * 10000);
                // Aqui generamos el nuevo generador de nuevo ramdon
                const uuid = this.generateUUID();
                // Aqui volvemos a genera un nuevo valor ramdom
                const shortenedUuid = uuid.substring(0, 8); // Tomar los primeros 8 caracteres del UUID

                // Retornamos el nuevo valor
                // SE adjunto muchos valores randoms para validar que el nombre sea complemente unico, esto para evitar espacion o archivo repetivos en el servidor, lo cual puede generar problemas
                // Ademas para volver a evitar un dato repetido en el servidor se vuelve a insertar un valor unico
                return `file_${timestamp}_${randomId}_${shortenedUuid}`;
            },


        },
        mounted() {
            this.alingMenu()
        }

    }

</script>