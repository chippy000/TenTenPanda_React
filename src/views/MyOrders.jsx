function MyOrders() {
  return (
    <>
      <section className="p-lg-0 mt-8 mt-lg-14 container mx-lg-auto mb-lg-16">
        {/* 商品列表  */}
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block col-lg-3">
              <ul>
                <li className="mb-lg-18 mt-lg-8">
                  <h2 className="fs-1 fw-bold">會員中心</h2>
                </li>
                <li className="mb-lg-12">
                  <a href="./myInfo.html" className="text-neutral-90 fs-4">
                    個人資訊
                  </a>
                </li>
                <li className="mb-lg-12">
                  <a href="./myFavorite.html" className="text-neutral-90 fs-4">
                    我的收藏
                  </a>
                </li>
                <li>
                  <a href="./myOrders.html" className="text-primary-60 fs-4">
                    我的訂單
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-9">
              <p className="fs-2 fw-semibold mb-lg-18 mb-8">我的訂單</p>
              <div className="container min-vh-100">
                <div className="row">
                  <div className="accordion" id="accordionExample">
                    {/* 訂單(未展開)  */}
                    <div className="accordion-item mb-8">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed fs-5 fs-lg-4 pb-14"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#orderOne"
                          aria-controls="orderOne"
                        >
                          訂單編號 :
                          <span className="ms-4 fs-6 fs-lg-5">A1234567890</span>
                        </button>
                      </h2>
                      {/* 訂單(展開)  */}
                      <div
                        id="orderOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                      >
                        <div className="accordion-body ms-lg-8">
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            訂單資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單時間<span className="ms-6">2025/09/27</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單狀態<span className="ms-6">配送中</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              付款方式<span className="ms-6">LINE Pay</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              備　　註<span className="ms-6">(無)</span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            收貨人資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              姓　　名<span className="ms-6">王小明</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              電子信箱
                              <span className="ms-6">abc123@gmail.com</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              聯絡電話<span className="ms-6">091234678</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              收貨地址
                              <span className="ms-6">
                                台北市台北里台北路100號
                              </span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            商品與金額資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              購買品項
                              <div className="mt-4 mt-lg-0 ms-3 ms-lg-6 itemsList">
                                <ul className="mb-4 item">
                                  <li>莓果甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 2</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>白雪棉霜苺</li>
                                  <li>NT$ 95</li>
                                  <li>X 1</li>
                                </ul>
                                <ul className="item">
                                  <li>莓果夾心</li>
                                  <li>NT$ 95</li>
                                  <li>X 1</li>
                                </ul>
                              </div>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              優惠折扣<span className="ms-6">(無)</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              運　　費<span className="ms-6">NT$ 65</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單總額<span className="ms-6">NT$ 285</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* 訂單(未展開)  */}
                    <div className="accordion-item mb-8">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed fs-5 fs-lg-4 pb-14"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#orderTwo"
                          aria-controls="orderTwo"
                        >
                          訂單編號 :
                          <span className="ms-4 fs-6 fs-lg-5">A1234567668</span>
                        </button>
                      </h2>
                      {/* 訂單(展開)  */}
                      <div
                        id="orderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                      >
                        <div className="accordion-body ms-lg-8">
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            訂單資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單時間<span className="ms-6">2025/05/01</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單狀態<span className="ms-6">已完成</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              付款方式<span className="ms-6">現金付款</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              備　　註
                              <span className="ms-6">自行到門市取貨</span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            收貨人資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              姓　　名<span className="ms-6">王小明</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              電子信箱
                              <span className="ms-6">abc123@gmail.com</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              聯絡電話<span className="ms-6">091234678</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              收貨地址
                              <span className="ms-6">
                                台北市台北里台北路100號
                              </span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            商品與金額資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              購買品項
                              <div className="mt-4 mt-lg-0 ms-3 ms-lg-6 itemsList">
                                <ul className="mb-4 item">
                                  <li>經典甜甜-禮盒-12入</li>
                                  <li>NT$ 360</li>
                                  <li>X 1</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>焦糖可可甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 2</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>熱紅酒莓果</li>
                                  <li>NT$ 95</li>
                                  <li>X 2</li>
                                </ul>
                                <ul className="item">
                                  <li>雪莓蒙布朗</li>
                                  <li>NT$ 95</li>
                                  <li>X 2</li>
                                </ul>
                              </div>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              優惠折扣<span className="ms-6">(無)</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              運　　費<span className="ms-6">NT$ 0</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單總額<span className="ms-6">NT$ 870</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* 訂單(未展開)  */}
                    <div className="accordion-item mb-8">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed fs-5 fs-lg-4 pb-14"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#orderThree"
                          aria-controls="orderThree"
                        >
                          訂單編號 :
                          <span className="ms-4 fs-6 fs-lg-5">A1231569802</span>
                        </button>
                      </h2>
                      {/* 訂單(展開)  */}
                      <div
                        id="orderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body ms-lg-8">
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            訂單資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單時間<span className="ms-6">2025/04/18</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單狀態<span className="ms-6">已完成</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              付款方式<span className="ms-6">銀行轉帳</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              備　　註<span className="ms-6">(無)</span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            收貨人資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              姓　　名<span className="ms-6">王小明</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              電子信箱
                              <span className="ms-6">abc123@gmail.com</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              聯絡電話<span className="ms-6">091234678</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              收貨地址
                              <span className="ms-6">
                                台北市台北里台北路100號
                              </span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            商品與金額資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              購買品項
                              <ul className="mt-4 mt-lg-0 ms-3 ms-lg-6 itemsList">
                                <ul className="mb-4 item">
                                  <li>經典甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 4</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>莓果甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 1</li>
                                </ul>
                                <ul className="item">
                                  <li>莓果可可</li>
                                  <li>NT$ 95</li>
                                  <li>X 1</li>
                                </ul>
                              </ul>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              優惠折扣<span className="ms-6">(無)</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              運　　費<span className="ms-6">NT$ 65</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單總額<span className="ms-6">NT$ 485</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* 訂單(未展開) */}
                    <div className="accordion-item mb-8">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed fs-5 fs-lg-4 pb-14"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#orderFour"
                          aria-controls="orderFour"
                        >
                          訂單編號 :
                          <span className="ms-4 fs-6 fs-lg-5">A1231520358</span>
                        </button>
                      </h2>
                      {/* 訂單(展開)  */}
                      <div
                        id="orderFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                      >
                        <div className="accordion-body ms-lg-8">
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            訂單資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單時間<span className="ms-6">2025/04/02</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單狀態<span className="ms-6">已完成</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              付款方式<span className="ms-6">LINE Pay</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              備　　註<span className="ms-6">(無)</span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            收貨人資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              姓　　名<span className="ms-6">王小明</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              電子信箱
                              <span className="ms-6">abc123@gmail.com</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              聯絡電話<span className="ms-6">091234678</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              收貨地址
                              <span className="ms-6">
                                台北市台北里台北路100號
                              </span>
                            </li>
                          </ul>
                          <p className="infoHeading fs-6 fs-lg-5 mb-5 fw-bold">
                            商品與金額資訊
                          </p>
                          <ul className="mb-12">
                            <li className="fs-7 fs-lg-6 mb-4">
                              購買品項
                              <div className="mt-4 mt-lg-0 ms-3 ms-lg-6 itemsList">
                                <ul className="mb-4 item">
                                  <li>經典甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 1</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>芝麻甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 1</li>
                                </ul>
                                <ul className="mb-4 item">
                                  <li>抹茶甜甜</li>
                                  <li>NT$ 65</li>
                                  <li>X 2</li>
                                </ul>
                                <ul className="item">
                                  <li>莓果夾心</li>
                                  <li>NT$ 95</li>
                                  <li>X 1</li>
                                </ul>
                              </div>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              優惠折扣<span className="ms-6">-NT$ 100</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              運　　費<span className="ms-6">NT$ 65</span>
                            </li>
                            <li className="fs-7 fs-lg-6 mb-4">
                              訂單總額<span className="ms-6">NT$ 330</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default MyOrders;
