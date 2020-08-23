// router for all data fetch operations from the game db
const express = require("express");
const gameDataRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");
const { json } = require("body-parser");

gameDataRouter.get("/teamStats", function (req, res) {
    //to get the stats of a team : from 'teamSummary' + 'gameHistory' collection
  console.log("team stats");
  let name=req.query.name;
  console.log(name);//team name : which team's data to be fetched
  let balance;   //team summary data : balance availabale
  let teamGame;  //game history data : array of objects [each month's game data]
  teamSummary.findOne({teamName:name}).then((data)=>  //getting balance
    {
        if(data)
        {
            console.log(data.balance);
            balance=data.balance;
        }
//fetching gamedata
        gameHistory.find({teamName:name}).then((data)=>
            {console.log(data)
                if(data!=null)
                {
                    res.send({message:"found!",balance:balance,history:data});
                }
                else
                {
                    res.send({message:"none",balance:balance});
                }
            });
    });
    
    
  });
gameDataRouter.get('/gameStats',(req,res)=>
{
    //fetching gamedata
    gameHistory.find().then((data)=>
    {console.log(data)
        if(data!=null)
        {
            res.send({message:"found!",games:data});
        }
        else
        {
            res.send({message:"none"});
        }
    });
});
gameDataRouter.get("/calculateBalance",(req,res)=>
{
    let votesJ="";  // combination of team votes for each month
    let votesF="";
    let votesM="";
    let votesA="";
    let votesMy="";
    let votesJn="";
    let votesJl="";
    let votesAg="";
    let votesS="";
    let votesO="";
    let votesN="";
    let votesD="";

    let cj=0,dj=0;cf=0,df=0;cm=0,dm=0,ca=0,da=0,cmy=0,dmy=0,cjn=0,djn=0,cjl=0,djl=0,cag=0,dag=0,cs=0,ds=0,co=0,dot=0,cn=0,dn=0,cd=0,dd=0;        
    //to calculate loss/gain based on votes
    let northBal=0,southBal=0,eastBal=0,westBal=0; 
    //each team's balances

    gameHistory.find({amount:null})
    .then((data)=>
    {
        if(!data)
            {
                res.send({message:"none"});
            }
        data.forEach(item=>
            {
                if(item.teamName=="NORTH")      //storing alances of each team
                {northBal=item.totalBalance;}
                else if(item.teamName=="SOUTH")
                {southBal=item.totalBalance;}
                else if(item.teamName=="EAST")
                {eastBal=item.totalBalance;}
                else{westBal=item.totalBalance;}
                //getting combination of votes of each team for each month
                switch(item.month)
                {
                    case "JAN":votesJ+=item.vote;break;
                    case "FEB":votesF+=item.vote;break;
                    case "MAR":votesM+=item.vote;break;
                    case "APR":votesA+=item.vote;break;
                    case "MAY":votesMy+=item.vote;break;
                    case "JUN":votesJn+=item.vote;break;
                    case "JUL":votesJl+=item.vote;break;
                    case "AUG":votesAg+=item.vote;break;
                    case "SEP":votesS+=item.vote;break;
                    case "OCT":votesO+=item.vote;break;
                    case "NOV":votesN+=item.vote;break;
                    default: votesD+=item.vote;
                }
            });
     //According to the Combination Rules , what C or D results -: - means loss ;otherwise gain
     //+special months multiplier
if(votesJ!="")
{
    switch(votesJ)
    {
        case "CCCC":    cj=1;break;
        case "DDDD":    dj=-1;break;
        case "CCDD":    cj=-2;dj=2;break;
        case "CDDC":    cj=-2;dj=2;break;
        case "DCCD":    cj=-2;dj=2;break;
        case "DDCC":    cj=-2;dj=2;break;
        case "CDCD":    cj=-2;dj=2;break;
        case "DCDC":    cj=-2;dj=2;break;
        case "CDDD":    cj=-3;dj=1;break;
        case "DDDC":    cj=-3;dj=1;break;
        case "DCDD":    cj=-3;dj=1;break;
        case "DDCD":    cj=-3;dj=1;break;
        case "DCCC":    cj=-1;dj=3;break;
        case "CCCD":    cj=-1;dj=3;break;
        case "CDCC":    cj=-1;dj=3;break;
        default:        cj=-1;dj=3;
    }
}
if(votesF!="")
{
    switch(votesF)
     {
         case "CCCC":    cf=1;break;
         case "DDDD":    df=-1;break;
         case "CCDD":    cf=-2;df=2;break;
         case "CDDC":    cf-2;df=2;break;
         case "DCCD":    cf=-2;df=2;break;
         case "DDCC":    cf=-2;df=2;break;
         case "CDCD":    cf=-2;df=2;break;
         case "DCDC":    cf=-2;df=2;break;
         case "CDDD":    cf=-3;df=1;break;
         case "DDDC":    cf=-3;df=1;break;
         case "DCDD":    cf=-3;df=1;break;
         case "DDCD":    cf=-3;df=1;break;
         case "DCCC":    cf=-1;df=3;break;
         case "CCCD":    cf=-1;df=3;break;
         case "CDCC":    cf=-1;df=3;break;
         default:        cf=-1;df=3;
     }
}
if(votesM!="")
{
    switch(votesM)
     {
         case "CCCC":    cm=1;break;
         case "DDDD":    dm=-1;break;
         case "CCDD":    cm=-2;dm=2;break;
         case "CDDC":    cm=-2;dm=2;break;
         case "DCCD":    cm=-2;dm=2;break;
         case "DDCC":    cm=-2;dm=2;break;
         case "CDCD":    cm=-2;dm=2;break;
         case "DCDC":    cm=-2;dm=2;break;
         case "CDDD":    cm=-3;dm=1;break;
         case "DDDC":    cm=-3;dm=1;break;
         case "DCDD":    cm=-3;dm=1;break;
         case "DDCD":    cm=-3;dm=1;break;
         case "DCCC":    cm=-1;dm=3;break;
         case "CCCD":    cm=-1;dm=3;break;
         case "CDCC":    cm=-1;dm=3;break;
         default:        cm=-1;dm=3;
     }
     cm*=3;
     dm*=3;
}
if(votesA!="")
{
    switch(votesA)
     {
         case "CCCC":    ca=1;break;
         case "DDDD":    da=-1;break;
         case "CCDD":    ca=-2;da=2;break;
         case "CDDC":    ca=-2;da=2;break;
         case "DCCD":    ca=-2;da=2;break;
         case "DDCC":    ca=-2;da=2;break;
         case "CDCD":    ca=-2;da=2;break;
         case "DCDC":    ca=-2;da=2;break;
         case "CDDD":    ca=-3;da=1;break;
         case "DDDC":    ca=-3;da=1;break;
         case "DCDD":    ca=-3;da=1;break;
         case "DDCD":    ca=-3;da=1;break;
         case "DCCC":    ca=-1;da=3;break;
         case "CCCD":    ca=-1;da=3;break;
         case "CDCC":    ca=-1;da=3;break;
         default:        ca=-1;da=3;
     }
}
if(votesMy!="")
{
    switch(votesMy)
     {
         case "CCCC":    cmy=1;break;
         case "DDDD":    dmy=-1;break;
         case "CCDD":    cmy=-2;dmy=2;break;
         case "CDDC":    cmy=-2;dmy=2;break;
         case "DCCD":    cmy=-2;dmy=2;break;
         case "DDCC":    cmy=-2;dmy=2;break;
         case "CDCD":    cmy=-2;dmy=2;break;
         case "DCDC":    cmy=-2;dmy=2;break;
         case "CDDD":    cmy=-3;dmy=1;break;
         case "DDDC":    cmy=-3;dmy=1;break;
         case "DCDD":    cmy=-3;dmy=1;break;
         case "DDCD":    cmy=-3;dmy=1;break;
         case "DCCC":    cmy=-1;dmy=3;break;
         case "CCCD":    cmy=-1;dmy=3;break;
         case "CDCC":    cmy=-1;dmy=3;break;
         default:        cmy=-1;dmy=3;
     }
     cmy*=4;
     dmy*=4;
}
if(votesJn!="")
{
    switch(votesJn)
     {
         case "CCCC":    cjn=1;break;
         case "DDDD":    djn=-1;break;
         case "CCDD":    cjn=-2;djn=2;break;
         case "CDDC":    cjn=-2;djn=2;break;
         case "DCCD":    cjn=-2;djn=2;break;
         case "DDCC":    cjn=-2;djn=2;break;
         case "CDCD":    cjn=-2;djn=2;break;
         case "DCDC":    cjn=-2;djn=2;break;
         case "CDDD":    cjn=-3;djn=1;break;
         case "DDDC":    cjn=-3;djn=1;break;
         case "DCDD":    cjn=-3;djn=1;break;
         case "DDCD":    cjn=-3;djn=1;break;
         case "DCCC":    cjn=-1;djn=3;break;
         case "CCCD":    cjn=-1;djn=3;break;
         case "CDCC":    cjn=-1;djn=3;break;
         default:        cjn=-1;djn=3;
     }
}
if(votesJl!="")
{
    switch(votesJl)
     {
         case "CCCC":    cjl=1;break;
         case "DDDD":    djl=-1;break;
         case "CCDD":    cjl=-2;djl=2;break;
         case "CDDC":    cjl=-2;djl=2;break;
         case "DCCD":    cjl=-2;djl=2;break;
         case "DDCC":    cjl=-2;djl=2;break;
         case "CDCD":    cjl=-2;djl=2;break;
         case "DCDC":    cjl=-2;djl=2;break;
         case "CDDD":    cjl=-3;djl=1;break;
         case "DDDC":    cjl=-3;djl=1;break;
         case "DCDD":    cjl=-3;djl=1;break;
         case "DDCD":    cjl=-3;djl=1;break;
         case "DCCC":    cjl=-1;djl=3;break;
         case "CCCD":    cjl=-1;djl=3;break;
         case "CDCC":    cjl=-1;djl=3;break;
         default:        cjl=-1;djl=3;
     }
}
if(votesAg!="")
{
    switch(votesAg)
     {
         case "CCCC":    cag=1;break;
         case "DDDD":    dag=-1;break;
         case "CCDD":    cag=-2;dag=2;break;
         case "CDDC":    cag=-2;dag=2;break;
         case "DCCD":    cag=-2;dag=2;break;
         case "DDCC":    cag=-2;dag=2;break;
         case "CDCD":    cag=-2;dag=2;break;
         case "DCDC":    cag=-2;dag=2;break;
         case "CDDD":    cag=-3;dag=1;break;
         case "DDDC":    cag=-3;dag=1;break;
         case "DCDD":    cag=-3;dag=1;break;
         case "DDCD":    cag=-3;dag=1;break;
         case "DCCC":    cag=-1;dag=3;break;
         case "CCCD":    cag=-1;dag=3;break;
         case "CDCC":    cag=-1;dag=3;break;
         default:        cag=-1;dag=3;
     }
     cag*=6;
     dag*=6;
}
if(votesS!="")
{
    switch(votesS)
     {
         case "CCCC":    cs=1;break;
         case "DDDD":    ds=-1;break;
         case "CCDD":    cs=-2;ds=2;break;
         case "CDDC":    cs=-2;ds=2;break;
         case "DCCD":    cs=-2;ds=2;break;
         case "DDCC":    cs=-2;ds=2;break;
         case "CDCD":    cs=-2;ds=2;break;
         case "DCDC":    cs=-2;ds=2;break;
         case "CDDD":    cs=-3;ds=1;break;
         case "DDDC":    cs=-3;ds=1;break;
         case "DCDD":    cs=-3;ds=1;break;
         case "DDCD":    cs=-3;ds=1;break;
         case "DCCC":    cs=-1;ds=3;break;
         case "CCCD":    cs=-1;ds=3;break;
         case "CDCC":    cs=-1;ds=3;break;
         default:        cs=-1;ds=3;
     }
}
if(votesO!="")
{
    switch(votesO)
     {
         case "CCCC":    co=1;break;
         case "DDDD":    dot=-1;break;
         case "CCDD":    co=-2;dot=2;break;
         case "CDDC":    co=-2;dot=2;break;
         case "DCCD":    co=-2;dot=2;break;
         case "DDCC":    co=-2;dot=2;break;
         case "CDCD":    co=-2;dot=2;break;
         case "DCDC":    co=-2;dot=2;break;
         case "CDDD":    co=-3;dot=1;break;
         case "DDDC":    co=-3;dot=1;break;
         case "DCDD":    co=-3;dot=1;break;
         case "DDCD":    co=-3;dot=1;break;
         case "DCCC":    co=-1;dot=3;break;
         case "CCCD":    co=-1;dot=3;break;
         case "CDCC":    co=-1;dot=3;break;
         default:        co=-1;dot=3;
     }
     co*=10;
     dot*=10;
}
if(votesN!="")
{
    switch(votesN)
     {
         case "CCCC":    cn=1;break;
         case "DDDD":    dn=-1;break;
         case "CCDD":    cn=-2;dn=2;break;
         case "CDDC":    cn=-2;dn=2;break;
         case "DCCD":    cn=-2;dn=2;break;
         case "DDCC":    cn=-2;dn=2;break;
         case "CDCD":    cn=-2;dn=2;break;
         case "DCDC":    cn=-2;dn=2;break;
         case "CDDD":    cn=-3;dn=1;break;
         case "DDDC":    cn=-3;dn=1;break;
         case "DCDD":    cn=-3;dn=1;break;
         case "DDCD":    cn=-3;dn=1;break;
         case "DCCC":    cn=-1;dn=3;break;
         case "CCCD":    cn=-1;dn=3;break;
         case "CDCC":    cn=-1;dn=3;break;
         default:        cn=-1;dn=3;
     }
}
if(votesD!="")
{
    switch(votesD)
     {
         case "CCCC":    cd=1;break;
         case "DDDD":    dd=-1;break;
         case "CCDD":    cd=-2;dd=2;break;
         case "CDDC":    cd=-2;dd=2;break;
         case "DCCD":    cd=-2;dd=2;break;
         case "DDCC":    cd=-2;dd=2;break;
         case "CDCD":    cd=-2;dd=2;break;
         case "DCDC":    cd=-2;dd=2;break;
         case "CDDD":    cd=-3;dd=1;break;
         case "DDDC":    cd=-3;dd=1;break;
         case "DCDD":    cd=-3;dd=1;break;
         case "DDCD":    cd=-3;dd=1;break;
         case "DCCC":    cd=-1;dd=3;break;
         case "CCCD":    cd=-1;dd=3;break;
         case "CDCC":    cd=-1;dd=3;break;
         default:        cd=-1;dd=3;
     }
     cd*=20;
     dd*=20;
}

        //updations
     data.forEach(item=>
        {
            switch(item.month)
            {
                case "JAN":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cj);
                            isCon=true;
                            if(cj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cj}})
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(dj);
                            isCon=true;
                            if(dj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dj}})
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cj);
                            isCon=true;
                            if(cj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cj}})
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dj);
                            isCon=true;
                            if(dj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dj}})  
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cj);
                            isCon=true;
                            if(cj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cj}})
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dj);
                            isCon=true;
                            if(dj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dj}})
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cj);
                            isCon=true;
                            if(cj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cj}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dj);
                            isCon=true;
                            if(dj>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dj}})
                        }
                    }   
                    break;     
                case "FEB":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cf);
                            isCon=true;
                            if(cf>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cf}})
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(df);
                            isCon=true;
                            if(df>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:df}})
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cf);
                            isCon=true;
                            if(cf>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cf}})
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(df);
                            isCon=true;
                            if(df>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:df}}) 
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cf);
                            isCon=true;
                            if(cf>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cf}})
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(df);
                            isCon=true;
                            if(df>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:df}})  
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cf);
                            isCon=true;
                            if(cf>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cf}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(df);
                            isCon=true;
                            if(df>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:df}})    
                        }
                    }   
                    break;
                case "MAR":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cm);
                            isCon=true;
                            if(cm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cm}})
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(da);
                            isCon=true;
                            if(da>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:da}})
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cm);
                            isCon=true;
                            if(cm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cm}})
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dm);
                            isCon=true;
                            if(dm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dm}})
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cm);
                            isCon=true;
                            if(cm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cm}})
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dm);
                            isCon=true;
                            if(dm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dm}})  
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cm);
                            isCon=true;
                            if(cm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cm}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dm);
                            isCon=true;
                            if(dm>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dm}})
                        }
                    }   
                    break;
                case "APR":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(ca);
                            isCon=true;
                            if(ca>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:ca}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(da);
                            isCon=true;
                            if(da>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:da}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(ca);
                            isCon=true;
                            if(ca>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:ca}})
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(da);
                            isCon=true;
                            if(da>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:da}})
                          
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(ca);
                            isCon=true;
                            if(ca>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:ca}})
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(da);
                            isCon=true;
                            if(da>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:da}})
                        
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(ca);
                            isCon=true;
                            if(ca>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:ca}})
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(da);
                            isCon=true;
                            if(da>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:da}})
                           
                        }
                    }   
                    break;
                case "MAY":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cmy);
                            isCon=true;
                            if(cmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cmy}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(dmy);
                            isCon=true;
                            if(dmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dmy}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cmy);
                            isCon=true;
                            if(cmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cmy}})
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dmy);
                            isCon=true;
                            if(dmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dmy}})
                        
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cmy);
                            isCon=true;
                            if(cmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cmy}})
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dmy);
                            isCon=true;
                            if(dmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dmy}})
                        
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cmy);
                            isCon=true;
                            if(cmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cmy}})
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dmy);
                            isCon=true;
                            if(dmy>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dmy}})
                         
                        }
                    }   
                    break;
                case "JUN":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cjn);
                            isCon=true;
                            if(cjn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cjn}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(djn);
                            isCon=true;
                            if(djn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:djn}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cjn);
                            isCon=true;
                            if(cjn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cjn}})
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(djn);
                            isCon=true;
                            if(djn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:djn}})
                          
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cjn);
                            isCon=true;
                            if(cjn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cjn}})
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(djn);
                            isCon=true;
                            if(djn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:djn}})
                        
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cjn);
                            isCon=true;
                            if(cjn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cjn}})
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(djn);
                            isCon=true;
                            if(djn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:djn}})
                        
                        }
                    }   
                    break;
                case "JUL":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cjl);
                            isCon=true;
                            if(cjl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cjl}}).then(console.log("updated"))
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(djl);
                            isCon=true;
                            if(djl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:djl}}).then(console.log("updated"))
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cjl);
                            isCon=true;
                            if(cjl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cjl}}).then(console.log("updated"))
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(djl);
                            isCon=true;
                            if(djl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:djl}}).then(console.log("updated"))
                        
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cjl);
                            isCon=true;
                            if(cjl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cjl}}).then(console.log("updated"))
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(djl);
                            isCon=true;
                            if(djl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:djl}}).then(console.log("updated"))
                        
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cjl);
                            isCon=true;
                            if(cjl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cjl}}).then(console.log("updated"))
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(djl);
                            isCon=true;
                            if(djl>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:djl}}).then(console.log("updated"))
                        
                        }
                    }   
                    break;
                case "AUG":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cag);
                            isCon=true;
                            if(cag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cag}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(dag);
                            isCon=true;
                            if(dag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dag}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cag);
                            isCon=true;
                            if(cag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cag}})
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dag);
                            isCon=true;
                            if(dag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dag}})
                        
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cag);
                            isCon=true;
                            if(cag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cag}})
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dag);
                            isCon=true;
                            if(dag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dag}})
                        
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cag);
                            isCon=true;
                            if(cag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cag}})
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dag);
                            isCon=true;
                            if(dag>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dag}})
                        
                        }
                    }   
                    break;
                case "SEP":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cs);
                            isCon=true;
                            if(cs>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cs}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(ds);
                            isCon=true;
                            if(ds>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:ds}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cs);
                            isCon=true;
                            if(cs>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cs}})
                        
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(ds);
                            isCon=true;
                            if(ds>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:ds}})
                         
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cs);
                            isCon=true;
                            if(cs>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cs}})
                        
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(ds);
                            isCon=true;
                            if(ds>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:ds}})
                         
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cs);
                            isCon=true;
                            if(cs>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cs}})
                        
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(ds);
                            isCon=true;
                            if(ds>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:ds}})
                        
                        }
                    }   
                    break;
                case "OCT":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(co);
                            isCon=true;
                            if(co>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:co}})
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(dot);
                            isCon=true;
                            if(dot>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dot}})
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(co);
                            isCon=true;
                            if(co>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:co}})
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dot);
                            isCon=true;
                            if(dot>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dot}})
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(co);
                            isCon=true;
                            if(co>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:co}})
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dot);
                            isCon=true;
                            if(dot>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dot}})
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(co);
                            isCon=true;
                            if(co>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:co}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dot);
                            isCon=true;
                            if(dot>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dot}})
                          
                        }
                    }   
                    break;
                case "NOV":
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cn);
                            isCon=true;
                            if(cn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cn}})
                        
                        }
                        else
                        {
                            northBal=Number(northBal)+Number(dn);
                            isCon=true;
                            if(dn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dn}})
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cn);
                            isCon=true;
                            if(cn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cn}})
                        }
                        else
                        {
                            southBal=Number(southBal)+Number(dn);
                            isCon=true;
                            if(dn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dn}})                           
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cn);
                            isCon=true;
                            if(cn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cn}})
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dn);
                            isCon=true;
                            if(dn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dn}})
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cn);
                            isCon=true;
                            if(cn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cn}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dn);
                            isCon=true;
                            if(dn>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dn}})                           
                        }
                    }   
                    break;
                default:
                    if(item.teamName=="NORTH")
                    {
                        if(item.vote=="C")
                        {
                            northBal=Number(northBal)+Number(cd);
                            isCon=true;
                            if(cd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:cd}})
                        
                        }
                        else
                        {
                            northBal=northBal+dd;
                            isCon=true;
                            if(dd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:northBal,amount:dd}})
                        
                        }
                    }
                    else if(item.teamName=="SOUTH")
                    {
                        if(item.vote=="C")
                        {
                            southBal=Number(southBal)+Number(cd);
                            isCon=true;
                            if(cd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:cd}})
                        
                        }
                        else
                        {
                            southBal=southBal+dd;
                            isCon=true;
                            if(dd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:southBal,amount:dd}})                          
                        }
                    }
                    else if(item.teamName=="EAST")
                    {
                        if(item.vote=="C")
                        {
                            eastBal=Number(eastBal)+Number(cd);
                            isCon=true;
                            if(cd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:cd}})                       
                        }
                        else
                        {
                            eastBal=Number(eastBal)+Number(dd);
                            isCon=true;
                            if(dd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:eastBal,amount:dd}})                       
                        }
                    }
                    else
                    {
                        if(item.vote=="C")
                        {
                            westBal=Number(westBal)+Number(cd);
                            isCon=true;
                            if(cd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:cd}})
                        }
                        else
                        {
                            westBal=Number(westBal)+Number(dd);
                            isCon=true;
                            if(dd>=0){isCon=false}
                            gameHistory.updateOne({teamName:item.teamName,month:item.month},{$set:{isContribute:isCon,totalBalance:westBal,amount:dd}})
                        }
                    }   
            }
        });
    res.send({message:"game stats updated!"})
    });

});

module.exports =gameDataRouter;
