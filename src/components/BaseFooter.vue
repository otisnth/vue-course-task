<template>
    <footer>
        <div class="container">
            <div class="copyright">
                &#169; 2023 ОБУ ИТЦ. Все права защищены.
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

footer {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    justify-content: center;
    
    .container {
        width: 100%;
        display: grid;
        justify-content: start;
        padding-top: 24px;
        padding-bottom: 24px;
    }

    .copyright {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #667085;
    }

}

</style>