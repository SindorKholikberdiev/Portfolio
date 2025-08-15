// kerakli HTML elementini id orqali olish
const copyrightElement = document.getElementById("copyright-info");
// kerakli sana olish
const currentYear = new Date().getFullYear();
// elementning matnini yangi dinamik matn bilan yangilash
copyrightElement.textContentss =
  "© ${currentYear} Sindor Kholikberdiev. All rights reserved.";

const projectCardBtn = document.querySelectorAll(".card .btn"); // barcha kartalardagi tugmalarni olish
// bosilgan tugma cardining h3 elementini consolega chiqarishni tushuntirish
// barcha tugmalarga sikl orqali hodisa qo'shish
projectCardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // btn.addEventListener("click", () => { tugma bosilganda bajariladigan kod

    // tegishli cardning h3 elementini olish va uning matnini consolega chiqarish
    // closest() metodi yordamida tugma joylashgan card elementini topish
    const cardTitle = btn.closest(".card").querySelector("h3").textContent; // cardning h3 elementini olish
    // h3 elementining matnini consolega chiqarish
    console.log(cardTitle);
  });
});

//Formaga ma'lumot kiritilib, "Send" tugmasi bosilganda, o'sha kiritilgan ma'lumotlarni o'qib olib consolega chiqarishni tushuntirish
const form = document.querySelector("form"); // formani olish

// formani submit hodisasini tinglash
form.addEventListener("submit", (event) => {
  // hodisa yuz berganda bajariladigan kod

  event.preventDefault(); // formani yuborishni to'xtatish, chunki biz ma'lumotlarni consolega chiqaramiz
  const formData = new FormData(form); // form ma'lumotlarini olish, sabab bu FormData obyekti yordamida formadagi barcha ma'lumotlarni olish mumkin

  // formData orqali ma'lumotlarni consolega chiqarish
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`); // har bir ma'lumotni kalit va qiymat bilan consolega chiqarish, chunki FormData obyekti kalit-qiymat juftliklarini saqlaydi
  });
});

// mening skillarim massivini yaratish
const mySkills = [
  { name: "HTML", level: "Intermediate", experience: 2 },
  { name: "CSS", level: "Intermediate", experience: 2 },
  { name: "JavaScript", level: "Intermediate", experience: 2 },
  { name: "React", level: "Beginner", experience: 1 },
  { name: "Node.js", level: "Beginner", experience: 1 },
  { name: "Git", level: "Intermediate", experience: 2 },
];

// htmldagi skills ro'yxatini javaScript orqali dinamik ravishda yaratish
const skillsList = document.querySelector(".skills-list"); // skills ro'yxatini olish
// skills ro'yxatini tozalash
skillsList.innerHTML = ""; // eski ro'yxatni tozalash
// har bir skill uchun li elementi yaratish va uni ro'yxatga qo'shish
mySkills.forEach((skill) => {
  // har bir skill uchun sikl orqali yangi li elementi yaratish
  const li = document.createElement("li"); // yangi li elementi yaratish
  li.textContent = `${skill.name} ${skill.level}, ${skill.experience} years`; // li elementining matnini skill ma'lumotlari bilan to'ldirish
  skillsList.appendChild(li); // yangi li elementini ro'yxatga qo'shish, chunki appendChild() metodi yordamida yangi elementni mavjud elementning ichiga qo'shish mumkin
});
