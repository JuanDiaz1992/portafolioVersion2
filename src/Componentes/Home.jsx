import Section1 from "./section1"
import Section2 from "./section2"

function Home(){
  const visiteWeb =(url)=>{
    if(url){
      setTimeout(() => {
        window.open(url, "_blank");
      }, 600);
    }

  }
  return(
    <>
      <Section1
      visiteWeb={visiteWeb}/>
      <Section2
      visiteWeb={visiteWeb}/>
    </>
  )
}

export default Home