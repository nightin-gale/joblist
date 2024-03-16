import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "harry" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const user = { id: 1, name: process.env.JLUSER as string, password: process.env.JLPASSWORD as string}
        if (credentials?.username === user.name && credentials.password === user.password) {
          return user as any
        } else{
          return null
        }
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()
        // if (res.ok && user) {
        //   return user
        // }
        // return null
      }
    })
  ],
  session: {
    maxAge: 10 * 60, // expires after 10 minutes
  }
}
