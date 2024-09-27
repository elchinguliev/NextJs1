import Link from 'next/link';

export default function Index() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f8f8f8' }}>
      <Link href="/main">Main</Link> |{' '}
      <Link href="/about">About</Link> |{' '}
      <Link href="/contacts">Contacts</Link> |{' '}
      <Link href="/blog">Blog</Link> |{' '}
      <Link href="/account">Account</Link>
    </nav>
  );
}

