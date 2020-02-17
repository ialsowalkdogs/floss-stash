import FlossCard from '../components/FlossCard'
import Link from 'next/link'
import { observer, Provider } from 'mobx-react'
import userStore from '../stores/UserStore'
import Header from '../components/Header'

export default observer(() => {
  const sampleFloss = {
    brand: 'DMC',
    color: 3713,
    r: 255,
    g: 226,
    b: 226,
  }

  return (
    <div className="App">
      <Header name={userStore.name} />
      <FlossCard {...sampleFloss} />
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
})
