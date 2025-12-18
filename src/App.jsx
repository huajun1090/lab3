import { useState ,useEffect} from 'react'
import { Adam, Hua } from './Components/example'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Pull from './Components/pull'
//import { fetchData } from './Components/fetchData'
import fetchData from './Components/fetchData'
import "@radix-ui/themes/styles.css";
import { Theme, Flex, Text, Button } from "@radix-ui/themes";


function App() {
    
    const [count, setCount] = useState(0)
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState("none")

    const [isShiny, setIsShiny] = useState(false)

    console.log('Hello')

  return (
    <Theme appearance='dark'>
      <Flex align="center" justify="center" style={{ minHeight: '100vh', padding: 24, boxSizing: 'border-box' }}>
        <div style={{ width: '100vw', textAlign: 'center' }}>
          <Pull
            pokemondata={data}
            setdata={setData}
            pokemonloading={loading}
            setpokemonloading={setLoading}
            seterror={setError}
          />

          <div style={{ margin: '12px 0' }}>
            <Button
              onClick={() => setIsShiny(s => !s)}
              disabled={!data?.sprites}
            >
              {isShiny ? 'Show Normal' : 'Show Shiny'}
            </Button>
          </div>

          {/* centered image container */}
          <div style={{ width: 500, height: 500, margin: '16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--colors-neutral-2)', borderRadius: 8, overflow: 'hidden' }}>
            <img
              src={isShiny ? data?.sprites?.front_shiny : data?.sprites?.front_default}
              alt={data ? `${data.name} ${isShiny ? 'shiny' : 'normal'}` : ''}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          
          <div style={{ marginTop: 8 }}>
            <Text size="4" weight="6">{data?.name ?? ''}</Text>
            <div style={{ marginTop: 6 }}>
              <Text size="2" tone="muted">Weight: {data?.weight ?? '-'}</Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text size="2">Hellooooo</Text>
            </div>
          </div>
        </div>
      </Flex>
    </Theme>
  )
}

export default App
