import NextAuth, { User, Session, NextAuthOptions, Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email : {label : "Email", type : "text"},
                password: {label : "Password", type : "password"}
            },
            async authorize (credentials) {
                const { email, password } = credentials as {
                    email : string,
                    password : string,
                }

                if (email === "kingdimas@gmail.com" && password === "testing123") {
                    return {
                        id : "1",
                        name : "Dimas",
                        email : "kingdimas@gmail.com",
                        role : "admin",
                    }
                }

                if (email === "user@gmail.com" && password === "testing123"){
                    return {
                        id : "2",
                        name : "user",
                        email: email,
                        password : password,
                        role : "user"
                    }
                }
                return null;
            }
        },
    )
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user} : {token : JWT, user ?: User}){
            if (user) {
                token.role = user.role;
                token.email = user.email;
                token.id = user.id;
                token.name = user.name
            }
            return token
        },
        async session ({session, token} : {session: Session, token: JWT}){
                if ("email" in token) {
                    session.user.email = token.email
                }
                if ("role" in token) {
                    session.user.role = token.role;
                }
                if ("name" in token) {
                    session.user.name = token.name
                }                
                return session;
        }
    },
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}