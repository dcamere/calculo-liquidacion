import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { DefaultLayout } from './Layout';
import 'antd/dist/reset.css';

interface MyFormState {
  inputSueldoBruto: string;
  inputMesesEnEmpresa: string;
  inputVacacionesPendientes: string;
  inputDiasDesdeUltimaGratificacion: string;
  cts: string;
  vacacionesTruncas: string;
  gratificationTrunca: string;
}

const MyForm: React.FC = () => {
  const [state, setState] = useState<MyFormState>({
    inputSueldoBruto: '',
    inputMesesEnEmpresa: '',
    inputVacacionesPendientes: '',
    inputDiasDesdeUltimaGratificacion: '',
    cts: '',
    vacacionesTruncas: '',
    gratificationTrunca: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [`${inputName}`]: value,
    }));
  };

  const handleOnBlur = () => {
    console.log("hey") 
    const calculoVacacionesPendientes = (parseFloat(state.inputMesesEnEmpresa) * 2.5).toString();

    setState((prevState) => ({
      ...prevState,
      inputVacacionesPendientes: calculoVacacionesPendientes.toString()
    }));
  }

  const handleCalculate = () => {
    const sueldo = parseFloat(state.inputSueldoBruto);
    const mesesLaborados = parseFloat(state.inputMesesEnEmpresa);
    const vacacionesPendientes = parseFloat(state.inputVacacionesPendientes);
    const diasDesdeUltimaGratificacion = parseFloat(state.inputDiasDesdeUltimaGratificacion);
    const newCts = sueldo + Math.round((sueldo / 6) / (mesesLaborados * 30));
    const newVacacionesTruncas = Math.round((sueldo / 360) * vacacionesPendientes);
    const newGratificationTrunca = Math.round((sueldo / 6) * (diasDesdeUltimaGratificacion / 30));


    setState((prevState) => ({
      ...prevState,
      cts: newCts.toString(),
      vacacionesTruncas: newVacacionesTruncas.toString(),
      gratificationTrunca: newGratificationTrunca.toString(),
    }));
  };

  return (
    <DefaultLayout>
      <Input
        placeholder="Sueldo bruto"
        value={state.inputSueldoBruto}
        onChange={(e) => handleInputChange(e, 'inputSueldoBruto')}
      />
      <br />
      <br />
      <Input
        placeholder="Meses en la empresa"
        value={state.inputMesesEnEmpresa}
        onChange={(e) => handleInputChange(e, 'inputMesesEnEmpresa')}
        onBlur={handleOnBlur}
      />
      <br /> 
      <br />
      <Input
        placeholder="Días de vacaciones pendientes"
        value={state.inputVacacionesPendientes}
        onChange={(e) => handleInputChange(e, 'inputVacacionesPendientes')}
      />
      <br /> 
      <br />
      <Input
        placeholder="Días transcurridos desde el último pago de gratificación"
        value={state.inputDiasDesdeUltimaGratificacion}
        onChange={(e) => handleInputChange(e, 'inputDiasDesdeUltimaGratificacion')}
      />
      <br /> 
      <br />
      <Button type="primary" onClick={handleCalculate}>
        Calcular liquidación
      </Button>
      <br />
      <br />
      <span>Liquidación:</span>
      <br /><br />
      <span>CTS: s/ {state.cts}</span>
      <br /><br />
      <span>Vacaciones Truncas: s/ {state.vacacionesTruncas}</span>
      <br /><br />
      <span>Gratificación Trunca: s/ {state.gratificationTrunca}</span>
      <br /><br />
      <span>Total: <b>s/ {parseFloat(state.cts) + parseFloat(state.vacacionesTruncas) + parseFloat(state.gratificationTrunca)}</b></span>
    </DefaultLayout>
  );
};

export default MyForm;
