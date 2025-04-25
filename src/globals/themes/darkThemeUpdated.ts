import { themeCommons } from "./commons";
import { IPropsTheme } from "../types/theme";
import { dark } from "./dark"; // Importando o tema atual

// Criando uma versão corrigida do tema escuro com as propriedades adicionais
const updatedDarkTheme: IPropsTheme = {
  ...dark,
  colors: {
    ...dark.colors,
    // Adicionando as propriedades que estavam faltando
    headerBg: "#1A1A1A", // Cor para o header no modo escuro
    containerBg: "#2A2A2A", // Cor ligeiramente mais clara para os containers
    background: "#121212", // Quase preto para o fundo
  }
};

export default updatedDarkTheme;
