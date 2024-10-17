import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { logarEmpresa, logarUsuario } from './app/lib/firebase/firestoreQuerys';

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				let resposta = { status: true, erros: {} };

				if (credentials?.convidado) {
					resposta = await logarEmpresa(credentials);
				} else {
					resposta = await logarUsuario(credentials);
				}

				if (!resposta.status) {
					throw new Error(resposta.erros?.credenciais || resposta.erros?.bd);
				}

				return resposta.usuario;
			},
		}),
	],
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60,
	},
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}

			return token;
		},
	},
});