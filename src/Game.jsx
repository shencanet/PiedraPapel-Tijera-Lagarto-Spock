import { useState, useEffect } from 'react'


const options = [
{ id: 0, name: "Piedra", emoji: "🥌", Beats: [2, 3] },
{id: 1, name: "Papel", emoji: "📜", Beats: [0] },
{id: 2, name: "Tijera", emoji: "✂️", Beats: [1, 3] },
{id: 3, name: "Lagarto", emoji: "🐊", Beats: [1] },
{id: 4, name: "Spock", emoji: "🖖🏻", Beats: [3, 0] }

];
const getResult = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 0;
  }

if (options[userChoice].Beats.includes(computerChoice)){
  return 1;
}
return 2;
}





export default function Game() {
    const[userChoice, setUserChoice] = useState(null);
    const[computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const[disabled, setDisabled]= useState(false);
    const handlePlay = (Choice) => {
      setUserChoice(Choice);
      setDisabled(true)
      const randomChoice = Math.floor(Math.random() * 5);
      setTimeout(()=> {
        setComputerChoice(randomChoice);
      }, 1500);
      setTimeout( ()=> {
        setResult(getResult(choice, randomChoice));

      }, 3000);
      clearTimeout();

    };


  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>

      <div className='rounded-lg p-4 bg-gray-500'>
        <h1 className='text-3xl mb-4 text-center font-bold'>A jugar</h1>
        <div className='max-w-md mx-auto'>
          {options.map(
            (option) => (
              <button className='px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500'
              key={option.id}
              disabled={disabled}
              onClick={()=> handlePlay(option.id)}
              title={option.name}
              >{option.emoji}</button>

            )
          )}

        </div>
      </div>
    </div>




  )
}

 