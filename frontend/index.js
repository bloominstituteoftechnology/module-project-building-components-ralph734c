function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const container = document.createElement('nav');
    links.forEach(link => {
      const linkEl = document.createElement("a");
      linkEl.textContent = link.textContent;
      linkEl.href = link.href;
      linkEl.title = link.title;
      container.appendChild(linkEl);
    })
    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const cardEl = document.createElement("div");
    cardEl.classList.add("learner-card");

    const nameP = document.createElement("p");
    nameP.textContent = learner.fullName;
    cardEl.appendChild(nameP);

    const idP = document.createElement("p");
    idP.textContent = `Learner ID: ${learner.id}`;
    cardEl.appendChild(idP);

    const birthP = document.createElement("p");
    birthP.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    cardEl.appendChild(birthP);

    const langP = document.createElement("p");
    const favLang = languages.find(lang => lang.id === learner.favLanguage);
    langP.textContent = `Favorite Language: ${favLang.name}`;
    cardEl.appendChild(langP);

    cardEl.addEventListener("click", () => {
      document.querySelectorAll(".learner-card").forEach(card => {
        card.classList.remove("active")
      })
      cardEl.classList.add("active");
    })

    return cardEl
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector("section").appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer');

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("company-info");
    footer.appendChild(infoContainer);

    const companyNameP = document.createElement("p");
    companyNameP.classList.add("company-name");
    companyNameP.textContent = footerData.companyName;
    infoContainer.appendChild(companyNameP);

    const addressP = document.createElement("p");
    addressP.classList.add("address");
    addressP.textContent = footerData.address;
    infoContainer.appendChild(addressP);

    const emailP = document.createElement("p");
    emailP.classList.add("contact-email");
    emailP.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`
    infoContainer.appendChild(emailP);

    const socialContainer = document.createElement("div");
    socialContainer.classList.add("social-media");
    footer.appendChild(socialContainer);
    
    const twitterL = document.createElement("a");
    twitterL.href = footerData.socialMedia.twitter;
    twitterL.textContent = "Twitter";
    socialContainer.appendChild(twitterL);

    const facebookL = document.createElement("a");
    facebookL.href = footerData.socialMedia.facebook;
    facebookL.textContent = "Facebook";
    socialContainer.appendChild(facebookL);

    const instaL = document.createElement("a");
    instaL.href = footerData.socialMedia.instagram;
    instaL.textContent = "Instagram";
    socialContainer.appendChild(instaL);

    let currentYear = new Date().getFullYear();
    const copyrightContainer = document.createElement("div");
    copyrightContainer.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`;
    footer.appendChild(copyrightContainer);

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  const pageSection = document.querySelector("section");
  document.addEventListener("click", evt => {
    if (evt.target === pageSection) {
      const learners = document.querySelectorAll(".learner-card")
      learners.forEach(card => card.classList.remove("active"))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
