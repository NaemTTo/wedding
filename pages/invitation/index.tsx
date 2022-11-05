import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
`;

const WeddingImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/img/wedding_img1.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
`;
const WeddingImgLayer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
`;

const WeddingTextWrap = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  margin-bottom: 320px;
`;
const WeddingTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 36px;
`;
const WeddingText = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
`;
interface InvitationProps {
  id: string;
}

const InvitationPage: NextPage<InvitationProps> = ({ id }) => {
  return (
    <div>
      <Head>
        <title>당신을 초대합니다</title>
      </Head>
      <Container>
        <WeddingImg>
          <WeddingImgLayer />
          <WeddingTextWrap>
            <WeddingTitle>
              ID: {id}
              <br />
              00, 00
              <br /> 결혼합니다.
            </WeddingTitle>
            <WeddingText>2022.22.22</WeddingText>
            <WeddingText>토요일 1시</WeddingText>
            <WeddingText>결혼하는 장소</WeddingText>
            <WeddingText>여기로 오세요!!!!!</WeddingText>
          </WeddingTextWrap>
        </WeddingImg>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<InvitationProps> = async (
  context,
) => {
  const invitationId = context.query.id;
  if (typeof invitationId !== 'string' || invitationId === '') {
    return {
      redirect: {
        permanent: false,
        destination: '/invitation/unknown',
      },
    };
  }
  return {
    props: {
      id: invitationId,
    },
  };
};

export default InvitationPage;
