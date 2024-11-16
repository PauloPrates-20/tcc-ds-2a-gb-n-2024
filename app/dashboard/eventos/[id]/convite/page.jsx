import Etiqueta from '@/app/components/Etiqueta';
import FormLoginEmpresa from '@/app/components/FormLoginEmpresa';

export default function Convite({ params }) {
    return (
        <div className={`container`}> 
            <div className={`cardForm`}>
                <Etiqueta>CONVITE</Etiqueta>
                <FormLoginEmpresa idEvento={params.id} />
            </div>
        </div>
    );
}