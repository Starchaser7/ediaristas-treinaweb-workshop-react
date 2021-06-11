import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'e-diaristas'}
        subtitle={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti consequuntur quam officiis eligendi eos sint nihil odit omnis deserunt aspernatur voluptates et, nisi voluptatibus vitae deleniti earum voluptatum tenetur esse.'
        }
      />
    </div>
  );
}
