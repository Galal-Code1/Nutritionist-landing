let menuButton = document.getElementById('menu-bto');
let monthButton = document.getElementById('month-bto');
let yearButton = document.getElementById('year-bto');
let menu = document.getElementById('menus');
let plans = [
  [
    `$49<span class="lg:text-[18px] text-[16px] font-medium">/month</span>`,
    `$79<span class="lg:text-[18px] text-[16px] font-medium">/month</span>`,
    `$99<span class="lg:text-[18px] text-[16px] font-medium">/month</span>`,
  ],
  [
    `$588<span class="lg:text-[18px] text-[16px] font-medium">/year</span>`,
    `$948<span class="lg:text-[18px] text-[16px] font-medium">/year</span>`,
    `$1188<span class="lg:text-[18px] text-[16px] font-medium">/year</span>`,
  ]
]

// Show Menu
menuButton.onclick = () => menu.classList.toggle('hidden');

function changePlan(plan) {
  if (plan == 'month') {
    yearButton.classList.remove('bg-green-900', 'text-white');
    yearButton.classList.add('text-black');
    monthButton.classList.add('bg-green-900', 'text-white');
    for (let i = 1; i < 4; i++) {
      let plan = document.getElementById(`plan-${i}`); // plan-2
      plan.innerHTML = plans[0][i - 1];
    }
  } else {
    monthButton.classList.remove('bg-green-900', 'text-white');
    monthButton.classList.add('text-black');
    yearButton.classList.add('bg-green-900', 'text-white');
    for (let i = 1; i < 4; i++) {
      let plan = document.getElementById(`plan-${i}`); // plan-2
      plan.innerHTML = plans[1][i - 1];
    }
  }
}
// Change The Plan Montly
monthButton.onclick = () => {
  changePlan('month');
}
// Change The Plan Yearly
yearButton.onclick = () => {

  changePlan('year');
}

// Like And Save Buttons Action
for (let i = 1; i < 5; i++) {
  let likeButton = document.getElementById('like-bto' + i);
  let saveButton = document.getElementById('save-bto' + i);
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('bg-red-400');
    likeButton.classList.toggle('bg-[#F6FBE9]');
  })
  saveButton.addEventListener('click', () => {
    saveButton.classList.toggle('bg-green-400');
    saveButton.classList.toggle('bg-[#F6FBE9]');
  })
}