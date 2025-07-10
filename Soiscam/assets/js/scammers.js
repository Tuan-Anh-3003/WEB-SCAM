// Variables
const scammerList = document.querySelector(".scammer__list");
const alertScamDesc = document.querySelector(".alert-scam__desc");
const loading = document.querySelector(".loading");
const scammerListWrap = document.querySelector(".scammer__list-wrap");
const formSearch = document.querySelector(".form-search");
const inputSearch = document.querySelector(".form-search__input");

let scammerData = [];
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("search")


// end Variables


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

// Handle Render Scammer All
function renderScammerAll(data) {
  
  alertScamDesc.textContent = `CÓ ${data.length} CẢNH BÁO`;

  if (data && data.length > 0) {
   data.forEach((item) => {
     
    scammerList.insertAdjacentHTML("afterbegin", renderScammerItemHTML(item));
    });
  }
}
// end Handle Render Scammer All

// Handle Get scammer 
async function getScammer() {
  loading.classList.add("active")
  try {
        loading.classList.remove("active")
      const response = await axios.get(endpoint);
      scammerData = await response.data;
      if (query) {
      const filterData = scammerData.filter((item) =>
      item.bankNumber.includes(query.trim()) ||
      item.phoneScammer.includes(query.trim()) ||
        removeTextNoMark(item.nameScammer).includes(removeTextNoMark(query))
      );
        renderScammerAll(filterData);
    } else {
        renderScammerAll(scammerData);
        }
        console.log(scammerData);
        } catch (error) {
            loading.classList.remove("active");
      console.error(error);
        scammerListWrap.insertAdjacentHTML("beforeend", renderNotFoundHTML());
  }
  }

getScammer();
// end Handle Get scammer

// Handler Search Scammer
inputSearch.value = query
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  urlParams.set("search", inputSearch.value)
  window.location.search = urlParams.toString()
});
// end Handler Search Scammer