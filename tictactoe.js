const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");
let player1=[];
let p1=true;
let p2=false;
let player2=[];
let count1=0;
let count2=0;
let name1=prompt("Enter player1 name",'Player1');
let name2=prompt("Enter player2 name",'Player2');
let turn=[false,false,false,false,false,false,false,false,false,false,];
const indicator1=document.getElementById("indicator1");
const indicator2=document.getElementById("indicator2");
indicator1.style.backgroundColor="green";
indicator2.style.backgroundColor="red";
//console.log(one);
one.addEventListener("click",(e)=>{
    if(turn[0]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(1);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(1);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }
    }
    turn[0]=true;
    
winner(player1,player2);
    
});
two.addEventListener("click",(e)=>{
    if(turn[1]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(2);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(2);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }
    }
    turn[1]=true;
    //alert(player1);
    winner(player1,player2);
});
three.addEventListener("click",(e)=>{
    if(turn[2]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(3);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(3);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }
    }
    turn[2]=true;
    winner(player1,player2);
});
four.addEventListener("click",(e)=>{
    if(turn[3]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(4);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(4);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }
    }
    turn[3]=true;
    winner(player1,player2);
});
five.addEventListener("click",(e)=>{
    if(turn[4]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(5);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(5);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }}
    turn[4]=true;
    winner(player1,player2);
});
six.addEventListener("click",(e)=>{
    if(turn[5]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(6);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(6);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }}
    turn[5]=truel;
    winner(player1,player2);
});
seven.addEventListener("click",(e)=>{
    if(turn[6]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(7);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(7);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }}
    turn[6]=true;
    winner(player1,player2);
});
eight.addEventListener("click",(e)=>{
    if(turn[7]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(8);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(8);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }}
    turn[7]=true;
    winner(player1,player2);
});
nine.addEventListener("click",(e)=>{
    if(turn[8]===false)
    {
    if(p1===true)
    {
        e.target.innerText="X";
        player1.push(9);
        p1=false;
        p2=true;
        indicator1.style.backgroundColor="red";
        indicator2.style.backgroundColor="green";
    }
    else
    {
        e.target.innerText="O";
        player2.push(9);
        p1=true;
        p2=false;
        indicator1.style.backgroundColor="green";
        indicator2.style.backgroundColor="red";
    }}
    turn[8]=true;
    winner(player1,player2);
});
function winner(player1,player2)
{
    const str1=player1.sort().join("");
    const str2=player2.sort().join("");
    if(str1.includes("123")||str1.includes("456")||str1.includes("789"))
    {
        count1++;
        vanish();
        popup(name1);
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(str2.includes("123")||str2.includes("456")||str2.includes("789"))
    {
        count2++;
        vanish();
        popup(name2);
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.includes(1)&&player1.includes(4)&&player1.includes(7))
    {
        count1++;
        popup(name1);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player2.includes(1)&&player2.includes(4)&&player2.includes(7))
    {
        count2++;
        popup(name2);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.includes(2)&&player1.includes(5)&&player1.includes(8))
    {
        count1++;
        popup(name1);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player2.includes(2)&&player2.includes(5)&&player2.includes(8))
    {
        count2++;
        popup(name2);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.includes(3)&&player1.includes(6)&&player1.includes(9))
    {
        count1++;
        popup(name1);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player2.includes(3)&&player2.includes(6)&&player2.includes(9))
    {
        count2++;
        popup(name2);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player2.includes(1)&&player2.includes(5)&&player2.includes(9))
    {
        count2++;
        popup(name2);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.includes(1)&&player1.includes(5)&&player1.includes(9))
    {
        count1++;
        popup(name1);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.includes(3)&&player1.includes(5)&&player1.includes(7))
    {
        count1++;
        popup(name1);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player2.includes(3)&&player2.includes(5)&&player2.includes(7))
    {
        count2++;
        popup(name2);
        vanish();
        countele1.innerText=count1;
        countele2.innerText=count2;
    }
    else if(player1.length===5)
    {
        alert("Draw!");
    }

}
const name1ele=document.getElementById("name1");
const name2ele=document.getElementById("name2");
name1ele.innerText=name1;
name2ele.innerText=name2;
const countele1=document.getElementById("count1");
const countele2=document.getElementById("count2");
countele1.innerText=count1;
countele2.innerText=count2;
const newbut=document.createElement("button");
newbut.id="newbut";
const grid=document.getElementById("grid-divid");
const main=document.getElementById("mainid");
const popup=(player)=>{
    grid.remove();
    const newdiv=document.createElement("div");
    const newpara=document.createElement("p");
    newdiv.className="grid-div2";
    newdiv.id="grid-div2";
    newdiv.append(newpara);
    newdiv.append(newbut);
    newpara.innerText=`Congratulations! ${player} wins`;
    newbut.innerText="Resume";
    newbut.style.backgroundColor="red";
    newbut.style.color="white";
    newbut.style.fontWeight="bolder";
    newbut.style.borderRadius="5px";
    newbut.style.width="6rem";
    newbut.style.height="3rem";
    main.append(newdiv);
   // newdiv.innerText=player;
    newpara.id="cong";
};
newbut.addEventListener("click",()=>{  
    const div2=document.getElementById("grid-div2");
    div2.remove();
    main.append(grid);
});
const vanish=()=>{
    const gridloop=grid.childNodes;
    console.log(gridloop);
    gridloop.forEach((element) => {
        element.innerText="";
    });
    indicator1.style.backgroundColor="green";
    indicator2.style.backgroundColor="red";
    p1=true;
    p2=false;
    player1.splice(0,player1.length);
    player2.splice(0,player2.length);
    turn=[false,false,false,false,false,false,false,false,false,false,];
}

