<template>
  <div class="card-transactions">
      <div class="card-transactions-bar">
        <div class="flex space-between">
            <div class="card-title">
                <img src="../assets/img/Group-11889-1.svg">
                Recent Transactions
            </div>
            <div class="card-arrow">
                <a href="#">
                    <img src="../assets/img/down-arrow-1.svg">
                </a>
            </div>
        </div>
      </div>
      <div class="transact-detail">
          <div class="flex space-between transact-info">
              <div class="transact-left flex">
                    <div class="img-box">
                        <img class="trans-icon" src="../assets/img/file-storage.svg">
                    </div>
                  <div class="flex flex-column tr-info">
                      <p class="transact-title">Hamleys</p>
                      <p class="transact-date">20 May 2020</p>
                      <p class="transact-refund">
                          <span><img src="../assets/img/business-and-finance.svg"></span> Refund on debit card
                      </p>
                  </div>
              </div>
              <div class="transact-right">
                  <span>+$$ 150</span>
                  <img src="../assets/img/next.svg">
              </div>
          </div>
          <div class="flex space-between transact-info">
              <div class="transact-left flex">
                  <div class="img-box green">
                    <img class="trans-icon" src="../assets/img/flights.svg">
                  </div>
                  <div class="flex flex-column tr-info">
                      <p class="transact-title">Hamleys</p>
                      <p class="transact-date">20 May 2020</p>
                      <p class="transact-refund">
                          <span><img src="../assets/img/business-and-finance.svg"></span> Charged to debit card
                      </p>
                  </div>
              </div>
              <div class="transact-right">
                  <span class="black">-$$ 150</span>
                  <img src="../assets/img/next.svg">
              </div>
          </div>
          <div class="flex space-between transact-info">
              <div class="transact-left flex">
                  <div class="img-box pink">
                    <img class="trans-icon" src="../assets/img/megaphone.svg">
                  </div>
                  <div class="flex flex-column tr-info">
                      <p class="transact-title">Hamleys</p>
                      <p class="transact-date">20 May 2020</p>
                      <p class="transact-refund">
                          <span><img src="../assets/img/business-and-finance.svg"></span> Refund on debit card
                      </p>
                  </div>
              </div>
              <div class="transact-right">
                  <span class="black">-$$ 150</span>
                  <img src="../assets/img/next.svg">
              </div>
          </div>
          <div class="flex space-between transact-info">
              <div class="transact-left flex">
                  <div class="img-box">
                    <img class="trans-icon" src="../assets/img/file-storage.svg">
                  </div>
                  <div class="flex flex-column tr-info">
                      <p class="transact-title">Hamleys</p>
                      <p class="transact-date">20 May 2020</p>
                      <p class="transact-refund">
                          <span><img src="../assets/img/business-and-finance.svg"></span> Refund on debit card
                      </p>
                  </div>
              </div>
              <div class="transact-right">
                  <span class="black">-$$ 150</span>
                  <img src="../assets/img/next.svg">
              </div>
          </div>
          <div class="view-all">
                <p class="text-center">
                    <a href="#">View all card transactions</a>
                </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardTransactions'
}
</script>

<style lang="scss" scoped>
    .card-transactions {
        .card-transactions-bar {
            background-color: $grey-fourth;
            padding: 24px;
            margin: 20px 0 0;
            box-shadow: 0 0 8px #0000000A;
            .card-title {
                font-size: 14px;
            }
            img {
                vertical-align: middle;
            }
        }

        .transact-detail {
            border: 1px solid #DDFFEC;
            border-radius: 8px;
            background-color: #EDFFF5;
            p {
                margin: 0;
                margin-bottom: 5px;
            }
            .view-all {
                padding: 15px 0;
                p {
                    a {
                        font-size: 13px;
                        text-decoration: none;
                        color: $green;
                    }
                }
            }
            .transact-info {
                background-color: $white;
                padding: 24px;
                border-bottom: 1px solid #F5F5F5;
                &:last-child {
                    border-radius: 0 0 8px 8px;
                }
                .transact-left {
                    .img-box {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #009DFF1A;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &.green {
                            background-color: #00D6B51A;
                        }
                        &.pink {
                            background-color: #F251951A;
                        }
                    }
                    .tr-info {
                        padding-left: 10px;
                        .transact-title {
                            font-size: 14px;
                            color: #222222;
                        }
                        .transact-date { 
                            font-size: 13px;
                            color: #AAAAAA;
                        }
                        .transact-refund {
                            font-size: 12px;
                            color: #325BAF;
                            span {
                                background-color: #325BAF;
                                border-radius: 50%;
                                padding: 2px 7px;
                                vertical-align: text-bottom;
                                margin-right: 4px;
                            }
                        }
                    }
                }
                .transact-right {
                    span {
                        color: $green;
                        padding-right: 5px;
                        font-weight: bold;
                        &.black {
                            color: #222222;
                        }
                    }
                }
            }
            
        }
    }
</style>
