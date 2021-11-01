import Link from 'next/link';
import HEAD from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    // <h1>
    //   First Post <a href="/">home </a>
    // </h1>
    <Layout>
      <HEAD>
        <title> First Post</title>
      </HEAD>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
