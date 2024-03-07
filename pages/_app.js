import "@/styles/globals.css";
import Layout1 from "@/components/layouts/Layout1";
import Layout2 from "@/components/layouts/Layout2";
import { UserContextProvider } from "@/components/store/userContext";

export default function App({ Component, pageProps }) {

  const layout1 = pageProps.layout1
  
  if(layout1){
    return (
      <Layout1>
        <Component {...pageProps}/>
      </Layout1>
      
    )
  }

  else{
    return (
      <UserContextProvider>
      <Layout2>
        <Component {...pageProps}/>
      </Layout2>
    </UserContextProvider>
    )
  }

  
}
