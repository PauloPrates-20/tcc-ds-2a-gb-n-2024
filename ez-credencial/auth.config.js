export const authConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const rotasPublicas = ['/login', '/cadastro'];
			const estaAutenticado = !!auth?.user;
			const estaEmRotaPublica = rotasPublicas.includes(nextUrl.pathname) || /^\/dashboard\/eventos\/[^/]+\/convite$/.test(nextUrl.pathname);

			if (!estaEmRotaPublica) {
				if (estaAutenticado) return true;
				// return false // Produção
				return true; // Para teste
			} else if (estaAutenticado) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}

			return true;
		},
	},
	providers: [],
};