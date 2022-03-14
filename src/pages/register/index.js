import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Typography, IconButton, Card, Toolbar,
  TextField, FormControl, InputLabel, Select,
  CardContent, CardActions, Button, Box, MenuItem,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import Alert from '../../components/alert';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { setIncomeIn } from '../../store/modules/income-in/actions';
import { setIncomeOut } from '../../store/modules/income-out/actions';

export default function Register() {
  const classes = useStyles();

  // disparador - ele envia a requisicao para o redux 
  const dispatch = useDispatch();

  // mantém o estado do tipo de registro ( entrada ou saida )
  const [type, setType] = useState(2);
  // estado da descrição 
  const [description, setDescription] = useState('');
  // estado do valor digitado
  const [value, setValue] = useState('');


  // atualiza o estado do tipo de movimentação q o usuário escolheu
  const handleChangeSelect = (event) => {
    setType(event.target.value);
  };

  // atualiza o estado com as informações digitadas pelo usuário 
  const handleChangeInput = (event, input) => {
    if (input === 'description') {
      setDescription(event.target.value);
    } else {
      setValue(event.target.value);
    }
  };

  // manipulo o click do reset, zerando o estado
  const handleReset = () => {
    setType(2);
    setDescription('');
    setValue('');
  };

  const handleDelete = () => {
    dispatch(setIncomeIn(null));
    dispatch(setIncomeOut(null));
  }

  // manipulo o click no cadastrar
  const handleSubmit = () => {
    if (type === 1) {
      // disparo a action para setIncomeIn / adiciona o payload no estado
      dispatch(setIncomeIn({
        description,
        value,
      }));
    } else {
      /// aqui é saída
      dispatch(setIncomeOut({
        description,
        value,
      }))
    }

    // limpa a tela
    handleReset();

  };

  return (
    <Grid item>
      <Toolbar>
        <Link to="/">
          <IconButton aria-label="back" component="span">
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography variant="h6">
          Voltar
        </Typography>
      </Toolbar>

      <Alert type="success" msg="Cdastrado com sucesso!" />

      <Grid item container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">Cadastrar os dados telefónico</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>

            <CardContent>
              <Typography gutterBottom className={classes.titleInfo}>
                Utilize os campos abaixo para cadastrar nome e o telefone.
              </Typography>
              <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'description')} value={description} fullWidth label="Nome ou Telefone" variant="outlined" />
              </Box>
              {/* <Box p={1}>
                <TextField onChange={(e) => handleChangeInput(e, 'value')} value={value} type="number" fullWidth label="R$ valor" variant="outlined" />
              </Box> */}
              <Box p={1}>
                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleChangeSelect}
                    label="Age"
                  >
                    <MenuItem value={1}>Nome</MenuItem>
                    <MenuItem value={2}>Telefone</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>

            <CardActions className={classes.actions}>

              <Box alignSelf="flex-start">
                <Button variant="outlined" onClick={handleReset} color="secondary">
                  limpar
                </Button>
              </Box>
              <Box alignSelf="flex-end">
                <Button variant="contained" onClick={handleSubmit} color="secondary">
                  cadastrar
                </Button>
              </Box>

            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </Grid>
  );
}
