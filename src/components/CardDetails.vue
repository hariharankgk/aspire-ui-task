<template>
  <div class="card-details">
      <div class="flex space-between">
          <div class="card-title">
              <img src="../assets/img/Group-11889.svg">
              Card Details
          </div>
          <div class="card-arrow">
              <a href="#">
                  <img src="../assets/img/down-arrow.svg">
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardDetails'
}
</script>

<style lang="scss" scoped>
    .card-details {
        background-color: $grey-fourth;
        padding: 24px;
        margin: 20px 0;
        box-shadow: 0 0 8px #0000000A;
        border: 1px solid #F5F5F5;
        .card-title {
            font-size: 14px;
        }
        img {
            vertical-align: middle;
        }
    }
</style>
