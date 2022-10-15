
console.clear();
const signos = [
  {
    nome: "Sagitario",
    mes: "Dezembro",
    elemento: "Fogo"
  },
  {
    nome: "Libra",
    mes: "Setembro",
    elemento: "Ar"
  },
  {
    nome: "Peixes",
    mes: "Fevereiro",
    elemento: "Agua"
  }
];


const resultado = signos
  .filter(signo => signo.mes === "Setembro")
 
console.log(resultado);
