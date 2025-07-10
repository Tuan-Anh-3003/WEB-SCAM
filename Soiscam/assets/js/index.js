// Variables
const warningHeader = document.querySelectorAll(".warning__header");
const scammerList = document.querySelector(".scammer__list");
const alertScamtitle = document.querySelector(".alert-scam__title");
const alertScamDesc = document.querySelector(".alert-scam__desc");
const scammerListWrap = document.querySelector(".scammer__list-wrap");
const loading = document.querySelector(".loading");
const formSearch = document.querySelector(".form-search");

let scammerData = [];
// Variables

  alertScamtitle.textContent = `Hôm nay ${formatDate()}`;


// Handle dropdown warning
warningHeader.forEach((item) => {
  item.addEventListener("click", handleShowDropdown);
});

function handleShowDropdown(e) {
  const warningContent = e.currentTarget.nextElementSibling;
  const warningContentAll = document.querySelectorAll(".warning__content");
  const warningIcon = e.currentTarget.querySelector(".warning__header-icon");
  const warningIconAll = document.querySelectorAll(".warning__header-icon");

  warningIconAll.forEach((item) => {
    if (item !== warningIcon) item.classList.remove("active");
  });

  warningContentAll.forEach((item) => {
    if (item !== warningContent) {
      item.style.height = 0;
      item.classList.remove("active");
    }
  });

  warningContent.style.height = `${warningContent.scrollHeight}px`;
  warningContent.classList.toggle("active");
  warningIcon.classList.toggle("active");

  if (!warningContent.classList.contains("active")) {
    warningContent.style.height = 0;
  }
}
// end Handle dropdown warning

// Handle Show Modal


document.body.addEventListener("click", (e) => {
  const modal = document.querySelector(".modal");
  if (
    e.target.matches(".modal__header-close") ||
    e.target.matches(".modal__overlay")
  ) {
    modal.remove();
    document.body.style.overflow = "auto";
  } else if (e.target.matches(".scammer__item")) {
    handleShowModal(e.target.dataset.id);
  }
});
// end Handle Show Modal
// Handle Render Scammer Today
function renderScammerToday(data) {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const todayData = data.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === todayDate.getTime();
  });

  alertScamDesc.textContent = `CÓ ${todayData.length} CẢNH BÁO`;

    if (todayData && todayData.length > 0) {
      todayData.forEach((item) => {
        scammerList.insertAdjacentHTML("afterbegin", renderscammerItemHTML(item));
      });
    } else {
      scammerListWrap.insertAdjacentHTML(
        "beforeend", 
        renderNotFoundHTML("Không có đơn nào" ));
    }
}

  

// end Handle Render Scammer Today


// Handle Get scammer 
async function getScammer() {
  loading.classList.add("active")
  try {
        loading.classList.remove("active")
      const response = await axios.get(endpoint);
      scammerData = await response.data;
      
        renderScammerToday(scammerData);
          } catch (error) {
            loading.classList.remove("active")
      console.error(error);
        scammerListWrap.insertAdjacentHTML("beforeend", renderNotFoundHTML());
  }
   
    
  }

getScammer();
// end Handle Get scammer

// Handle Search
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputSearch = e.target.querySelector(".form-search_input")
  window.location.href = `./scammers.html?search=${inputSearch.value}`
});
// end Handle Search