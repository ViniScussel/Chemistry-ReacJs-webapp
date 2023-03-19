import logo from './logo.svg';
import './App.css';

//VARIAVEIS GLOBAIS

var randFN;

var randModal;

var randAcido;

var acidosformula = ["0", "H3PO4", "HOBr", "HI", "H2C2O4", "H3BO3", "H2SO4", "HCLO"]

var acidosNomes = ["Ácido clorídrico", "Ácido nítrico", "Ácido fosfórico", "Ácido carbônico"]


var randFormula;

//deve ser algo como :: acidosgeral.ion()
var acidosgeral = [
  {formula: "H3PO4", nome: "Ácido fosfórico", ion: "(PO4)3-", hionizaveis: "triácido", opresente: "oxiácido", forca: "moderado"},
  {formula: "HOBr", nome: "a", ion: "(OBr)-", hionizaveis: "monoácido", opresente: "oxiácido", forca: "fraco"},
  {formula: "HI", nome: "a", ion: "I-", hionizaveis: "triácido", opresente: "hidrácido", forca: "a"},
  {formula: "H2C2O4", nome: "a", ion: "(C2O4)2-", hionizaveis: "diácido", opresente: "oxiácido", forca: "forte"},
  {formula: "H3BO3", nome: "a", ion: "(BO3)3-", hionizaveis: "triácido", opresente: "oxiácido", forca: "fraco"},
  {formula: "H2SO4", nome: "Ácido Sulfurico", ion: "(SO4)2-", hionizaveis: "diácido", opresente: "oxiácido", forca: "forte"},
  {formula: "HClO", nome: "a", ion: "(ClO)-", hionizaveis: "monoácido", opresente: "oxiácido", forca: "fraco"}
];
var acf = acidosgeral.formula;
var acn = acidosgeral.nome;

var acidosFN = acidosformula.concat(acidosNomes);

var modalidade = ["0", "que acido é esse: ", "acertar formula por acido: ", "esse íon forma qual acido: ", "esse ácido forma qual ion: ", "defina esse ácido por H ionizáveis: ", "defina esse ácido por presença de O: ", "qual a força desse ácido: "];

//INICIALIZAR A CHAMADA PARA APARECER CONTEUDO NA TELA
function chamar(){
  var botao = document.getElementById("chamada");
  var texto = document.getElementById("texto");
  
  getModal();
  getFormula();
  getNome();
  getFN();
  if(randModal == 1){
    texto.innerHTML=`${modalidade[randModal] + acidosgeral[randFormula].formula}`}
  if(randModal == 2){texto.innerHTML=`${modalidade[randModal] + acidosgeral[randAcido].nome}`}
  if(randModal == 3){texto.innerHTML=`${modalidade[randModal] + acidosFN[randFN]}`}
  if(randModal == 4){texto.innerHTML=`${modalidade[randModal] + acidosFN[randFN]}`}
  if(randModal == 5){texto.innerHTML=`${modalidade[randModal] + acidosFN[randFN]}`}
  if(randModal == 6){texto.innerHTML=`${modalidade[randModal] + acidosFN[randFN]}`}
  if(randModal == 7){texto.innerHTML=`${modalidade[randModal] + acidosFN[randFN]}`}
}

function verifica(){
  var resposta = document.getElementById("resposta");
  if(resposta.value == acidosgeral[randFormula].nome && randModal == 1){
    alert("voce acertou!");
  }
}

//FUNÇÕES DE NUMEROS ALEATÓRIOS (USADAS PARA ESCOLHER OS EXERCÍCIOS)
function getModal(){
  const min = 1;
    const max = modalidade.length;
    randModal = min + Math.floor(Math.random() * (max-min));
    return randModal
}

function getFormula(){
  const min = 1;
  const max = acidosgeral.length
  randFormula = min + Math.floor(Math.random() * (max-min));
  return randFormula
}

function getNome(){
  const min = 1;
  const max = acidosgeral.length
  randAcido = min + Math.floor(Math.random() * (max-min));
  return randAcido
}

function getFN(){
  const min = 1;
  const max = acidosgeral.length
  randFN = min + Math.floor(Math.random() * (max-min));
  return randFN
}

//CONTEÚDO PRINCIPAL DA TELA
function App() {
  return (
    <div className="App">
      <header className="App-menu">
        <div className="App-menu-div">
          <img src={logo} className="App-menu-logo" alt="logo"/>
          <p className='P-g'>A chemistry way to learn</p>
        </div>
      </header>

      <header className='App-corpo'>
        <div>
          <h1 id='texto'>clique no botão</h1>
          
          <input id='resposta' type="text"></input>
          <button onClick={verifica} id='verificar'>Responder</button>
          <button onClick={chamar} id='chamada'>Nova Pergunta</button>
        </div>
      </header>

      <header className='App-foot'>

      </header>
    </div>
  );
}
export default App;