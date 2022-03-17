<template>
    <div class="manage__flight__footer">
        <div class="left_btns">
            <button>Cancel Flight</button>
            <button>Cancel Flight</button>
        </div>
        <button>Import Changes</button>
    </div>
</template>

<script>

export default {
  name: 'manageFooter'
}
</script>

<style scoped>
    .manage__flight__footer {
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .left_btns {
        width: 550px;
        display: flex;
        justify-content: space-between;
    }
    button {
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>
