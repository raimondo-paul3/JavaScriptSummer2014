/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */


var ads = [];


 ads.push({ 
                 "title": 'this isnt so cool', 
                 "desc" : 'this issnt so cool because I cant use it'
                 
             });
 ads.push({ 
                 "title": 'this could be cool', 
                 "desc" : 'this could be cool because I could use it' 
             });
 ads.push({ 
                 "title": 'this might cool', 
                 "desc" : 'this is cool because I might be able to use it use it' 
             });
 ads.push({ 
                 "title": 'eh, this is kinda cool i guess', 
                 "desc" : 'this is kinda cool i guess, just cause' 
             });
 ads.push({ 
                 "title": 'this is cool', 
                 "desc" : 'this is cool because I can use it' 
             });
             
            function changeDocumentTitle( title ){
                document.title = title;
            }
            
            changeDocumentTitle([ads.title]); 
             
function rand( max ){
    return Math.floor( Math.random()*max);
          }      
var adRandIndex = rand(ads.length);

console.log(ads[adRandIndex].title);
console.log(ads[adRandIndex].desc);

var div = document.getElementById('ad');

div.innerHTML = ads[adRandIndex].desc;
//div.style.color = ads[adRandIndex].color;
document.title = ads[adRandIndex].title + '...';