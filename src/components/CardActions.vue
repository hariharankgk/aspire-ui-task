<template>
  <div class="card-action">
    <ul class="flex space-between card-action-list m-0 p-0">
        <li class="card-action-item">
            <a href="#">
                <img src="../assets/img/Freeze-card.svg">
                <p>Freeze <br/>Card</p>
            </a>
        </li>
        <li class="card-action-item">
            <a href="#">
                <img src="../assets/img/Set-spend-limit.svg">
                <p>Set spend <br/>limit</p>
            </a>
        </li>
        <li class="card-action-item">
            <a href="#">
                <img src="../assets/img/GPay.svg">
                <p>Add to <br/>GPay</p>
            </a>
        </li>
        <li class="card-action-item">
            <a href="#">
                <img src="../assets/img/Replace-card.svg">
                <p>Replace <br/>Card</p>
            </a>
        </li>
        <li class="card-action-item">
            <a href="#">
                <img src="../assets/img/Deactivate-card.svg">
                <p>Cancel <br/>Card</p>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'CardActions'
}
</script>

<style lang="scss" scoped>
.card-action {
    background-color: $grey-third;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    @media (min-width: 768px) {
        border-radius: 20px;
        margin-top: 30px;
    }
    .card-action-list {
        list-style-type: none;
        .card-action-item {
            text-align: center;
            @media (min-width: 768px) {
                padding: 0 16px;
            }
            a {
                text-decoration: none;
                color: $blue-primary;
                p {
                    font-size: 13px;
                    margin: 0;
                }
            }
        }
    }
}

</style>>
