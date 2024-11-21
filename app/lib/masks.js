'use client';

import { useEffect } from 'react';

export default function mascara(idEntrada, mascara, options) {
    useEffect(() => {
			async function loadJquery() {
				const $ = (await import('jquery')).default;
				await import('jquery-mask-plugin');

        $(`#${idEntrada}`).mask(mascara, !!options && options);
			}

			loadJquery();
    }, []);
}