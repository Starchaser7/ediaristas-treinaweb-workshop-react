import Image from 'next/image';
import styles from '@styles/Home.module.css';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Sei lá mano, testando'}
        subtitle={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti consequuntur quam officiis eligendi eos sint nihil odit omnis deserunt aspernatur voluptates et, nisi voluptatibus vitae deleniti earum voluptatum tenetur esse.'
        }
      />
      <UserInformation
        picture={'https://github.com/Starchaser7.png'}
        name={'Eduardo'}
        rating={4}
        description={'Belo Horizonte'}
      />
    </div>
  );
}
