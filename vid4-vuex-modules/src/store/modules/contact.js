export default { // bu store değil modüller

    
    namespaced: true, //bu arkadaşlara artık erişirken burdaki modulün register olmuş ismini kullanarak yapmamız gerekiyor
    state: {
        contactName: "Sema Berkmen",
        contactAddress: "Rami yeni mah."
    },

    mutations: {

        setItem(state, name){
            state.contactName = name;

        }
    },
    getters: {
        _contactName: state => state.contactName
    }
};