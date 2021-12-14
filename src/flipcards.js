import ReactDOM, { render } from "react-dom";
import React from 'react';



function FlipCards()
{
  let deck1 = [
    {
        id: "1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        id: "2",
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        id: "3",
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        id: "4",
        question: "Podemos colocar __ dentro do JSX ",
        answer: "expressões"
    },
    {
        id: "5",
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        id: "6",
        question: "Usamos o npm para __ ",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        id: "7",
        question: "Usamos props para __ ",
        answer: "passar diferentes informações para componentes "
    },
    {
        id: "8",
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

  const [incorrect, setIncorrect] = React.useState(0);

  const [side, setSide] = React.useState('');

  function flip(entry)
  {
    setSide(entry);
  }

  const [bcolor, setBcolor] = React.useState('');

  function selectAnswer(color)
  {
    setBcolor(color);
  }

  const [hidebar, setHide] = React.useState('');

  function hideAnswer(bar)
  {
    setHide(bar);
  }

  const [counter, setCounter] = React.useState(0);

  const [successScreen, setSuccessScreen] = React.useState('hidden');

  const [failureScreen, setFailureScreen] = React.useState('hidden');

  function Count(props)
  {
    if(counter < deck1.length-1)
    {
      setCounter(props);
    }
    else
    {
      if (incorrect === 1)
      {
        setFailureScreen('');
      }
      else
      {
        setSuccessScreen('');
      }
    }
    
  };

  const [buttonClass, setButtonClass] = React.useState("turnButton hide");

  function changeButton(props)
  {
    setButtonClass(props);
  }

  const [lastButton, setLastButton] = React.useState('turnbutton hide');

  function changeLastButton(props)
  {
    setLastButton(props);
  }


  let contador = 1;

    return (

    <div class="flashCardScreen">

        <img class="miniLogo" src="assets/logo-mini.png" alt="logo"/>
  
        <div data-identifier="flashcard" class="flashCard">
  
          <div id="cardContent" className = {`flashCardContent ${bcolor}`}>
  
            <div className ={`theFront ${side}`}>
  
              <div data-identifier="counter" class="flipCardTracker">{counter+1}/{deck1.length}</div>
              <div class="questionText">{deck1[counter].question}</div>
              <img class="turnButton" onClick={()=> flip('hide')} src="assets/turn.png" alt="exit"/>
  
            </div>
  
            <div class="theBack">
  
              <div class="flipCardTracker">{counter+1}/{deck1.length}</div>
              <div class="backTitle">{deck1[counter].question}</div>
              <div class="backText">{deck1[counter].answer}</div>
  
              <div id = "teste" className = {`answerBoxes ${hidebar}`}>
  
                <div class = {`answerBox`} onClick={() => {hideAnswer('hidden');  selectAnswer('black'); changeButton('turnButton');}} style={{borderColor: 'black'}}>
                  <div>Aprendi agora</div>
                </div>
                
                <div class="answerBox" onClick={() => {hideAnswer('hidden');  selectAnswer('red'); changeButton('turnButton'); setIncorrect(1);}} style={{borderColor: 'red'}}>
                  <div>Não lembrei</div>
                </div>
  
                <div class="answerBox" onClick={() => {hideAnswer('hidden');  selectAnswer('green'); changeButton('turnButton');}} style={{borderColor: 'green'}}>
                  <div>Lembrei com esforço</div>
                </div>
  
                
                <div class="answerBox" onClick={() => {hideAnswer('hidden');  selectAnswer('yellow'); changeButton('turnButton');}} style={{borderColor: 'yellow', fontWeight: 'bold'}}>
                  <div>Zap!</div>
                </div>
              </div>
  
              <img data-identifier="arrow" class={`${buttonClass}`} onClick={() => {selectAnswer(''); hideAnswer(''); changeButton('turnButton hide'); flip(''); Count(counter+1);}}src="assets/turn.png" alt="exit button"/>

              <img class={`${lastButton}`} src="assets/turn.png" alt="exit button2"/>
  
            </div>

            
  
          </div>
      </div>

      <div class={`successScreen ${successScreen}`}>
          <div class="finalScreenText">
          PARABÉNS!
          <img src="assets/party.png"/>
          <div class="finalScreenTextFooter">
          Você não esqueceu de nenhum flashcard!

          </div>
          </div>
      </div>

      <div class={`successScreen ${failureScreen}`}>
          <div class="finalScreenText">
          Putz..
          <img src="assets/party.png"/>
          <div class="finalScreenTextFooter">
          Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!

          </div>
          </div>
      </div>



        
  
    </div>

    
    );
}

export default function RenderCards()
{
ReactDOM.render (<FlipCards/>, document.querySelector(".root"));
}