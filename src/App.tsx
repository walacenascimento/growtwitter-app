import { Explorer } from './components/Explorer'
import { Feed } from './components/Feed'
import { Profile } from './components/Profile'


export function App(){
  return(
    <>
    <h1>Grow Twitter App</h1>
    <Explorer />
    <Feed />
    <Profile />

    </>
  )
}