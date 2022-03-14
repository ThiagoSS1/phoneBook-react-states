import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DataTable from '../../components/data-table';
import { useSelector } from 'react-redux';

export default function Home() {
  // history para navegar para o register
  const history = useHistory();
  // aqui eu crio listas para o estado das entradas e saidas
  const [incomeInLocal, setIncomeInLocal] = useState([]);
  const [incomeOutLocal, setIncomeOutLocal] = useState([]);


  // aqui eu busco as informacoes do redux pelo seletor do combine reducers
  const incomeIn = useSelector((state) => state.incomeIn);
  const incomeOut = useSelector((state) => state.incomeOut);
  console.log(incomeOut);

  const handleClick = () => {
    history.push('/register');
  };

  useEffect(() => {
    if (incomeIn) {
      // verifico se veio alguma informacao e atualizo o estado local 
      setIncomeInLocal(incomeIn);
    }

    
  }, [incomeIn]);

  useEffect(() => { 

    if (incomeOut) {
      setIncomeOutLocal(incomeOut);
    }
  }, [incomeOut]);

  return (
    <Grid item>
      <Grid item container spacing={2}>
        <Grid item xs={12} md={6}>
          <DataTable title="Nome" data={incomeInLocal} />
        </Grid>

        <Grid item xs={12} md={6}>
          <DataTable title="Telefone" data={incomeOutLocal} />
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" onClick={() => handleClick()}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}
