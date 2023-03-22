<template>
    <div>
        <NavbarC />
        <section class="container">
            <div class="contact">
                <h2 class="text-dark pt-4 pb-3">Contact us </h2>
                <form @submit.prevent="userRegister"><br>
                 
                    <div class="form-outline">
                        <label class="text-dark" for="#firstname" style="font-size:20px">Name</label>
                        <input id="firstname" class="form-control" name="firstName" type="text" placeholder="Enter your name" required>
                    </div>
                    <div>
                        <label class="text-dark" for="#number" style="font-size:20px">Number</label>
                        <input id="surname" class="form-control" name="surname" type="number" placeholder="Enter your Number" required>
                    </div>

                    <div>
                        <label class="text-dark" for="#Email" style="font-size:20px">Email</label>
                        <input id="surname" class="form-control" name="surname" type="text" placeholder="Enter your Email" required>
                    </div>

                    <div>
                        <label class="text-dark" for="#surname" style="font-size:20px">Surname</label>
                        <input id="surname" class="form-control" name="surname" type="text" placeholder="Enter your surname" required>
                    </div>

                    <div>
                        <label class="text-dark" for="#message" style="font-size:20px">Message</label>
                        <textarea name="message" class="form-control" cols="45" rows="5" placeholder="Enter your message" required></textarea>
                    </div>
                    <div class="button">
                        <input type="submit" value="submit">
                    </div>
                    <br>
                </form>
            </div>
        </section>
    </div>
    <FooterC />
</template>
<script>

    import NavbarC from '@/components/NavbarC.vue';
    import FooterC from '@/components/FooterC.vue';

    export default {
    components: {
        FooterC,
        NavbarC
    },

}
</script>
<style scoped>

.contact{
    padding: 1rem;
}
input[type=submit] {
    color: rgb(255, 255, 255);
    background-color: #808080;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
}
input[type=text] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0px;
    box-sizing: border-box;
}
input[type=number] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0px;
    box-sizing: border-box;
}
/* input:hover[type=text] {
    border: none;
    border: 4px;
} */
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
}
/* textarea:hover {
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    
} */
.button{
    padding-bottom: 2rem;
}


</style>