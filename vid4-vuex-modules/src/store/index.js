import {createStore} from "vuex";
import contact from "./modules/contact";
import taskmanager from "./modules/taskManager";

const store = createStore({

    

    state: {
        mainName: "Muzaffer Berk Berkmen",

    },
    modules: {
        musteri: contact,
        taskmanager

    }
});

export default store;