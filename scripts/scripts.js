
const allSeats = document.getElementsByClassName("seat-btn");
let setCount = 40;

for(const seat of allSeats){
    seat.addEventListener("click", function(e){
        seat.classList.add("green-btn");
        setCount = setCount - 1;
        document.getElementById("seat-left-btn").innerText = setCount;
         
        
        const seatName = e.target.parentNode.childNodes[1].innerText;
       

       const selectSeatContainer = document.getElementById("select-seat-container");

        const li = document.createElement("li");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p.innerText = seatName;
        p2.innerText = "EConomy";
        p3.innerText = "550"
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
       

        selectSeatContainer.appendChild(li);
        
       
    })
}