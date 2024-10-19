export const authConfig = {
	pages: {
		signIn: '/login',
		error: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const rotasPublicas = [
				'/login',
				'/cadastro',
			];
			const estaAutenticado = !!auth?.user;
			const convidado = !!auth?.user?.email?.includes('convidado');
			const idEvento = auth?.user?.email?.split('_')[1];
			const estaEmRotaPublica = rotasPublicas.includes(nextUrl.pathname) || /^\/dashboard\/eventos\/[^/]+\/convite$/.test(nextUrl.pathname);
			const rotaEvento = new RegExp(`/dashboard/eventos/${idEvento}/cadastro-funcionario`);

			if (!estaEmRotaPublica) {
				if (estaAutenticado) {
					if (convidado && !/^\/dashboard\/eventos\/[^/]+\/cadastro-funcionario$/.test(nextUrl.pathname)) {
						return Response.redirect(new URL(`/dashboard/eventos/${idEvento}/cadastro-funcionario`, nextUrl));
					}
					return true;
				}
				return false // Produção
				// return true; // Para teste
			} else if (estaAutenticado) {
				if (convidado) {
					return Response.redirect(new URL(`/dashboard/eventos/${idEvento}/cadastro-funcionario`, nextUrl));
				}

				return Response.redirect(new URL('/dashboard', nextUrl));
			}

			return true;
		},
	},
	providers: [],
};