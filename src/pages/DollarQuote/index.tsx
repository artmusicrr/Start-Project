'use client';
import React, { useEffect, useState } from 'react';
import { Quote } from './types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const currencyList = [
  { code: 'USD', name: 'Dólar Americano', country: 'Estados Unidos' },
  { code: 'EUR', name: 'Euro', country: 'União Europeia' },
  { code: 'GBP', name: 'Libra Esterlina', country: 'Reino Unido' },
  { code: 'JPY', name: 'Iene Japonês', country: 'Japão' },
  { code: 'CAD', name: 'Dólar Canadense', country: 'Canadá' },
  { code: 'CHF', name: 'Franco Suíço', country: 'Suíça' },
  { code: 'AUD', name: 'Dólar Australiano', country: 'Austrália' },
  { code: 'CNY', name: 'Yuan Chinês', country: 'China' },
  { code: 'ARS', name: 'Peso Argentino', country: 'Argentina' },
  { code: 'MXN', name: 'Peso Mexicano', country: 'México' },
  { code: 'BTC', name: 'Bitcoin', country: 'Criptomoeda' },
  { code: 'ETH', name: 'Ethereum', country: 'Criptomoeda' },
  { code: 'BRL', name: 'Real Brasileiro', country: 'Brasil' },
];

// Acessando isDarkMode no escopo do componente para usarmos no styled
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.grey[100], // Cor de fundo do cabeçalho sempre clara
    color: theme.palette.grey[900], // Cor do texto do cabeçalho sempre escura
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
  },
  '&.MuiTableCell-body': {
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.87)', // Cor do texto do corpo sempre escura
    backgroundColor: '#fff', // Cor de fundo do corpo da célula sempre clara
  },
}));

const PageOne: React.FC = () => {
  const [quotes, setQuotes] = useState<{ [key: string]: Quote }>({});
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Estado para controlar a abertura do modal da calculadora
  const [openCalculator, setOpenCalculator] = useState(false);

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleConversion = () => {
    if (fromCurrency && toCurrency && amount) {
      // Encontra as cotações para as moedas selecionadas em relação ao BRL
      const fromQuote = quotes[`${fromCurrency}BRL`];
      const toQuote = quotes[`${toCurrency}BRL`];

      if (fromQuote && toQuote && fromQuote.bid && toQuote.bid) {
        const fromRate = parseFloat(fromQuote.bid);
        const toRate = parseFloat(toQuote.bid);

        // Evita divisão por zero e NaN
        if (toRate > 0 && !isNaN(fromRate) && !isNaN(toRate) && !isNaN(parseFloat(amount))) {
          const convertedAmount = (parseFloat(amount) * (fromRate / toRate)).toFixed(4);
          setResult(
            `${parseFloat(amount).toFixed(2)} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
          );
        } else {
          setResult('Taxas ou valor inválidos');
        }
      } else {
        setResult('Selecione moedas válidas e digite um valor.');
      }
    } else {
      setResult('Selecione moedas e digite um valor.');
    }
  };

  // Executa a conversão sempre que amount, fromCurrency ou toCurrency mudarem
  useEffect(() => {
    handleConversion();
  }, [amount, fromCurrency, toCurrency, quotes]); // Adicionado quotes como dependência para recálculo ao carregar dados

  useEffect(() => {
    const codes = currencyList
      .map(c => c.code)
      .filter(code => code !== 'BRL')
      .map(code => `${code}-BRL`)
      .join(',');
    // Verifica se há outras moedas para buscar, senão a URL fica vazia
    const apiUrl = codes ? `https://economia.awesomeapi.com.br/last/${codes}` : '';

    // Inclui a cotação BRL-BRL manualmente
    const brlQuote = {
      code: 'BRL',
      codein: 'BRL',
      name: 'Real/Brazilian Real', // Nome que a API usaria para BRL-BRL
      high: '1',
      low: '1',
      varBid: '0',
      pctChange: '0',
      bid: '1',
      ask: '1',
      timestamp: String(Math.floor(Date.now() / 1000)), // Timestamp atual
      create_date: new Date().toISOString(), // Data de criação atual
    };

    if (apiUrl) {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          // Adiciona a cotação BRL-BRL aos dados recebidos
          setQuotes({ ...data, BRLBRL: brlQuote });
          setLoading(false);
        })
        .catch(err => {
          console.error('Erro ao buscar cotações:', err);
          // Define apenas a cotação BRL-BRL se a API falhar
          setQuotes({ BRLBRL: brlQuote });
          setLoading(false);
        });
    } else {
      // Se não houver outras moedas (além de BRL), apenas define a cotação BRL-BRL
      setQuotes({ BRLBRL: brlQuote });
      setLoading(false);
    }
  }, []); // Dependência vazia para rodar apenas uma vez na montagem

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: { xs: '100%', sm: '100%', md: 1200 },
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxHeight: 'calc(100vh - 64px)',
        bgcolor: '#ffffff',
        color: 'rgba(0, 0, 0, 0.87)',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1">
            Cotações de Moedas
          </Typography>
          <Button variant="contained" onClick={() => setOpenCalculator(true)}>
            Calcular Moeda
          </Button>
        </Box>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Atualização em tempo real das cotações de moedas estrangeiras
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
          Última atualização: {new Date().toLocaleString()}
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: 'auto',
          width: '100%',
          backgroundColor: '#fff', // Fundo da tabela sempre claro
          borderRadius: 1,
          boxShadow: 'var(--Paper-shadow)', // Manter sombra condicional para o container geral
          backgroundImage: 'var(--Paper-overlay)', // Manter overlay condicional
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '& .MuiTable-root': {
            minWidth: 650,
          },
          '& .MuiTableBody-root': {
            '& .MuiTableRow-root:hover': {
              backgroundColor: theme.palette.action.hover, // Hover sempre em light mode
            },
          },
          '& .MuiTableCell-root': {
            borderColor: theme.palette.divider, // Borda sempre clara
          },
          '& .MuiTableBody-root .MuiTableRow-root': {
            borderColor: theme.palette.divider, // Borda da linha do corpo sempre clara
          },
        }}
      >
        <Table stickyHeader size={isMobile ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <StyledTableCell width={isMobile ? '20%' : '15%'}>Moeda</StyledTableCell>
              <StyledTableCell width={isMobile ? '20%' : '15%'}>Código</StyledTableCell>
              <StyledTableCell width={isMobile ? '30%' : '35%'}>País</StyledTableCell>
              <StyledTableCell width={isMobile ? '30%' : '35%'}>Cotação (BRL)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyList.map(currency => (
              <TableRow key={currency.code} hover>
                <StyledTableCell>
                  <Typography variant="body2" fontWeight="600">
                    {currency.code}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>{currency.code}</StyledTableCell>
                <StyledTableCell>{currency.country}</StyledTableCell>
                <StyledTableCell>
                  {loading
                    ? 'Carregando...'
                    : quotes[`${currency.code}BRL`]
                      ? `R$ ${parseFloat(quotes[`${currency.code}BRL`].bid).toFixed(4)}`
                      : 'N/A'}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal da Calculadora */}
      <Modal
        open={openCalculator}
        onClose={() => setOpenCalculator(false)}
        aria-labelledby="calculator-modal-title"
        aria-describedby="calculator-modal-description"
      >
        {/* Conteúdo do Modal - Calculadora */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 350, sm: 450, md: 600 }, // Largura responsiva
            bgcolor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: 24,
            p: 4, // Padding
            borderRadius: 2,
            color: 'rgba(0, 0, 0, 0.87)', // Cor do texto
          }}
        >
          <Typography
            id="calculator-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
            }}
          >
            Conversor de Moedas
          </Typography>
          {/* Conteúdo da calculadora aqui */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              mt: 2,
            }}
          >
            <TextField
              label="Valor"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              sx={{ flex: 1, minWidth: { sm: 150 } }}
              InputLabelProps={{
                shrink: true,
                sx: {
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                },
              }}
              InputProps={{
                sx: {
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                },
              }}
            />
            <FormControl sx={{ flex: 1, minWidth: { sm: 150 } }}>
              <InputLabel
                id="from-currency-label"
                sx={{
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                }}
              >
                De
              </InputLabel>
              <Select
                labelId="from-currency-label"
                id="from-currency-select"
                value={fromCurrency}
                label="De"
                onChange={e => setFromCurrency(e.target.value as string)}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                  '& .MuiSelect-icon': {
                    color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                    },
                  },
                }}
              >
                {currencyList.map(currency => (
                  <MenuItem
                    key={currency.code}
                    value={currency.code}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                    }}
                  >
                    {currency.name} ({currency.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
              }}
            >
              PARA
            </Typography>
            <FormControl sx={{ flex: 1, minWidth: { sm: 150 } }}>
              <InputLabel
                id="to-currency-label"
                sx={{
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                }}
              >
                Para
              </InputLabel>
              <Select
                labelId="to-currency-label"
                id="to-currency-select"
                value={toCurrency}
                label="Para"
                onChange={e => setToCurrency(e.target.value as string)}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                  '& .MuiSelect-icon': {
                    color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                    },
                  },
                }}
              >
                {currencyList.map(currency => (
                  <MenuItem
                    key={currency.code}
                    value={currency.code}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
                    }}
                  >
                    {currency.name} ({currency.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              id="calculator-modal-description"
              variant="h6"
              sx={{
                color: theme.palette.mode === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
              }}
            >
              Resultado: {result}
            </Typography>
          </Box>
          {/* Botão para fechar o modal */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button onClick={() => setOpenCalculator(false)}>Fechar</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PageOne;
