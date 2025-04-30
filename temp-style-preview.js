// Substituir a cor do h1 na página Home
const styleContent = `
  h1 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: \${props =>
      props.theme.isDark
        ? '#DDE4F0'
        : props.theme.tokens.colors.primary_new.base.main};
    font-weight: bold;
    text-shadow: \${props =>
      props.theme.isDark
        ? '0 2px 10px rgba(130, 207, 255, 0.3)'
        : '0 2px 10px rgba(43, 108, 223, 0.2)'};
    position: relative;
    display: inline-block;
  }
`;

// Substituir a cor da classe day na página Home
const dayClassStyle = `
  .day {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: \${props =>
      props.theme.isDark
        ? '#DDE4F0'
        : props.theme.tokens.colors.primary_new.base.dark};
    letter-spacing: 0.5px;
  }
`;

console.log('Conteúdo para a tag h1:');
console.log(styleContent);
console.log('\n\nConteúdo para a classe day:');
console.log(dayClassStyle);
