<template>
  <div class="home">
    <div class="home-dashboard">
      <div class="flex space-between mb-20 flex-end">
        <span class="balance-text">
          Account balance
        </span>
        <a href="#" class="mobile-only">
          <img src="../assets/img/Logo-3.svg">
        </a>
      </div>
      <div class="flex space-between mb-20">
        <div class="price">
          <span class="price-symbol">$$</span>
          3,000
        </div>
        <div class="add-btn">
          <a href="#">
            <img src="../assets/img/box.svg">
            New Card
          </a>
        </div>
      </div>

      <div class="tab mt-20 mb-20">
        <ul class="flex tab-list m-0 p-0">
          <li class="tab-item active">
            <a href="#">My debit cards</a>
          </li>
          <li class="tab-item">
            <a href="#">All company cards</a>
          </li>
        </ul>
      </div>
      <div class="mobile-only">
        <CardInfo />
      </div>
    </div>
    <div class="card-bottom mt-30">
      <div class="card-desktop desktop-only">
        <CardInfo />
        <CardActions />
      </div>
      <div class="card-operations">
        <CardDetails />
        <CardTransactions />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardInfo from '@/components/CardInfo.vue'
import CardActions from '@/components/CardActions.vue'
import CardDetails from '@/components/CardDetails.vue'
import CardTransactions from '@/components/CardTransactions.vue'

export default {
  name: 'Home',
  components: {
    CardInfo,
    CardActions,
    CardDetails,
    CardTransactions,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    min-height: 100vh;
    background-color: $blue-primary;
    padding: 25px 0 50px;
    @media (min-width: 768px) {
      background-color: $white;
      padding: 50px;
    }
    
    .home-dashboard {
      padding: 0 24px;

      .balance-text {
        color: #fff;
        font-size: 14px;
      }

      .price {
        color: $white;
        font-size: 24px;
        font-weight: bold;
        .price-symbol {
          background-color: $green;
          font-size: 12px;
          padding: 3px 12px;
          border-radius: 4px;
          color: $white;
          margin-right: 10px;
          vertical-align: middle;
        }
      }

      .add-btn {
        a {
          text-decoration: none;
          color: $blue-secondary;
          font-size: 13px;
          font-weight: bold;
          img {
            margin-right: 5px;
            vertical-align: text-bottom;
          }
        } 
      }

      @media (min-width: 768px) {
        background-color: $white;
        .balance-text {
          color: #222222;
        }
        .price {
          color: #222222;
          font-size: 26px;
        }
        .add-btn {
          a {
            background-color: #325BAF;
            border-radius: 4px;
            color: $white;
            padding: 9px 14px;
          }
        }
      }

      .tab {
        .tab-list {
          list-style-type: none;
          .tab-item {
            margin-right: 20px;
            padding-bottom: 10px;
            opacity: .5;
            a {
              color: $white;
              font-size: 13px;
              text-decoration: none;
            }
            &.active {
              opacity: 1;
              font-weight: bold;
              border-bottom: 2px solid $blue-secondary;
            }
            @media (min-width: 768px) {
              a {
                color: #222222;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
    .card-bottom {
      background-color: $white;
      border-radius: 20px 20px 0 0;
      .card-operations {
        padding: 24px;
        @media (min-width: 768px) {
            flex: 1;
            margin-left: 60px;
        }
      }   
      @media (min-width: 768px) { 
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        border: 1px solid #FCFCFC;
        box-shadow: 0 2px 12px #00000014;
        padding: 15px 25px;
        padding-top:40px;
      }
    }
  }
</style>