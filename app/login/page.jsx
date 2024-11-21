import Etiqueta from '@/app/components/Etiqueta';
import FormLogin from '../components/FormLogin';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <div className={`container`}>
      <div className={`cardForm`}>
        <Etiqueta>Login</Etiqueta>

        <FormLogin />
      </div>
    </div>
  );
}