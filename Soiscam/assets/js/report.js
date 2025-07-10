// VARIABLES
const apiKey ="375df86dcde65eda1790ee8b9b080391"
const enpoin = "https://686ded40c9090c495387a4f4.mockapi.io/scammers"
const uploadImageInput = document.getElementById("uploadImage");
const formUploadWrap = document.querySelector(".form__upload-wrap");
let arrayImage = [];
const phoneScammerInput = document.getElementById("phoneScammer");
const bankNumberInput = document.getElementById("bankNumber");
const phoneSenderInput = document.getElementById("phoneSender");
const contentReportInput = document.getElementById("contentReport");
// end VARIABLES

//Handle Content Report Input
contentReportInput.addEventListener("input", (e) => {
  e.target.style.height = "auto";
  e.target.style.height = `${e.target.scrollHeight}px`;
});
// end Handle Content Report Input


// Handle input only number
phoneScammerInput.addEventListener("keypress", handleInputOnlyNumber)
bankNumberInput.addEventListener("keypress", handleInputOnlyNumber)
phoneSenderInput.addEventListener("keypress", handleInputOnlyNumber)

function handleInputOnlyNumber(e) {
  if(e.charCode < 48 || e.charCode > 57){
    e.preventDefault();
  }
}
// end Handle input only number



// HANDLE UPLOAD IMGBB
async function uploadImgBB(file) {
  const formData = new FormData();
  // Thêm file hình ảnh vào FormData để gửi lên server
  formData.append("image", file);

  try {
    // Gửi yêu cầu POST đến API ImgBB với đường dẫn endpoint và apiKey bằng axios
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );

    // Trả về URL của hình ảnh sau khi tải lên thành công
    return response.data.data.url;
  } catch (error) {
    // Bắt lỗi nếu có vấn đề xảy ra trong quá trình tải lên
    console.log(error);
    return null; // Trả về null nếu gặp lỗi
  }
}

// end HANDLE UPLOAD IMGBB


// HANDLE UPLOAD IMAGE
uploadImageInput.addEventListener("change", handleUploadImage);

async function handleUploadImage(e) {
  const imageList = [...e.target.files];
  imageList.forEach(async(item) => {
    const urlImg = await uploadImgBB(item);
    const imgHTML = `
      <div class="form__image-preview">
        <div class="form__preview-remove" data-url="${urlImg}">
          <img src="./assets/images/close-icon.svg" alt="" />
        </div>
        <img 
          src="${urlImg}" 
          alt=""
          class="form__preview-img"
        />
      </div>
    `
    formUploadWrap.insertAdjacentHTML("afterbegin", imgHTML);
    arrayImage.push(urlImg);
    console.log("arrayImage:", arrayImage);
  });
}

formUploadWrap.addEventListener("click", (e) => {
  if (e.target.matches(".form__preview-remove")) {
    const formImagePreview = e.target.parentNode;
    formImagePreview.remove();
    arrayImage = arrayImage.filter((item) => item !== e.target.dataset.url);
    console.log(arrayImage);
  }
});


// end HANDLE UPLOAD IMAGE

// VALIDATE SUBMIT FORM
Validator({
  form: "#form-report",
  formGroupSelector: ".form__group",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#nameScammer", "Nhập tên chủ tài khoản"),
    Validator.minLength("#nameScammer", 6, "Nhập tối thiểu 6 kí tự"),
    Validator.isRequired("#phoneScammer", "Nhập số điện thoại đối tượng"),
    Validator.isPhoneNumber("#phoneScammer"),

    Validator.isRequired("#bankNumber", "Nhập số tài khoản"),
    Validator.isNumber("#bankNumber"),
    Validator.minLength("#bankNumber", 8, "Nhập tối thiểu 8 số"),

    Validator.isRequired("#bankName", "Nhập tên ngân hàng"),
    Validator.minLength("#bankName", 3, "Nhập tối thiểu 3 kí tự"),

    Validator.isRequired("#contentReport", "Nhập nội dung tố cáo"),
    Validator.minLength("#contentReport", 20, "Nhập ít nhất 20 kí tự"),

    Validator.isImageUploaded("#uploadImage", "Vui lòng tải ảnh lên"),

    Validator.isRequired("#nameSender", "Nhập tên của bạn"),
    Validator.minLength("#nameSender", 6, "Nhập tối thiểu 6 kí tự"),

    Validator.isRequired("#phoneSender", "Nhập số điện thoại của bạn"),
    Validator.isPhoneNumber("#phoneSender")
  ],
  onSubmit: async function ({images, ...reset}) {
     const formImagePreview = document.querySelectorAll(
    ".form__image-preview"
  );
    try {
    await axios.post(enpoin, {
   images: arrayImage,
   Date: new Date(),
     ...reset,
  });
 
   await FuiToast.success('Gửi đơn thành công!')
  formImagePreview.forEach((item) => item.remove());
} catch (error) {
  console.log(error);
  FuiToast.error("Lỗi đơn!")
  formImagePreview.forEach((item) => item.remove());
}
 
    console.log({images: arrayImage, ...reset}); // Dữ liệu form sau khi xác thực thành công
  },
  resetOnSubmit: true,
});
// end VALIDATE SUBMIT FORM
