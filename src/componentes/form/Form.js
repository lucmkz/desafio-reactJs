import React from 'react'

const FormApp = ({ handleChange, className, handleClick, sucess }) => (
    <form >
        <div className="fieldset">
            <div className="space-md" />
            <div className="textAreaForm">
                <label>
                    <strong>Observações:</strong>
                </label>
                <div className="space"/>
                <textarea className="textArea" name="descricao" placeholder="Alguma dúvida? Recado?" onChange={handleChange}></textarea>
            </div>
            <div className="space-md"/>
        </div>
        <footer className="footer">
            <div className={sucess ? "sucessText" : "error"}>
                <span>Formulário enviado com sucesso!</span>
            </div>
            <div className="send">
                <button type="submit" className={className} onClick={handleClick}>Enviar</button>
            </div>
        </footer>
    </form>
)

export default FormApp