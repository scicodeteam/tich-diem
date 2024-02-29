const gifts_dh_1_0_0__popup = `
    <div class="gifts_dh_1_0_0__overlay" id="gifts_dh_1_0_0__overlay"></div>
    <section class="gifts_dh_1_0_0__popup">
        <b id="close-form">╳</b>
        <div class="gifts_dh_1_0_0__popupTitle">
            Bạn muốn đổi phần quà này?
        </div>
        <div class="gifts_dh_1_0_0__popupName">
            Phần quà: Zincodin
        </div>
        <div class="gifts_dh_1_0_0__popupPoints">
            43 điểm
        </div>
        <div class="gifts_dh_1_0_0__popupPic">
            <img width="499" height="500" src="images/zincodin-front.png" alt="">
        </div>
        <div class="gifts_dh_1_0_0__popupNote">
            Vui lòng kiểm tra lại thông tin trước khi đổi quà
        </div>
        <div class="gifts_dh_1_0_0__popupBtn">
            <div class="gifts_dh_1_0_0__btn1 kttt">
                Kiểm tra thông tin
            </div>
            <div class="gifts_dh_1_0_0__btn2">
                Đổi quà
            </div>
        </div>
    </section>
`;

const gifts_dh_1_0_0__popupForm = `
    <div class="gifts_dh_1_0_0__overlay" id="gifts_dh_1_0_0__overlay"></div>
    <section class="gifts_dh_1_0_0__popupForm">
        <b id="close-form">╳</b>
        <div class="gifts_dh_1_0_0__btnBack">
            ← Quay lại
        </div>
        <div class="gifts_dh_1_0_0__popupTitle">
            Kiểm tra thông tin
        </div>
        <div class="gifts_dh_1_0_0__itemInput">
            <input type="text" placeholder="Họ và tên">
        </div>
        <div class="gifts_dh_1_0_0__itemInput">
            <input type="text" placeholder="Email">
        </div>
        <div class="gifts_dh_1_0_0__itemInput">
            <input type="text" placeholder="Số điện thoại">
        </div>
        <div class="gifts_dh_1_0_0__itemInput">
            <input type="text" placeholder="Địa chỉ">
        </div>
        <div class="gifts_dh_1_0_0__popupBtnForm">
            Xác nhận đổi thông tin
        </div>
    </section>
`;

const gifts_dh = document.querySelectorAll(".knprice");
for (let i = 0; i < gifts_dh.length; i++) {
    gifts_dh[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", gifts_dh_1_0_0__popup);
        document.getElementById('close-form').addEventListener('click', () => {
            gifts_dh_1_0_0__closeForm();
        });
        document.getElementById('gifts_dh_1_0_0__overlay').addEventListener('click', () => {
            gifts_dh_1_0_0__closeForm();
        });
        window.onclick = function (e) {
            if (e.target == document.querySelector('.gifts_dh_1_0_0__popup')) {
                gifts_dh_1_0_0__closeForm();
            }
        };
        function gifts_dh_1_0_0__closeForm(){
            document.getElementById('gifts_dh_1_0_0__overlay').remove();
            document.querySelector('.gifts_dh_1_0_0__popup').remove();
        }
    });
}
const giftsForm_dh = document.querySelectorAll(".kttt");
for (let i = 0; i < gifts_dh.length; i++) {
    giftsForm_dh[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", gifts_dh_1_0_0__popupForm);
        document.getElementById('close-form').addEventListener('click', () => {
            gifts_dh_1_0_0__closeForm();
        });
        document.getElementById('gifts_dh_1_0_0__overlay').addEventListener('click', () => {
            gifts_dh_1_0_0__closeForm();
        });
        window.onclick = function (e) {
            if (e.target == document.querySelector('.gifts_dh_1_0_0__popupForm')) {
                gifts_dh_1_0_0__closeForm();
            }
        };
        function gifts_dh_1_0_0__closeForm(){
            document.getElementById('gifts_dh_1_0_0__overlay').remove();
            document.querySelector('.gifts_dh_1_0_0__popupForm').remove();
        }
    });
}