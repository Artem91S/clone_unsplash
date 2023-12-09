import Article from "./Article/Article";
import Header from "./Header";
import MainLayout from "./MainLayout";

function Home() {
   return(
    <>
    <Header/>
    <Article title={'The  Holidays'} />
    <MainLayout/>
    
    </>
   )
}

export default Home