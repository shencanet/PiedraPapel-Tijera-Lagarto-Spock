import { useState, useEffect } from 'react'


const options = [
{ id: 0, name: "Piedra", emoji: "🥌", Beats: [2, 3] },
{id: 1, name: "Papel", emoji: "📜", Beats: [0] },
{id: 2, name: "Tijera", emoji: "✂️", Beats: [1, 3] },
{id: 3, name: "Lagarto", emoji: "🐊", Beats: [1] },
{id: 4, name: "Spock", emoji: "🖖🏻", Beats: [3, 0] }

];

export default function Game() {
    const[userChoice, setUserChoice] = useState(null);
    const[computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);


  return (
    <div className='flex items-center justify-center h-screen bg-gray800'></div>




  )
}

 