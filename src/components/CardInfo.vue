<template>
<div class="card mt-20">
    <div class="text-right card-visibility">
        <a href="#">
            <img src="../assets/img/remove_red_eye-24px.svg"> 
            Show card number
        </a>
    </div>
  <div class="card-info">
      <div class="text-right">
          <img src="../assets/img/Logo-2.svg" alt="Logo">
      </div>
      <div class="card-name">
          <h4>Mark Henry</h4>
      </div>
      <div class="card-number flex mb-10">
          <div class="card-digit">
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
          </div>
          <div class="card-digit">
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
          </div>
          <div class="card-digit">
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
              <b-icon icon="circle-fill"></b-icon>
          </div>

          <div class="card-digit">
              <span class="number-val">2020</span>
          </div>
      </div>
      <div class="flex card-other">
        <div class="card-validity pr-15">
            Thru: 12/20
        </div>
        <div class="card-cvv">
            cvv: <b-icon icon="asterisk"></b-icon> <b-icon icon="asterisk"></b-icon> <b-icon icon="asterisk"></b-icon>
        </div>
      </div>
      <div class="text-right">
          <img src="../assets/img/Visa-Logo.svg">
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardInfo'
}
</script>

<style lang="scss" scoped>
    .card {
        .card-visibility {
            a {
                font-size: 12px;
                text-decoration: none;
                color: $green;
                background-color: $white;
                padding: 3px 10px;
                border-radius: 4px 4px 0 0;
                img {
                    padding-right: 5px; 
                    vertical-align: middle;
                }
            }
        }   
    }

    .card-info {
        background-color: $green;
        border-radius: 12px;
        box-shadow: 0 2px 6px #00000014;
        padding: 24px;
        font-weight: bold;
        .card-name {
            h4 {
                margin: 20px 0;
                font-size: 22px;
                color: $white;
            }
        }
        .card-number {
            .card-digit {
                color: $white;
                padding-right:10px;
                .b-icon {
                    width:8px;
                    height:8px;
                    color: $white;
                    padding:0 2px;
                }
                .number-val {
                    font-size: 14px;
                }
            }
        }

        .card-other {
            color: $white;
            font-size: 14px;
            .b-icon {
                font-size: 12px;
            }
        }
    }
</style>>
