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
    // swap
    var temp         = players[index];
    players[index]   = players[currMin];
    players[currMin] = temp;

    // remove / ignore player on next round
    ++currMin;
}

function roll()
{
    if(players.length - currMin <= 1)
    {
        return 0;
    }

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