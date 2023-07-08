import NextAuth from "next-auth/next";
import clientPromise from '../../../../lib/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks:{
        async session({session,token,user}){
            session.id=user.id;
            return session;
        }
    },
})

export {handler as GET, handler as POST}