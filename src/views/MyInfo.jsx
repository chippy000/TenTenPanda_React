function MyInfo() {
  return (
    <>
      <section className="p-lg-0 mt-8 mt-lg-14 container mx-lg-auto mb-lg-16">
        {/* 商品列表 */}
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block col-lg-3">
              <ul>
                <li className="mb-lg-18 mt-lg-8">
                  <h2 className="fs-1 fw-bold">會員中心</h2>
                </li>
                <li className="mb-lg-12">
                  <a href="./myInfo.html" className="text-primary-60 fs-4">
                    個人資訊
                  </a>
                </li>
                <li className="mb-lg-12">
                  <a href="./myFavorite.html" className="text-neutral-90 fs-4">
                    我的收藏
                  </a>
                </li>
                <li>
                  <a href="./myOrders.html" className="text-neutral-90 fs-4">
                    我的訂單
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-9">
              <p className="fs-2 fw-semibold mb-lg-12 mb-8">個人資訊</p>
              <div className="container min-vh-100">
                <div className="row">
                  {/* 修改按鈕 */}
                  <div className="d-flex justify-content-end mb-2">
                    <button
                      type="button"
                      id="editBtn"
                      className="btn btn-primary-40 text-neutral-white"
                    >
                      編輯會員資料
                    </button>
                  </div>
                  {/* 姓名 */}
                  <div className="my-4">
                    <label for="name" className="form-label fs-9 ps-5 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value="王小明"
                      disabled
                    />
                  </div>
                  {/* e-mail */}
                  <div className="my-4">
                    <label for="E-Mail" className="form-label fs-9 ps-5 mb-2">
                      電子信箱
                    </label>
                    <input
                      type="e-mail"
                      className="form-control"
                      id="E-Mail"
                      value="abc123@gmail.com"
                      disabled
                    />
                  </div>
                  {/* 聯絡電話 */}
                  <div className="my-4">
                    <label for="phone" className="form-label fs-9 ps-5 mb-2">
                      聯絡電話
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value="0912345678"
                      disabled
                    />
                  </div>
                  {/*  地址  */}
                  <div className="my-4">
                    <label for="addrress" className="form-label fs-9 ps-5 mb-2">
                      收貨地址（預設）
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="addrress"
                      value="台北市台北里台北路100號"
                      disabled
                    />
                  </div>
                  {/*  確認修改、取消修改按鈕 */}
                  <div className="d-flex justify-content-center justify-content-lg-end mt-8 mb-2">
                    <button
                      type="button"
                      id="cancelBtn"
                      className="btn btn-primary-40 text-neutral-white me-6 me-lg-4 d-none"
                    >
                      取消修改
                    </button>
                    <button
                      type="button"
                      id="saveBtn"
                      className="btn btn-primary-40 text-neutral-white d-none"
                    >
                      確認修改
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyInfo;
