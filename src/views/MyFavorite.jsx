function MyFavorite() {
  return (
    <>
      <section className="p-lg-0 mt-8 mt-lg-14 container mx-lg-auto mb-lg-16">
        {/* 商品列表 */}
        <div className="container min-vh-100">
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
                  <a href="./myFavorite.html" className="text-primary-60 fs-4">
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
              <p className="fs-2 fw-semibold mb-lg-18 mb-8">我的收藏</p>
              <div className="container">
                <div className="row" id="favorites-list"></div>
              </div>
              <ul
                id="favorites-pagination"
                className="d-flex justify-content-center align-items-center"
              >
                <li className="px-3" id="prev-page">
                  <span className="material-symbols-outlined">
                    {" "}
                    chevron_left{" "}
                  </span>
                </li>
                <li className="px-3 text-primary-60">1</li>
                <li className="px-3" id="next-page">
                  <span className="material-symbols-outlined">
                    {" "}
                    chevron_right{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  Modal  */}
      {/* 購物車  */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content br-32">
            <div className="modal-body d-flex flex-column justify-content-center align-items-center py-10">
              <div className="mb-5 cart">
                <i className="bi bi-cart2 d-inline-block fs-2"></i>
              </div>
              <p className="fs-6">已加入購物車！</p>
            </div>
          </div>
        </div>
      </div>
      {/* 收藏 */}
      <div
        className="modal fade"
        id="favoriteModal"
        tabIndex="-1"
        aria-labelledby="favoritetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content br-32">
            <div className="modal-body d-flex flex-column justify-content-center align-items-center py-10">
              <div className="mb-5 cart">
                <i className="bi bi-heart-fill d-inline-block fs-2"></i>
              </div>
              <p className="fs-6">已加入願望清單！</p>
            </div>
          </div>
        </div>
      </div>
      {/* 取消收藏 */}
      <div
        className="modal fade"
        id="cancelFavoriteModal"
        tabIndex="-1"
        aria-labelledby="favoritetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content br-32">
            <div className="modal-body d-flex flex-column justify-content-center align-items-center py-10">
              <div className="mb-5 cart">
                <i className="bi bi-check d-inline-block fs-2"></i>
              </div>
              <p className="fs-6">已取消收藏！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFavorite;
