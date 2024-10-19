import $ from 'jquery';
import 'jquery-mask-plugin';
import { useEffect } from 'react';

export default function mascara(idEntrada, mascara, options) {
    useEffect(() => {
        $(`#${idEntrada}`).mask(mascara, !!options && options);
    }, []);
}