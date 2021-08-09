<template>
  <div class="navbar">
    <div class="logo-img">
      <img src="../assets/img/Logo.svg" alt="logo">
      <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
    </div>
    <ul class="navbar-tab">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <img src="../assets/img/Logo-1.svg">
            <span>Home</span>
          </a>
        </li>
        <li class="nav-item active">
          <a href="#" class="nav-link">
            <img src="../assets/img/pay.svg">
            <span>Cards</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <img src="../assets/img/Payments.svg">
            <span>Payments</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <img src="../assets/img/Credit.svg">
            <span>Credit</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <img src="../assets/img/Account.svg">
            <span>Profile</span>
          </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  bottom: 0;
  padding: 10px 30px;
  left:0;
  right:0;
  box-shadow: 0 -3px 6px #00000014;
  background-color: #fff;
  @media (min-width: 768px) {
    display: inline-block;
    position: relative;
    top:0;
    width: 275px;
    background-color: $blue-primary;
    padding: 30px;
    height: 100vh;
  }
  .logo-img {
    display: none;
    @media (min-width: 768px) {
      display: block;
      padding-bottom: 50px;
      img {
        margin-bottom: 10px;
      }
      p {
        font-size: 15px;
        color: $white;
        opacity: .3;
      }
    }
  }
  .navbar-tab {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
      @media (min-width: 768px) {
        flex-direction: column;
      } 
    .nav-item {
      text-align: center;
      .nav-link {
        text-decoration: none;
        color: $grey-secondary;
        font-size: 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 14px;
        img {
          max-width: 14px;
          margin-bottom: 5px;
        }
        @media (min-width: 768px) {
          flex-direction: row;
          font-size: 16px;
          color: $white;
        } 
      }
      &.active {
        .nav-link {
          color: $green;
        }
      }
      @media (min-width: 768px) {
          padding: 20px 0;
          .nav-link {
            img {
              margin: 0;
              margin-right: 20px;
            }
          }
      } 
    }
  }
}
</style>>
