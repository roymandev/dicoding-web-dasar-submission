const sitelist = [
  {
    icon: '<i class="fa-brands fa-github"></i>',
    link: "https://github.com/roymandev",
    text: "Github",
  },
  {
    icon: '<i class="fa-brands fa-facebook"></i>',
    link: "https://web.facebook.com/royman.dev/",
    text: "Facebook",
  },
  {
    icon: '<i class="fa-brands fa-instagram"></i>',
    link: "https://instagram.com/roymandev",
    text: "Instagram",
  },
];

function renderSiteList(sitelist) {
  let sitelistEl = "";

  sitelist.forEach((site) => {
    sitelistEl += `<li>
    <a class="sitelist__item" href="${site.link}"
      >${site.icon}<span>${site.text}</span></a
    >
  </li>`;
  });

  document.getElementById("sitelist").innerHTML = sitelistEl;
}

renderSiteList(sitelist);
