import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { logarUsuario } from './app/lib/firebase/firestoreQuerys';

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [Credentials({
		async authorize(credentials) {
				const user = await logarUsuario(credentials);

				if (!user) {
					throw new Error('Falha na autenticação. Verifique as credenciais inseridas e tente novamente.');
				}

				return user;
			},
		}),
	],
});