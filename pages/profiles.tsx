import { NextPageContext } from 'next';
import React from 'react'
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
  
    if(!session){
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      }
    }
    
    return {
      props:{}
    }
  }
  

const profiles = () => {
  return (
    <div>
    
    </div>
  )
}

export default profiles