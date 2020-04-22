import FlossCard from '../components/FlossCard';
import Link from 'next/link';
import { observer } from 'mobx-react';
import { useUserStore } from '../stores/UserStore';
import { useThreadStore } from '../stores/ThreadStore';
import Header from '../components/Header';

export default observer(() => {
  const { name, threadNumbers } = useUserStore();
  const { DMCfloss } = useThreadStore();

  const userThreads = DMCfloss.filter((floss) =>
    threadNumbers.includes(floss.color),
  );

  return (
    <div className="App">
      <Header name={name} />
      {userThreads.map((thread) => (
        <FlossCard {...thread} key={thread.color} />
      ))}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
});
