import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-menu">
        <div className='App-menu-div'>
          <img src={logo} className="ReactImg" alt='logo'/>
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
            <li><strong>By ionizable 'H's:</strong> (1H) monobasic acid, (2H) dibasic acid, (3H) tribasic acid;</li>
            <li><strong>By oxigen presence:</strong> oxy-acid when have 'O', and hydracid when not;</li>
            <li><strong>By their force:</strong> "n°O - n°H = R" (R=0 weak; R=1 'semistrong'; R&gt;=2 strong). </li>
          </ul>

          
        </div>
      </header>
    </div>
  );
}

export default App;
