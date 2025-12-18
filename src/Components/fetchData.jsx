import { useState } from "react"


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

            
            setData(data)
            setLoading(false)


            console.log(data)
            
        
            } catch (error) {
            setError(error.message)
            setLoading(false)
            }
            
        }

export default fetchData
