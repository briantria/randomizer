var prevIndex = -1;
var currMin = 0;

function getRandomIndex()
{
    do
    {
        var index = Math.random() * (players.length - currMin);
            index = Math.floor(index + currMin);

    }while(prevIndex == index);

    prevIndex = index;

    console.log("index: " + index);
    return index;
}

function removePlayer(index)
{
    // trigger animation
    var divAlias = document.getElementById("alias");
    var divDesc = document.getElementById("desc");

    if(players[index].alias)
    {
        divAlias.innerHTML = "a.k.a. " + players[index].alias;
        divAlias.style.display = "block";
        //divAlias.className += " w3-animate-left";
    }

    if(players[index].desc)
    {
        divDesc.innerHTML = "\"" + players[index].desc + "\"";
        divDesc.style.display = "block";
        //divDesc.className += " w3-animate-right";
    }

    // swap
    var temp         = players[index];
    players[index]   = players[currMin];
    players[currMin] = temp;

    // remove / ignore player on next round
    ++currMin;
}

function resetDetails()
{
    var divAlias = document.getElementById("alias");
    var divDesc = document.getElementById("desc");

    //divAlias.className.replace(" w3-animate-left", "");
    //divDesc.className.replace(" w3-animate-right", "");

    divAlias.style.display = "none";
    divDesc.style.display = "none";
}

function roll()
{
    if(players.length - currMin <= 1)
    {
        return 0;
    }

    resetDetails();
    var randNameContainer = document.getElementById("selectedName");

    // random wheel effect
    var totalIterations = 40;
    var t = 50;
    (function wheelFX(iteration)
    {
        setTimeout(function ()
        {
            var index = getRandomIndex();
            randNameContainer.innerHTML = players[index].name;

            if(iteration < (totalIterations * 0.4))
            {
                t *= 1.2;
            }

            if(--iteration)
            {
                wheelFX(iteration);
            }
            else
            {
                // animate and show other details
                removePlayer(index);
            }

            // console.log(iteration);
        }, t)
    })(totalIterations);
} // end roll