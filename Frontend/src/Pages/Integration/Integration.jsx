import React ,{useState}from 'react'
import styles from"./allintegration.module.css"
import {data} from "./data"
import {Box,Image,SimpleGrid} from "@chakra-ui/react"
const Integration = () => {
  const [sort ,setsort]=useState("")
 let update=data.filter((data)=>{ return sort?data.type===sort:data

 })

  return (
    <Box>
    <div className={styles.flextop} >
        <Box style={{marginLeft:"10%"}}>
            <h1 style={{fontSize:"45px",width:"85%"}}>Integrate TimeCamp with your favorite apps</h1>
            <h3>No need to change your current workflow. Use TimeCamp alongside your other trusted tools.</h3>
            <div style={{display:"inline-block"}}>
            <button className={styles.buttontrack}> <div style={{display:"flex",gap:"10px"}}>
            <img  className={styles.chrome}src="https://cdn-m.timecamp.com/img/integrations/chrome.png" alt="" /><h5 style={{color:"white"}}>Track time in Chrome</h5 ></div></button>
            <button className={styles.buttontrack}style={{marginTop:"20px"}}> <div style={{display:"flex",gap:"10px"}}><img  className={styles.chrome}src="https://cdn-m.timecamp.com/img/integrations/edge.svg" alt="" /><h5 style={{color:"white"}}>Track time in Edge</h5></div></button>
            </div>
        </Box>
        <Box>
           
            <img className={styles.imgslack} src="https://cdn-m.timecamp.com/img/greenbranding/rightHero.png" alt='img'/>
        </Box>
    </div>
   <div style={{marginTop:"150px"}} className={styles.app}>

      <div >  <button className={styles.btnapp} onClick={()=>setsort("")}><img src="https://cdn-m.timecamp.com/img/greenbranding/all.svg" alt="" /></button>
        <h1 className={styles.title} >All</h1></div>
       <div> <button className={styles.btnapp} onClick={()=>setsort("projectmanagement")}><img src="https://cdn-m.timecamp.com/img/greenbranding/pm.svg" alt="" /></button>
       <h1 className={styles.title} >Project</h1></div>
       <div> <button className={styles.btnapp} onClick={()=>setsort("helpdesk")}><img src="https://cdn-m.timecamp.com/img/greenbranding/hd.svg" alt="" /></button>
       <h1 className={styles.title} >Help Desk</h1></div>
       <div> <button className={styles.btnapp} onClick={()=>setsort("collabration")}><img src="https://cdn-m.timecamp.com/img/greenbranding/collab.svg" alt="" /></button>
       <h1 className={styles.title} >Collabrator</h1></div>
       <div> <button className={styles.btnapp}><img src="https://cdn-m.timecamp.com/img/greenbranding/dev.svg" alt="" /></button><h1 className={styles.title} ></h1>Development</div>
       <div> <button className={styles.btnapp}><img src="https://cdn-m.timecamp.com/img/greenbranding/acc.svg" alt="" /></button><h1 className={styles.title} >Accounting & Invoicing</h1></div>
        <div><button className={styles.btnapp}><img src="https://cdn-m.timecamp.com/img/greenbranding/crm.svg" alt="" /></button><h1 className={styles.title} >CRM & Sales</h1></div>
  
   </div>
   <Box backgroundColor={"goshtwhite"}>
   <SimpleGrid columns={[2, 3, 3]} spacing='40px' w={[500,900,1500]}>
 {(update).map((data, i) =>{
  return <div className={styles.container} key={i}>
    <Image  src={data.img} alt=""/>
    <h1>{data.name}</h1>
    <p  style={{width:"75%" ,marginLeft:"auto",marginRight:"auto"}}>{data.description}</p>
  </div>
  })}
  
</SimpleGrid>
   </Box>
   <Box  w={[500,900,1500]}>
   <div className={styles.bottom}>
    <h1>One simple tool to measure everything your business needs.</h1>
    <p>Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!</p>
   <button className={styles.btn2} style={{backgroundColor:'rgb(247,184,1)',}}>Try TimeCmp for free </button>
   <button className={styles.btn3} style={{marginLeft:"30px"}}>Contact Sale</button>
   </div>
   </Box>
 </Box>
  )
}

export default Integration