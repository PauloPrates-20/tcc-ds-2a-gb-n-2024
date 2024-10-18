export const authConfig = {
	pages: {
		signIn: '/login',
		error: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const rotasPublicas = ['/login', '/cadastro'];
			const estaAutenticado = !!auth?.user;
			const convidado = !!auth?.user?.email?.includes('convidado');
			const idEvento = auth?.user?.email?.split('_')[1];
			console.log(convidado, idEvento);
			const estaEmRotaPublica = rotasPublicas.includes(nextUrl.pathname) || /^\/dashboard\/eventos\/[^/]+\/convite$/.test(nextUrl.pathname);

			if (!estaEmRotaPublica) {
				if (estaAutenticado) return true;
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