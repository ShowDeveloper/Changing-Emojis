const btnEl = document.getElementById("btn")
const EmojiNameEl = document.getElementById("emoji-name")

const emoji = []

async function getEmoji (){
    let response = await fetch("http://emoji-api.com/emojis?access_key=9878941267faed7715cad8c1474706fb5f1a098d")

    data = await response.json()
      
    for(let i=0; i<1500; i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
        console.log(emoji)
    }
}

getEmoji()



btnEl.addEventListener("click",()=>{
  const randomNum = Math.floor(Math.random() * emoji.length)

  btnEl.innerText = emoji[randomNum].emojiName
  EmojiNameEl.innerText = emoji[randomNum].emojiCode
    
})