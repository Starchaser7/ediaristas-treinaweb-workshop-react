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
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
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
