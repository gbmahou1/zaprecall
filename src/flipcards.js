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

  const [answerbar, setAnswerBar] = React.useState('');

  function hideAnswerBar(entry)
  {
    setAnswerBar(entry);
  }


  let contador = 1;

    return (

    <div class="flashCardScreen">

        <img class="miniLogo" src="assets/logo-mini.png" alt="logo"/>
  
        <div class="flashCard">
  
          <div id="cardContent" class = {`flashCardContent ${bcolor}`}>
  
            <div class={`theFront ${side}`}>
  
              <div class="flipCardTracker">{contador}/{deck1.length}</div>
              <div class="questionText">{deck1[contador-1].question}</div>
              <img class="turnButton" onClick={()=> flip('hide')} src="assets/turn.png" alt="exit"/>
  
            </div>
  
            <div class="theBack">
  
              <div class="flipCardTracker">{contador}/{deck1.length}</div>
              <div class="backTitle">{deck1[contador-1].question}</div>
              <div class="backText">{deck1[contador-1].answer}</div>
  
              <div class={`answerBoxes ${answerbar}`}>
  
                <div class="answerBox" onClick={() => selectAnswer('black')} style={{borderColor: 'black'}}>
                  <div>Aprendi agora</div>
                </div>
                
                <div class="answerBox" onClick={() => selectAnswer('red')} style={{borderColor: 'red'}}>
                  <div>Não lembrei</div>
                </div>
  
                <div class="answerBox" onClick={() => selectAnswer('green')} style={{borderColor: 'green'}}>
                  <div>Lembrei com esforço</div>
                </div>
  
                
                <div class="answerBox" onClick={() => selectAnswer('yellow')} style={{borderColor: 'yellow', fontWeight: 'bold'}}>
                  <div>Zap!</div>
                </div>
              </div>
  
              <img class="turnButton hide" src="assets/turn.png" alt="exit button"/>
  
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