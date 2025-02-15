import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "@/views/Home.vue";

const routes = [
 //ilgili farklı yerlerdeki routerları alıp burda combine edebiliriz.

 {
   name: "HomePage",
    path: "/" ,//localhost nereye gidecek ?
    //component: Home
    component: () => import("@/views/HomeComp.vue")
 },

 {
   name: "AboutPage",
    path: "/hakkimda" ,//localhost nereye gidecek ?
    component: () => import("@/views/AboutComp.vue")
 },

 {
   name: "DetailsPage",
   path: "/details/:userId",//localhost nereye gidecek ?
   component: () => import("@/views/DetailsComp.vue")
},




];


const router = createRouter({
    routes,
    history: createWebHashHistory() //single page app ? neden ? hash history yenilendi 404 hatası. sunucudan gelen routingle bizim slashle gönderdiğimiz
    //rotingi çözemediği için araya hash atarak sunucunun kavramasını sağlıyor
});

export default router;