import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { logarUsuario } from './app/lib/firebase/firestoreQuerys';

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [Credentials({
		async authorize(credentials) {
				const resposta = await logarUsuario(credentials);
				if (!resposta.status) return null;

				return resposta.usuario;
			},
		}),
	],
});