<template>
    <section class="formulario">
        <h4>Aplicá aquí :)</h4>
        <form action="">

            <section>
                <label for="name">
                    <p>Nombre</p>
                    <input type="text" id="name" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="last_name">
                    <p>Apellidos</p>
                    <input type="text" id="last_name" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="email">
                    <p>Correo electrónico</p>
                    <input type="email" id="email" required>
                </label>
                <span class="error"></span>
            </section>

            <section>
                <label for="linkedin">
                    <p>Linkedin (Opcional)</p>
                    <input type="url" id="linkedin">
                </label>
                <span class="error"></span>
            </section>

            <section>   
                <label for="portafolio_folder">
                    <p>Portafolio o carpeta (Opcional)</p>
                    <input type="url" id="portafolio_folder">
                </label>
                <span class="error"></span>
            </section>

            <label for="cv">
                <section>
                    <h4>cv / portafolio</h4>
                    <strong>compatibles: pdf, doc, docx, txt and rtf</strong>
                </section>
                <BootstrapIcon class="close" name="paperclip"/>
                <input type="file" id="cv" required accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, text/plain, text/rtf">
            </label>

            <button type="submit">
                Enviá tu aplicación
                <BootstrapIcon class="close" name="arrow-right"/>
            </button>

        </form>
    </section>
</template>


<script lang="ts">

    export default{

        methods: {

            alingMenu(){

                const labelsParagraph : NodeListOf<HTMLParagraphElement> = document.querySelectorAll('label p');
                
                    labelsParagraph.forEach( ( e : HTMLParagraphElement ) => {

                    const heightParagrah : number = e.offsetHeight;
                    const labelElement : HTMLLabelElement = e.parentElement as HTMLLabelElement;
                    const parentLabelElement : HTMLElement = labelElement.parentElement as HTMLElement;
                    const elementError : HTMLElement = parentLabelElement.querySelector('.error') as HTMLElement;
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

                            const value : string = inputElement.value;

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

            }

        },
        mounted() {
            this.alingMenu()
        }

    }

</script>