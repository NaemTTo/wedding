import { NextPage } from 'next';
import Head from 'next/head';

const UnknownPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>알 수 없는 초대장</title>
      </Head>
      <div
        style={{
          display: 'flex',
          height: 'calc(100vh - 48px)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>알 수 없는 초대장</h1>
      </div>
    </>
  );
};

export default UnknownPage;
