import FormCadastro from '../components/FormCadastro';
import Etiqueta from '../components/Etiqueta';

export const metadata = {
    title: 'Cadastro',
};

export default function Cadastro() {
    return (
        <div className={`container`}>
            <div className={`cardForm`}>
                <Etiqueta>Cadastro</Etiqueta>
                <FormCadastro />
            </div>
        </div>
    );
}