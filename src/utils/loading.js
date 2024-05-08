/**
 *  Função que simula uma operação assíncrona
 *  Espera dois segundos e continua
 *  @return void
 *  @params none 
 *  */
const simulateAsyncFunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000); // Tempo de simulação de 2 segundos
  });
    
};

/**
 *  Função que Controla o estado loading
 *  Recebe uma função de setting e seta para true ou false
 *  @return promise
 *  @params (bool) => void 
 *  */
export const changeState = async (setter) => {
    // Sett loading to true
    setter(true);
    try {
      await simulateAsyncFunction();
      setter(false);
      console.log('Deu certo');
    } catch (err) {
      console.error({msg:'mensagem personalizada',err:err});
      setTimeout(() => {
        setter(false);
      },2000);
    }
}
