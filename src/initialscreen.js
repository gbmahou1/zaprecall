import RenderCards from "./flipcards"

export default function InitialScreen() {
  
      return (
  
      <div class="initialScreen">
  
                <img src="assets/logo.png"/>
  
                <div data-identifier="start-zap-recall" onClick={() => RenderCards()} class="initialScreenButton">
  
          <p>Praticar React</p>
  
          <img src="assets/next.png"/>
          
        </div>
        
      </div>
      );
  }

  