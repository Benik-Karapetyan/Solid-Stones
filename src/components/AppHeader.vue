<template>
    <header class="app-header">
        <div class="app-title">
            <img
                src="@/assets/angel.jpg"
                alt="website logo"
                class="header-logo"
            />

            <div style="padding: 0 30px">
                <h1 class="b-title">SOLID STONES</h1>
                <h3 class="b-subtitle">CREATE FROM NOTHING</h3>
            </div>
        </div>

        <nav class="app-navbar">
            <ul class="b-list">
                <li
                    v-for="link in navLinks"
                    :key="link.title"
                    class="b-list-item"
                >
                    <router-link
                        class="b-list-item-link"
                        :to="link.to"
                        v-text="link.title"
                        active-class="bg-black"
                    ></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "AppHeader",

    data: () => ({
        navLinks: [
            { title: "Գլխավոր", to: "/" },
            { title: "Ծառայություններ", to: "/services" },
            { title: "Քարեր", to: "/stones" },
            { title: "Ինչու Մենք", to: "/why-pick-us" },
            { title: "Մեր Մասին", to: "/about-us" },
        ],
    }),
};
</script>

<style scoped>
.app-header {
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 0 150px;
}

.app-title {
    display: flex;
    align-items: center;
}

.header-logo {
    width: 64px;
    height: 64px;
}

.b-title {
    color: white;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
}

.b-subtitle {
    color: white;
    font-size: 0.5rem;
    font-weight: 500;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    text-align: center;
    letter-spacing: 1px;
}

.b-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.b-list-item {
    display: inline-block;
}

.b-list-item-link {
    text-decoration: none;
    display: block;
    color: white;
    padding: 36px 16px;
}

.b-list-item-link:hover {
    background-color: black;
}

.bg-black {
    background-color: black;
}
</style>
