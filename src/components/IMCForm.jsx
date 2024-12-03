import React, { useState } from "react";
import "./imc.css";

const IMCForm = () => {
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [result, setResult] = useState("");

const calculateIMC = () => {
    if (weight && height) {
      const imc = (weight / (height * height)).toFixed(2);

        let classification = "";
        if (imc < 18.5) {
            classification = "Abaixo do peso";
        } else if (imc < 24.9) {
            classification = "Peso normal";
        } else if (imc < 29.9) {
            classification = "Sobrepeso";
        } else {
            classification = "Obesidade";
        }

        setResult(`Seu IMC é ${imc} (${classification})`);
    } else {
        setResult("Preencha os campos corretamente!");
    }
};

    return (
        <div className="imc-container">
            <h2>Calculadora de IMC</h2>

            <label>Peso (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Digite seu peso"/>

            <label>Altura (m):</label>
            <input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Digite sua altura"/>

            <button onClick={calculateIMC}>Calcular</button>
            <p className="result">{result}</p>

            <table className="imc-table">
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menos de 18.5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18.5 - 24.9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>25 - 29.9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30 ou mais</td>
                        <td>Obesidade</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default IMCForm;
