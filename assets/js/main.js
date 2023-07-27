/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
//     //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
// sr.reveal('.home__social-icon', { interval: 200 });
// sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/**************************** Professional Skill **************************************/
const btn1 = document.getElementById("skills__button-1-sub-1");
const list1 = document.getElementById("list-1-sub-1");

list1.style.display = "none";
btn1.addEventListener("click", () => {
    if (list1.style.display === "none") {
        list1.style.display = "block";
        list2.style.display = "none";
        list3.style.display = "none";
    } else {
        list1.style.display = "none";
    }
});

const btn2 = document.getElementById("skills__button-1-sub-2");
const list2 = document.getElementById("list-1-sub-2");

list2.style.display = "none";
btn2.addEventListener("click", () => {
    if (list2.style.display === "none") {
        list2.style.display = "block";
        list1.style.display = "none";
        list3.style.display = "none";
        list10.style.display = "none";
    } else {
        list2.style.display = "none";
    }
});

const btn3 = document.getElementById("skills__button-1-sub-3");
const list3 = document.getElementById("list-1-sub-3");

list3.style.display = "none";
btn3.addEventListener("click", () => {
    if (list3.style.display === "none") {
        list3.style.display = "block";
        list2.style.display = "none";
        list1.style.display = "none";
        list10.style.display = "none";
    } else {
        list3.style.display = "none";
    }
});

const btn10 = document.getElementById("skills__button-1-sub-4");
const list10 = document.getElementById("list-1-sub-4");

list10.style.display = "none";
btn10.addEventListener("click", () => {
    if (list10.style.display === "none") {
        list10.style.display = "block";
        list2.style.display = "none";
        list1.style.display = "none";
        list3.style.display = "none";
    } else {
        list10.style.display = "none";
    }
});

const btn4 = document.getElementById("skills__button-1-sub");
const list4 = document.getElementById("list-1-sub");

list4.style.display = "none";
btn4.addEventListener("click", () => {
    if (list4.style.display === "none") {
        list4.style.display = "block";
    } else {
        list4.style.display = "none";
        list1.style.display = "none";
        list2.style.display = "none";
        list3.style.display = "none";
        list10.style.display = "none";
    }
});

const btn5 = document.getElementById("skills__button-1");
const list5 = document.getElementById("list-1");

list5.style.display = "none";
btn5.addEventListener("click", () => {
    if (list5.style.display === "none") {
        list5.style.display = "block";
    } else {
        list5.style.display = "none";
        list4.style.display = "none";
        list1.style.display = "none";
        list2.style.display = "none";
        list3.style.display = "none";
        list10.style.display = "none";
    }
});

/**************************** Professional Skill **************************************/

/**************************** Personal Skill **************************************/

const btn6 = document.getElementById("skills__button-2");
const list6 = document.getElementById("list-2");

list6.style.display = "none";
btn6.addEventListener("click", () => {
    if (list6.style.display === "none") {
        list6.style.display = "block";
    } else {
        list6.style.display = "none";
    }
});

/**************************** Personal Skill **************************************/

/**************************** Designer Skill **************************************/
const btn7 = document.getElementById("skills__button-3-sub-1");
const list7 = document.getElementById("list-3-sub-1");

list7.style.display = "none";
btn7.addEventListener("click", () => {
    if (list7.style.display === "none") {
        list7.style.display = "block";
        list8.style.display = "none";
    } else {
        list7.style.display = "none";
    }
});

const btn8 = document.getElementById("skills__button-3-sub-2");
const list8 = document.getElementById("list-3-sub-2");

list8.style.display = "none";
btn8.addEventListener("click", () => {
    if (list8.style.display === "none") {
        list8.style.display = "block";
        list7.style.display = "none";
    } else {
        list8.style.display = "none";
    }
});

const btn9 = document.getElementById("skills__button-3");
const list9 = document.getElementById("list-3");

list9.style.display = "none";
btn9.addEventListener("click", () => {
    if (list9.style.display === "none") {
        list9.style.display = "block";
    } else {
        list9.style.display = "none";
        list8.style.display = "none";
        list7.style.display = "none";
    }
});

document.getElementById("theme-button").addEventListener(
    "click",
    function(e) {
        let target = e.target;
        target.classList.toggle("uil-moon");
        target.classList.toggle("uil-sun");
    },
    false
);



function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_1lnec8d";
  const templateID = "template_3kis00q";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}