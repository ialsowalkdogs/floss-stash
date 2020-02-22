import FlossCard from '../components/FlossCard';
import Link from 'next/link';
import { observer } from 'mobx-react';
import { useUserStore } from '../stores/UserStore';
import { useThreadStore } from '../stores/ThreadStore';
import Header from '../components/Header';

export default observer(() => {
  const { name, threadNumbers } = useUserStore();
  const { DMCthreads } = useThreadStore();

  const userThreads = DMCthreads.filter(color =>
    threadNumbers.includes(color['DMC']),
  );

  return (
    <div className="App">
      <Header name={name} />
      {userThreads.map(thread => (
        <FlossCard {...thread} />
      ))}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
});
