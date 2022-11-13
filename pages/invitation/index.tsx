import styled from '@emotion/styled';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import WeddingCarousel from '../../components/WeddingCarousel';
import { firestore } from '../../lib/firebase';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
`;


interface InvitationProps {
  creator: string;
}

const InvitationPage: NextPage<InvitationProps> = ({ creator }) => {
  return (
    <div>
      <Head>
        <title>당신을 초대합니다</title>
      </Head>
      <Container>
        <WeddingCarousel>
        </WeddingCarousel>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<InvitationProps> = async (
  context,
) => {
  const invitationId = context.query.id;

  // id 쿼리가 없을 때
  if (typeof invitationId !== 'string' || invitationId === '') {
    return {
      redirect: {
        permanent: false,
        destination: '/invitation/unknown',
      },
    };
  }

  // 해당 id의 데이터가 없을 때
  const docRef = doc(firestore, `invitation/${invitationId}`);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return {
      redirect: {
        permanent: false,
        destination: '/invitation/unknown',
      },
    };
  }

  return {
    props: snapshot.data() as InvitationProps,
  };
};

export default InvitationPage;
