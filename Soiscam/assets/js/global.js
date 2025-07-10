const endpoint = "https://686ded40c9090c495387a4f4.mockapi.io/scammers";


// Handle Format Date
function formatDate(dateString) {
  const date = dateString ? new Date(dateString) : new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formatedDay = day < 10 ? `0${day}` : day;
  const formatedMonth = month < 10 ? `0${month}` : month;

  return `${formatedDay}/${formatedMonth}/${year}`;
}
// end Handle Format Date

// Render Modal HTML
 function renderModalHTML(itemData) {
  const imageListHTML = itemData.images.map((item, index) => `
    <a href="${item}">
      <img src="${item}" alt="Ảnh bằng chứng ${itemData.nameScammer} ${index + 1}" />
    </a>
  `).join("");

  return `
    <section class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__content">
        <div class="modal__header">
          <div class="modal__header-title">Chi tiết tố cáo</div>
          <div class="modal__header-close">
            <img src="./assets/images/close-icon.svg" alt="close icon" />
          </div>
        </div>
        <div class="modal__body">
          <div class="modal__group">
            <div class="modal__profile">
              <div class="modal__profile-avatar">
                <img src="./assets/images/avatar-1.png" alt="avatar" />
              </div>
            </div>
            <div class="modal__info">
              <h4 class="modal__info-name">${itemData.nameScammer}</h4>
              <p class="modal__info-desc">#${itemData.id} - Tố vào ngày ${formatDate(itemData.date)}</p>
            </div>
          </div>

          <div class="modal__detail">
            <span class="modal__detail-title">Số điện thoại</span>
            <span class="modal__detail-text text-single">${itemData.phoneScammer}</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Số tài khoản</span>
            <span class="modal__detail-text text-single">${itemData.bankNumber}</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Ngân hàng</span>
            <span class="modal__detail-text text-single">${itemData.bankName}</span>
          </div>

          <div class="modal__group">
            <div class="modal__profile">
              <div class="modal__profile-avatar">
                <img src="./assets/images/avatar-2.png" alt="avatar" />
              </div>
              <div class="modal__info">
                <h4 class="modal__info-name">${itemData.nameSender}</h4>
                <p class="modal__info-desc">Người tố cáo</p>
              </div>
            </div>
          </div>

          <div class="modal__detail">
            <span class="modal__detail-title">Trạng thái</span>
            <span class="modal__detail-text text-single">${itemData.option}</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Liên hệ</span>
            <span class="modal__detail-text text-single">${itemData.phoneSender}</span>
          </div>
          <div class="modal_textarea">
            <span class="modal__detail-title">Nội dung tố cáo</span>
            <p class="modal__textarea-content">${itemData.contentReport}</p>
          </div>

          <div class="modal__images">Hình ảnh liên quan</div>
          <div class="modal__preview-images">${imageListHTML}</div>
        </div>
      </div>
    </section>
  `;
}


// Handle Show Modal
function handleShowModal(id) {
  const scammer = scammerData.find((item) => item.id === id);


  document.body.insertAdjacentHTML("afterbegin", renderModalHTML(scammer));
  document.body.style.overflow = "hidden";
  lightGallery(document.querySelector('.modal__preview-images'), {
    plugin: [lgThumbnail],
});

}
// end Handle Show Modal

// Render Scammer Item
function renderScammerItemHTML(itemData) {
  return `
    <li class="scammer__item" data-id="${itemData.id}">
      <img src="./assets/images/avatar-1.png" alt="avatar" class="scammer__avatar"/>
      <div class="scammer__info">
        <h3 class="scammer__name text-single">${itemData.nameScammer}</h3>
        <div class="scammer__date">#${itemData.id} - ${formatDate(itemData.date)}</div>
      </div>
    </li>
  `;
}

// end Render Scammer Item

// Render Not Found HTML
function renderNotFoundHTML(message = "Không có dữ liệu") {
  return `
    <div class="not-found">
      <img src="./assets/images/not-found.svg" />
      <span>${message}</span>
    </div>
  `;
}
// end Render Not Found HTML

// Remove text to mark
function removeTextNoMark(str) {
  // remove accents
  var from = "áàảãạăằẳẵặâầẩẫậéèẻẽẹêềểễệíìỉĩịóòỏõọôồổỗộơờởỡợúùủũụưừửữựýỳỷỹỵđ";
  var to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuyyyyyyd";
  for (var i = 0; i < from.length; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\.]/g, ' ')
    .replace(/ +/g, '-');

  return str;
}
// end Remove text no mark
