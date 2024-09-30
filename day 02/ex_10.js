

if ((breadCount/2)>= hamCount) {
    breadCount -= 2*hamCount;
    displayThisText("number of ham sandwitch:"+hamCount);
    hamCount = 0;
}
if (((breadCount/2)>=tunaCount ) && ((saladCount/2)>=tunaCount) ) {

    breadCount -= 2*tunaCount;
    displayThisText("number of tuna sandwitch:"+tunaCount);
    tunaCount = 0;
    saladCount -= 2*tunaCount;
}
if (((breadCount/2)>=tomatoCount ) && ((saladCount/2)>=1) ){

    breadCount -= 2*tomatoCount;
    displayThisText("number of vegetarian sandwitch:"+tomatoCount);
    tomatoCount = 0;
    saladCount -= 2*tomatoCount;
}


displayIngredients();