function ClockTime(){

let time = new Date()
// console.log(time);
let date = new Date()

  return (
    <center>
      <p>current  Time is here : {time.toLocaleTimeString()  }   </p>
      <p>current Date is here : {time.toLocaleDateString()  }   </p>

    </center>
  )
  
  }
  export default ClockTime;