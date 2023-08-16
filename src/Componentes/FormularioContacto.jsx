import React from "react";
import emailjs from "emailjs-com";
import {useState} from "react";


function FormularioContacto (){


    const [enviado, setEnviado] = useState(false);
    /*const navigate = useNavigate(); */
    const handleSubmit = (event) => { 
        event.preventDefault();
        /*Con este hooks se cambia el formulario por un mensaje cuando se envía el correo*/
        setEnviado(true)


    };
    
    /*Esta es la función para el envío del correo por medio de emailjs*/

    const [from_name, set_ToName] = useState("");
    const [formEmail, set_Toemail] = useState("");
    const [formText, set_Totext] = useState("");
/*
    const [botonNulo, setBoton] = useState(false);

*/
 


    
    

    const submitInfo = () => {
        console.log(from_name + formEmail + formText );

        const emailContent= {
            from_name: from_name,
            formText:formText,
            formEmail:formEmail,

        };


    emailjs.send('service_ambzvte', 'template_owrlael',emailContent, '40TPTn99NItm1wWQ9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    /*hasta aquí es la función para el envío de correo*/
        
     }



       

    return(
        <>
        <div className="formulario__container">
            <div className={enviado? "hiden":"formulario__container__div--formulario"}>
                            
                <form className="Form__container" onSubmit={handleSubmit}>   
                 
                        <div className="containerFlex">
                        <input type="text" className="formItem" placeholder="Nombre"
                        value= {from_name}
                        onChange={(event)=>{set_ToName(event.target.value)}}required/>
                        

                        <input type="email" className="formItem"  placeholder="Correo electrónico"
                        onChange={(event)=>{set_Toemail(event.target.value)}} required/>

                        </div>  
                        <textarea type="text"  className="formText formItem" placeholder="Mensaje" 
                        onChange={(event)=>{set_Totext(event.target.value)}} required/>
                    



                    <div className="divFlexButton" >
                        <button className="ButtonEnviar" type="submit" value="Enviar         formulario" onClick={submitInfo}>Enviar</button>
                    </div>
                </form>            
  
            </div>


            <div className={enviado? "formulario__container__div--enviado":"hiden"}>                  
                    <br/><br/><h3>Su mensaje fue enviado con exíto, pronto estaremos en contacto</h3>
                    
            </div>

                
                
        </div>
        
        </>

    )
}

export default FormularioContacto



