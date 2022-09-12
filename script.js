const ratings = document.querySelectorAll(".rating-number");
const paragrah = document.querySelector("#rating-thankyou-paragraph");

ratings.forEach(rating => rating.addEventListener("click", ()=> {
  paragrah.innerText = `You selected ${rating.innerText} out of 5`
}))

const submit = document.querySelector("#submit")
const thankyou = document.querySelector(".card-thankyou");
const card = document.querySelector(".card");

submit.addEventListener("click", ()=> {
  thankyou.classList.remove("hidden");
  card.classList.add("hidden")
});

thankyou.addEventListener("click", () =>{
  thankyou.classList.add("hidden");
  card.classList.remove("hidden")
})
