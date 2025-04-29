# Implementação de Ícones Climáticos

Este documento descreve a implementação dos ícones climáticos utilizados no aplicativo de previsão do tempo.

## Ícones do OpenWeatherMap

O aplicativo utiliza os ícones oficiais do OpenWeatherMap para representar as condições climáticas. Esses ícones são carregados dinamicamente com base no código do clima fornecido pela API.

### Como funciona

1. A API do OpenWeatherMap retorna um código de ícone (por exemplo, `04d` para nuvens durante o dia)
2. O componente `OpenWeatherMapIcon` constrói a URL do ícone: `https://openweathermap.org/img/wn/${iconCode}@2x.png`
3. Os ícones são exibidos nos cards de previsão e no modal de detalhes

### Customização Visual

Os ícones possuem efeitos visuais personalizados baseados no tipo de clima:

- Tempestade: Sombra roxa (rgba(155, 89, 182, 0.8))
- Chuva/Chuvisco: Sombra azul (rgba(41, 128, 185, 0.7))
- Neve: Sombra branca (rgba(236, 240, 241, 0.7))
- Névoa: Sombra cinza claro (rgba(189, 195, 199, 0.6))
- Céu limpo (dia): Sombra amarela/dourada (rgba(243, 156, 18, 0.8))
- Céu limpo (noite): Sombra branco azulado (rgba(245, 245, 245, 0.6))
- Nublado: Sombra cinza (rgba(149, 165, 166, 0.5))

A intensidade da sombra também varia conforme o tipo de clima, com efeitos mais intensos para sol e tempestade, e mais suaves para nuvens e névoa.

## Fallback

Em caso de falha no carregamento da imagem, um SVG simples é exibido como fallback.

## Dependências

O componente `OpenWeatherMapIcon` não possui dependências externas além do React, tornando-o leve e fácil de manter.
