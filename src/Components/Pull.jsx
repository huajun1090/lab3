import "@radix-ui/themes"
import { Button } from "@radix-ui/themes";

export default function Pull({pokemondata, setdata, pokemonloading, setpokemonloading, seterror}) {



  const handleClick = () => {
     const fetchData = async () => {
            try {

            const random_id = Math.floor(Math.random() * 1000)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_id}`)
              //const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${1000}/`)
              //const count = await fetch('https://pokeapi.co/api/v2/pokemon/')

              //const data2 = await count.json()
            

              //console.log(data2.count)

            if (!response.ok) throw new Error('Failed')
            const data = await response.json()

            
            setdata(data)
            setpokemonloading(false)


            console.log(data)
            
        
            } catch (error) {
            seterror(error.message)
            setpokemonloading(false)
            }
            
        }
        fetchData();
  };
  
    return (
        <div>
             <button  onClick={handleClick}> Pull Data </button>
        </div>
        
        
        )
}
