import NavBar from '../src/components/NavBar/NavBar.js'
import Contact from './components/Contact/contact.js';
import Intro from './components/intro/intro.js';
import Skills from './components/Skills/skills.js';
import Works from './components/works/protfolio.js';


function App(){
return (
<div className="App">
<NavBar/>
<Intro/>
<Skills/>
<Works/>
<Contact/>

</div>
);

}

export default App;
