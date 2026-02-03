const scenes = [
  {
    time: "07:00 AM",
    chat: "Rishika: Good morning Arvind ☀️❤️"
  },
  {
    time: "08:30 AM",
    chat: "Arvind: Good morning meri jaan 😘"
  },
  {
    time: "09:30 AM",
    chat: "Dono apne kaam me busy… but missing each other 💔"
  },
  {
    time: "02:30 PM",
    chat: "Arvind: Lunch hua aapka sweetie? 🍱"
  },
  {
    time: "06:00 PM",
    chat: "Rishika: Chai hui? ☕"
  },
  {
    time: "10:30 PM",
    chat: "Call pe ghanton baat… long distance, strong love ❤️"
  }
];

let i = 0;

function nextScene() {
  document.getElementById("time").innerText = scenes[i].time;
  document.getElementById("chat").innerText = scenes[i].chat;
  i = (i + 1) % scenes.length;
}

setInterval(nextScene, 3000);
nextScene();
