import './App.css'
import { db } from "./Firebase"
import Header from './component/Header'
import List from './component/List'

export default function app() {
  console.log(db)
  return (
    <div className='App'>
      <Header />
      <List />
      
    </div>
  )
}
