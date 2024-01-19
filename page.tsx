import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"


export default function Home() {
  return (
    <main className="container">
     <Header/>
        <Experience/>
          <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span>🇺🇸 EN - Advanced</span>
              <span>🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
              <div className="education-info">
              <span>🎓</span>
              <span>Graduated in Business Administration. - UniCEUB</span>
              <span>🎓</span>
              <span>Graduating in Systems Analysis and Development - Universidade Católica de Brasília</span>
            </div>
            
          </div>
          <div className="buttons"></div>
            <div className="social">

            </div>
            <button>Contact me</button>
      
        
    </main>
  )
}
