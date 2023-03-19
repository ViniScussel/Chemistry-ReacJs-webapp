//cd my-app
//npm start
import logo from './logo.svg';
import './App.css';

function pare(){
  document.getElementById("rodarodajequiti").className='naoroda';
}
function contnue(){
  document.getElementById("rodarodajequiti").className='ReactImg';
}

function App() {
  return (
    <div className="App">
      <header className="App-menu">
        <div className='App-menu-div'>
          <img src={logo} id='rodarodajequiti' className="ReactImg" alt='logo' onMouseEnter={pare} onMouseLeave={contnue}/>
          <p className='Pgeneral'>
            A responsive ReactJS web app to chemistry classes
          </p>
        </div>
      </header>
        
      <header className='App-header'>
        <div className='App-header-acidos'>
          <center><h1>Acids</h1></center>

          <p className='Pwrite'><center>
            "Substance that when get into whater ionizate, producing an
            H⁺ and an Xʸ⁻, being ʸ the number of ionizables H"
          </center>
          </p>

          <center><h2>Classification</h2></center>

          <p className='Pwrite'><center>
            Acids can be classified by many ways:
          </center>
          </p>

          <ul className='ULgeneral'>
            <li><strong>By ionizable 'H's:</strong> (1H) monoacid acid, (2H) diacid acid, (3H) triacid acid;</li>
            <li><strong>By oxigen presence:</strong> oxy-acid when have 'O', and hydracid when not;</li>
            <li><strong>By their force:</strong> "n°O - n°H = R" (R=0 weak; R=1 'semi'; R&gt;=2 strong).</li>
          </ul>
          <center>
            <h2>Nomenclatures</h2>
            <p className='Pwrite'>Also, acids have their own nomenclatures. they are maked by analising  the anions nomenclatures. So, if the anion nomenclature terminate with --, you'll be replacing by -- (for portuguese only):</p>
            
          <ul className='ULgeneral'>
            <li>ATO ‎ ‎ ‎ =&gt; ‎ ‎ ICO</li>
            <li>ETO =&gt; IDRICO</li>
            <li>ITO ‎ ‎ ‎  =&gt; ‎ ‎ OSO</li>
          </ul>  
          </center>
        </div>
      </header>
    </div>
  );
}
export default App;
