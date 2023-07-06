# Memorando

trigger() - inicia a animação e serve como um contêiner para todas as outras chamadas de função de animação. O template é vinculado ao nome do trigger, que é declarado como primeiro argumento da função. Usa sintaxe de matriz.

style() - define um ou mais estilos CSS para usar em animações. Controla a aparência visual dos elementos HTML durante as animações. Usa sintaxe de objeto.

state() - cria um conjunto nomeado de estilos CSS que devem ser aplicados na transição bem-sucedida para um determinado estado. O estado pode então ser referenciado pelo nome dentro de outras funções de animação.

animate() - especifica as informações de tempo para uma transição. Valores opcionais para delay e easing function. Pode conter métodos style().

transition() - define a sequência de animação entre dois estados nomeados. Usa sintaxe de matriz.
