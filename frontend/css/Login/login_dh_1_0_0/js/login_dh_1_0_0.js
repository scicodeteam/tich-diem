const login_dh_1_0_0 = `
    <div class="login_dh_1_0_0__overlay" id="login_dh_1_0_0__overlay"></div>
    <section class="login_dh_1_0_0" id="login_dh_1_0_0">
        <div class="container">
            <div class="login_dh_1_0_0__box">
                <b id="close-form">╳</b>
                <div class="login_dh_1_0_0__head tabs">
                    <p class="login_dh_1_0_0__text tab-link current" data-tab="login">Đăng nhập</p>
                    <p class="login_dh_1_0_0__text tab-link" data-tab="register">Đăng ký</p>
                </div>
                <div class="tab-content current" id="login">
                    <div class="login_dh_1_0_0__boxForm">
                        <div class="login_dh_1_0_0__pic">
                            <img width="1000" height="1000" src="images/banner.png" alt="">
                        </div>
                        <div class="login_dh_1_0_0__form">
                            <div class="login_dh_1_0_0__item">
                                <input type="text" placeholder="Số điện thoại">
                            </div>
                            <div class="login_dh_1_0_0__item">
                                <input type="text" placeholder="Mật khẩu">
                            </div>
                            <a href="" class="login_dh_1_0_0__forgot">Quên mật khẩu</a>
                            <div class="login_dh_1_0_0__item">
                                <input type="submit" value="ĐĂNG NHẬP">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="register">
                    <div class="login_dh_1_0_0__boxForm">
                        <div class="login_dh_1_0_0__pic">
                            <img width="1000" height="1000" src="images/banner.png" alt="">
                        </div>
                        <div class="login_dh_1_0_0__form">
                            <div class="login_dh_1_0_0__boxItem">
                                <div class="login_dh_1_0_0__item">
                                    <input type="text" placeholder="Họ và tên">
                                </div>
                                <div class="login_dh_1_0_0__item">
                                    <input type="text" placeholder="Số điện thoại">
                                </div>
                            </div>
                            <div class="login_dh_1_0_0__item">
                                <input type="text" placeholder="Email">
                            </div>
                            <div class="login_dh_1_0_0__boxItem">
                                <div class="login_dh_1_0_0__item">
                                    <input type="text" placeholder="Mật khẩu">
                                </div>
                                <div class="login_dh_1_0_0__item">
                                    <input type="text" placeholder="Xác nhận mật khẩu">
                                </div>
                            </div>
                            <div class="login_dh_1_0_0__boxNote">
                                <input type="checkbox">
                                <p class="login_dh_1_0_0__note">Tôi đồng ý với <span>Điều khoản</span> & <span>Chính sách bảo mật</span> </p>
                            </div>
                            <div class="login_dh_1_0_0__item">
                                <input type="submit" value="ĐĂNG KÝ">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const login_dh = document.querySelectorAll(".knprice");
for (let i = 0; i < login_dh.length; i++) {
    login_dh[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", login_dh_1_0_0);

        document.getElementById('close-form').addEventListener('click', () => {
            login_dh_1_0_0__closeForm()
        })
        document.getElementById('login_dh_1_0_0__overlay').addEventListener('click', () => {
            login_dh_1_0_0__closeForm()
        })
        window.onclick = function (e) {
            if (e.target == document.querySelector('.login_dh_1_0_0__box')) {
                login_dh_1_0_0__closeForm()
            }
        }
        function login_dh_1_0_0__closeForm(){
            document.getElementById('login_dh_1_0_0').remove();
            document.getElementById('login_dh_1_0_0__overlay').remove();
        }

        // Click Tabs
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');

        // Thêm sự kiện click cho các tab-link
        tabLinks.forEach((tabLink) => {
            tabLink.addEventListener('click', (e) => {
            e.preventDefault();
        
            // Lấy data-tab của tab-link được click
            const tabId = tabLink.getAttribute('data-tab');
        
            // Ẩn tất cả các tab-content
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('current');
            });
        
            // Hiển thị tab-content tương ứng với tab-link được click
            const targetTabContent = document.getElementById(tabId);
            targetTabContent.classList.add('current');
            });
        });
    })
}


